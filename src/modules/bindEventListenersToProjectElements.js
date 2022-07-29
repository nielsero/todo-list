import Project from "./project";
import { render } from "./render";

function bindEventListenersToProjectElements(projectManager) {
    bindEventListenersToStaticProjectElements(projectManager);
    bindEventListenersToDynamicProjectElements(projectManager);
}

// Called only once, at the start
function bindEventListenersToStaticProjectElements(projectManager) {
    // Static DOM elements
    const projectEditConfirmButton = document.querySelector(".project-edit__confirm-button");

    // Listeners
    projectEditConfirmButton
    .addEventListener("click", () => handleProjectEditConfirmButton(projectManager));
}

// This are the listeners that I'll have to recursively call before each render
function bindEventListenersToDynamicProjectElements(projectManager) {
    // Dynamic DOM elements
    const projectEditButtons = document.querySelectorAll(".project__edit-button");
    const projectDeleteButtons = document.querySelectorAll(".project__delete-button");
    
    // Listeners
    projectEditButtons.forEach((button) => {
        const actualProjectContainer = button.parentElement.parentElement;
        const projectTitle = actualProjectContainer.getAttribute("data-project");

        button
            .addEventListener("click", () => handleProjectEditButton(projectManager, projectTitle));
    });

    projectDeleteButtons.forEach((button) => {
        const actualProjectContainer = button.parentElement.parentElement;
        const projectTitle = actualProjectContainer.getAttribute("data-project");

        button
            .addEventListener("click", () => handleProjectDeleteButton(projectManager, projectTitle));
    });
}

function handleProjectEditConfirmButton(projectManager) {
    const projectEditContainer = document.querySelector(".project-edit");
    const mode = projectEditContainer.getAttribute("data-mode");

    if(mode === "add") {
        handleProjectEditConfirmButtonModeAdd(projectManager);
        return;
    }

    if(mode === "edit") {
        handleProjectEditConfirmButtonModeEdit(projectManager);
        return;
    }
}

function handleProjectEditConfirmButtonModeAdd(projectManager) {
    const projectEditInput = document.querySelector(".project-edit__input");
    const projectTitle = projectEditInput.value;

    if(!projectManager.isTitleValid(projectTitle)) {
        console.log("project title not valid for adding")
        return;
    }

    const project = new Project(projectTitle); // create
    projectManager.addProject(project); // add
    render(projectManager); // render
    
    // Clean input and rebind events to all project elements
    projectEditInput.value = "";
    bindEventListenersToDynamicProjectElements(projectManager);
}

function handleProjectEditConfirmButtonModeEdit(projectManager) {
    const projectEditInput = document.querySelector(".project-edit__input");
    const projectNewTitle = projectEditInput.value;

    if(!projectManager.isTitleValid(projectNewTitle)) {
        console.log("project title not valid for edit");
        return;
    }

    const projectEditContainer = document.querySelector(".project-edit");
    const projectTitle = projectEditContainer.getAttribute("data-project");

    // Find the actual project in manager
    const project = projectManager.findProject(projectTitle);
    project.title = projectNewTitle;
    projectEditContainer.setAttribute("data-project", projectNewTitle); // this matters on next edit

    // Re-render, clean & re-bind
    render(projectManager);
    projectEditInput.value = "";
    bindEventListenersToDynamicProjectElements(projectManager);
}

function handleProjectEditButton(projectManager, projectTitle) {
    const projectEditContainer = document.querySelector(".project-edit");
    projectEditContainer.classList.remove("project-edit_invisible");
    projectEditContainer.setAttribute("data-mode", "edit");
    projectEditContainer.setAttribute("data-project", projectTitle);

    const projectEditInput = document.querySelector(".project-edit__input");
    const project = projectManager.findProject(projectTitle);
    projectEditInput.value = project.title; // set input to old title to see what we are editing
}

function handleProjectDeleteButton(projectManager, projectTitle) {
    projectManager.deleteProject(projectTitle);
    render(projectManager); // re-render
    bindEventListenersToDynamicProjectElements(projectManager); // re-bind
}

export default bindEventListenersToProjectElements;