import Project from "./project";

class ProjectManager {
    constructor() {
        this.projects = [];
        this.activeProject = null;
    }

    addProject(project) { 
        this.projects.push(project);
    }

    findProject(projectTitle) {
        const project = this.projects.find((proj) => {
            return proj.title === projectTitle;
        });
        return project;
    }

    deleteProject(projectTitle) {
        this.projects = this.projects.filter((project) => {
            return project.title != projectTitle;
        });
    }

    isTitleValid(projectTitle) {
        if(projectTitle == "") {
            return false;
        }
        return true;
    }
}

export default ProjectManager;