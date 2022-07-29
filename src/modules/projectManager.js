import Project from "./project";

class ProjectManager {
    constructor() {
        this.projects = [];
        this.activeProject = null;
    }

    addProject(project) { 
        this.projects.push(project);

        if(this.activeProject == null) {
            this.activeProject = project;
        }
    }

    findProject(projectTitle) {
        const project = this.projects.find((proj) => {
            return proj.title === projectTitle;
        });
        return project;
    }

    deleteProject(projectTitle) {
        const isDeletingActiveProject = this.isProjectActive(projectTitle);
    
        this.projects = this.projects.filter((project) => {
            return project.title != projectTitle;
        });

        if(isDeletingActiveProject) {
            this.activeProject = this.projects[0];
        }
    }

    isTitleValid(projectTitle) {
        if(projectTitle == "") {
            return false;
        }
        return true;
    }

    isProjectActive(projectTitle) {
        return projectTitle === this.activeProject.title;
    }

    isEmpty() {
        return this.projects.length === 0;
    }
}

export default ProjectManager;