import Project from "./project";
import { render } from "./render";

// Called only once, at the start
function bindEventListenersToStaticProjectElements(projectManager) {
    // Static DOM elements
    const projectEditConfirmButton = document.querySelector(".project-edit__confirm-button");

    // Listeners
    projectEditConfirmButton
        .addEventListener("click", () => { handleProjectEditConfirmButton(projectManager) });
}

// This are the listeners that I'll have to recursively call before each render
function bindEventListenersToDynamicProjectElements(projectManager) {
    // Dynamic DOM elements
    const projectEditButtons = document.querySelectorAll(".project__edit-button");
    const projectDeleteButtons = document.querySelectorAll(".project__delete-button");
    const projectContainers = document.querySelectorAll(".project");
    
    // Listeners
    projectEditButtons.forEach((button) => {
        const actualProjectContainer = button.parentElement.parentElement;
        const projectTitle = actualProjectContainer.getAttribute("data-project");

        button.addEventListener("click", (event) => 
            { handleProjectEditButton(event, projectManager, projectTitle) });
    });

    projectDeleteButtons.forEach((button) => {
        const actualProjectContainer = button.parentElement.parentElement;
        const projectTitle = actualProjectContainer.getAttribute("data-project");

        button.addEventListener("click", (event) => 
            { handleProjectDeleteButton(event, projectManager, projectTitle) });
    });

    projectContainers.forEach((projectContainer) => {
        projectContainer.addEventListener("click", () => 
            { handleProjectClick(projectContainer, projectManager) });
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
    const projectEditContainer = document.querySelector(".project-edit");
    const projectEditInput = document.querySelector(".project-edit__input");
    const projectTitle = projectEditInput.value;

    if(!projectManager.isProjectTitleValid(projectTitle)) {
        console.log("project title not valid for adding")
        return;
    }

    const project = new Project(projectTitle); // create
    projectManager.addProject(project); // add
   
    projectManager.activeProject = project;
    render(projectManager); // render
    projectEditInput.value = ""; // clean
    projectEditContainer.classList.add("project-edit_invisible");
}

function handleProjectEditConfirmButtonModeEdit(projectManager) {
    const projectEditContainer = document.querySelector(".project-edit");
    const projectEditInput = document.querySelector(".project-edit__input");
    const projectNewTitle = projectEditInput.value;

    if(!projectManager.isProjectTitleValid(projectNewTitle)) {
        console.log("project title not valid for edit");
        return;
    }

    const projectTitle = projectEditContainer.getAttribute("data-project");

    // Find the actual project in manager
    const project = projectManager.findProject(projectTitle);
    project.title = projectNewTitle;
    projectEditContainer.setAttribute("data-project", projectNewTitle); // this matters on next edit because we changed the title

    // Re-render, clean & re-bind
    projectManager.activeProject = project;
    render(projectManager); // render now does the re-bind
    projectEditInput.value = "";
    projectEditContainer.classList.add("project-edit_invisible");
}

function handleProjectEditButton(event, projectManager, projectTitle) {
    const projectEditContainer = document.querySelector(".project-edit");
    projectEditContainer.classList.remove("project-edit_invisible");
    projectEditContainer.setAttribute("data-mode", "edit");
    projectEditContainer.setAttribute("data-project", projectTitle);

    const projectEditInput = document.querySelector(".project-edit__input");
    const project = projectManager.findProject(projectTitle);
    projectEditInput.value = project.title; // set input to old title to see what we are editing

    event.stopPropagation(); // because project container is clickable as well
}

function handleProjectDeleteButton(event, projectManager, projectTitle) {
    projectManager.deleteProject(projectTitle);
    render(projectManager); // re-render

    event.stopPropagation();
}

function handleProjectClick(projectContainer, projectManager) {
    const projectTitle = projectContainer.getAttribute("data-project");
    projectManager.activeProject = projectManager.findProject(projectTitle);
    render(projectManager);
}

export { bindEventListenersToStaticProjectElements, bindEventListenersToDynamicProjectElements };