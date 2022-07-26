import { projectManager } from "..";
import { renderProjects, renderTodos } from "./render";

function bindEventListeners() {
    // DOM elements
    const projects = document.querySelectorAll(".project");
    const projectEditButtons = document.querySelectorAll(".project__edit-button");

    console.log("Binding events");
    console.log(projects);
    projects.forEach((project) => {
        project.addEventListener("click", handleProjectClick);
    });

    projectEditButtons.forEach((button) => {
        button.addEventListener("click", handleProjectEditClick);
    })
}

function handleProjectClick(event) {
    // Using this because event.target is not working (event.target is targetting the child not parent)
    const projectName = this.getAttribute("data-project");
    console.log(projectName);
    
    projectManager.changeActiveProjectTo(projectName);
    
    renderTodos(projectManager.activeProject.todos);
}

function handleProjectEditClick(event) {
    console.log("editing only");
    event.stopPropagation(); // to stop it from triggering the parent event listener
}

export default bindEventListeners;