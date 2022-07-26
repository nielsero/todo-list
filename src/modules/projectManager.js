class ProjectManager {
    constructor() {
        this.activeProject = null;
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    changeActiveProjectTo(projectName) {
        const project = this.findProject(projectName);

        if(project == null) {
            console.log("Project not found");
            return false;
        }
        if(this.activeProject != null && projectName === this.activeProject.name) {
            console.log("Same project");
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
}

export default ProjectManager;