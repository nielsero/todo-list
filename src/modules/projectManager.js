import Project from "./project";

class ProjectManager {
    constructor() {
        this.projects = [ new Project("default") ];
        this.defaultProject = this.projects[0]; // the first project is default
        this.activeProject = this.defaultProject;
    }

    addProject(project) {
        const searchedProject = this.findProject(project.name);
        if(searchedProject) {
            console.log("[ ProjectManager ] Project with same name already exists");
            return;
        }
        this.projects.push(project);
    }

    changeActiveProjectTo(projectName) {
        const project = this.findProject(projectName);

        if(project == null) {
            console.log("[ ProjectManager ] Project not found");
            return false;
        }
        if(this.activeProject != null && projectName === this.activeProject.name) {
            console.log("[ ProjectManager ] Same project");
            return false;
        }
        this.activeProject = project;
    }

    findProject(projectName) {
        const project = this.projects.find((proj) => {
            return proj.name === projectName;
        });
        return project;
    }

    removeProject(projectName) {
        if(projectName === "default") {
            console.log("[ ProjectManager ] Can't remove default project");
            return;
        }
        this.projects = this.projects.filter((project) => {
            return project.name != projectName;
        });
        this.changeActiveProjectTo("default"); // after deleting go back to default
    }
}

export default ProjectManager;