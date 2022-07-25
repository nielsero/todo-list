class ProjectManager {
    constructor() {
        this.activeProject = null;
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }
}

export default ProjectManager;