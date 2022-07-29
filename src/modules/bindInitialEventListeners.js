import previousDay from "date-fns/previousDay/index";

function bindInitialEventListeners() {
    // Getting the DOM elements
    const headerProjectsButton = document.querySelector(".header__projects-button");
    const projectAddButton = document.querySelector(".project__add-button");
    const projectEditCancelButton = document.querySelector(".project-edit__cancel-button");


    // Binding listeners
    headerProjectsButton.addEventListener("click", handleHeaderProjectsButtonClick);
    projectAddButton.addEventListener("click", handleProjectAddButtonClick);
    projectEditCancelButton.addEventListener("click", handleProjectEditCancelButtonClick);
}

function handleHeaderProjectsButtonClick(event) {
    // Reveal the projects and edit section
    const projectsAndEditContainer = document.querySelector(".projects-and-edit-container");
    projectsAndEditContainer.classList.remove("projects-and-edit-container_invisible");

    changeHeaderProjectsButtonToCloseMode();
}

function changeHeaderProjectsButtonToCloseMode() {
    const headerProjectsButton = document.querySelector(".header__projects-button");
    const headerProjectsButtonIcon = headerProjectsButton.querySelector("i");

    headerProjectsButtonIcon.classList.remove("bx-menu");
    headerProjectsButtonIcon.classList.add("bx-x");

    // Change the event listeners
    headerProjectsButton.removeEventListener("click", handleHeaderProjectsButtonClick);
    headerProjectsButton.addEventListener("click", handleHeaderProjectsButtonCloseClick);
}

function handleHeaderProjectsButtonCloseClick(event) {
    // Hide the projects and edit section
    const projectsAndEditContainer = document.querySelector(".projects-and-edit-container");
    projectsAndEditContainer.classList.add("projects-and-edit-container_invisible");

    changeHeaderProjectsButtonToOpenMode();
}

function changeHeaderProjectsButtonToOpenMode() {
    const headerProjectsButton = document.querySelector(".header__projects-button");
    const headerProjectsButtonIcon = headerProjectsButton.querySelector("i");

    headerProjectsButtonIcon.classList.remove("bx-x");
    headerProjectsButtonIcon.classList.add("bx-menu");

    headerProjectsButton.removeEventListener("click", handleHeaderProjectsButtonCloseClick);
    headerProjectsButton.addEventListener("click", handleHeaderProjectsButtonClick);
}

function handleProjectAddButtonClick(event) {
    // Reveal project edit form
    const projectEditForm = document.querySelector(".project-edit");
    projectEditForm.classList.remove("project-edit_invisible");
}

function handleProjectEditCancelButtonClick(event) {
    // Hide the project edit form again
    const projectEditForm = document.querySelector(".project-edit");
    projectEditForm.classList.add("project-edit_invisible");
}

export default bindInitialEventListeners;