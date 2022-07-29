import Project from "./project";

class ProjectManager {
    constructor() {
        this.projects = [];
        this.activeProject = null;
    }

    addProject(project) {
        // const searchedProject = this.findProject(project.name);
        // if(searchedProject) {
        //     console.log("[ ProjectManager ] Project with same name already exists");
        //     return;
        // }
        this.projects.push(project);
    }

    findProject(projectName) {
        const project = this.projects.find((proj) => {
            return proj.name === projectName;
        });
        return project;
    }

    removeProject(projectName) {
        this.projects = this.projects.filter((project) => {
            return project.name != projectName;
        });
    }
}

export default ProjectManager;