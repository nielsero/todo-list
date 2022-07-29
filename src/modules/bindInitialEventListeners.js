import previousDay from "date-fns/previousDay/index";

function bindInitialEventListeners() {
    // Getting the DOM elements
    const headerProjectsButton = document.querySelector(".header__projects-button");

    // Binding listeners
    headerProjectsButton.addEventListener("click", handleHeaderProjectsButtonClick);
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

export default bindInitialEventListeners;