import { projectManager } from "..";
import { renderProjects, renderTodos } from "./render";

function bindEventListeners() {
    // DOM elements
    const projects = document.querySelectorAll(".project");
    const projectEditButtons = document.querySelectorAll(".project__edit-button");
    const projectDeleteButtons = document.querySelectorAll(".project__delete-button");
    console.log(projectDeleteButtons);

    console.log("Binding events");
    projects.forEach((project) => {
        project.addEventListener("click", handleProjectClick);
    });

    projectEditButtons.forEach((button) => {
        button.addEventListener("click", handleProjectEditClick);
    });

    projectDeleteButtons.forEach((button) => {
        button.addEventListener("click", handleDeleteButtonClick);
    });
}

function handleProjectClick(event) {
    // Using this because event.target is not working 
    // event.target is targetting the child not parent
    const projectName = this.getAttribute("data-project");
    console.log(projectName);
    
    projectManager.changeActiveProjectTo(projectName);
    renderTodos(projectManager.activeProject.todos);
}

function handleProjectEditClick(event) {
    console.log("[ handleProjectEditClick ] editing only");
    const projectEditContainer = document.querySelector(".project-edit");
    projectEditContainer.classList.remove("project-edit_invisible");
    const projectEditConfirmButton = document.querySelector(".project-edit__confirm-button");
    const projectEditCancelButton = document.querySelector(".project-edit__cancel-button");
   
    projectEditConfirmButton.addEventListener("click", handleProjectEditConfirmClick);
    projectEditCancelButton.addEventListener("click", handleProjectEditCancelClick);

    // Linking the project with the edit to know which project to update
    projectEditContainer.setAttribute("data-project", event.target.getAttribute("data-project"));

    event.stopPropagation(); // to stop it from triggering the parent event listener
}

function handleDeleteButtonClick(event) {
    const projectName = event.target.getAttribute("data-project");
    projectManager.removeProject(projectName);

    renderProjects(projectManager.projects);
    renderTodos(projectManager.activeProject.todos);
    bindEventListeners(); // every time I rerender the projects I have to re-bind the listeners
    event.stopPropagation();
}

function handleProjectEditConfirmClick(event) {
    // 
}

function handleProjectEditCancelClick(event) {
    const projectEditContainer = document.querySelector(".project-edit");
    projectEditContainer.classList.add("project-edit_invisible");
}

export default bindEventListeners;