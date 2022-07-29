function bindEventListenersToTodoElements(projectManager) {
    const todoSeeMoreButtons = document.querySelectorAll(".todo__see-more-button");

    todoSeeMoreButtons.forEach((button) => {
        button.addEventListener("click", handleSeeMoreButtonClick);
    });
}

function handleSeeMoreButtonClick(event) {
    const todoSeeMoreButton = this; // event.target is not working
    const todoContainer = todoSeeMoreButton.parentElement.parentElement.parentElement;
    const todoExtra = todoContainer.querySelector(".todo__extra");

    todoExtra.classList.remove("todo__extra_invisible");
    
    changeSeeMoreButtonToSeeLess(todoSeeMoreButton);
}

function changeSeeMoreButtonToSeeLess(todoSeeMoreButton) {
    const todoSeeMoreButtonIcon = todoSeeMoreButton.querySelector("i");
    todoSeeMoreButtonIcon.classList.remove("bxs-down-arrow");
    todoSeeMoreButtonIcon.classList.add("bxs-up-arrow");

    todoSeeMoreButton.removeEventListener("click", handleSeeMoreButtonClick);
    todoSeeMoreButton.addEventListener("click", handleSeeLessButtonClick);
}

function handleSeeLessButtonClick(event) {
    const todoSeeLessButton = this;
    const todoContainer = todoSeeLessButton.parentElement.parentElement.parentElement;
    const todoExtra = todoContainer.querySelector(".todo__extra");

    todoExtra.classList.add("todo__extra_invisible");

    changeSeeLessButtonToSeeMore(todoSeeLessButton);
}

function changeSeeLessButtonToSeeMore(todoSeeLessButton) {
    const todoSeeLessButtonIcon = todoSeeLessButton.querySelector("i");
    todoSeeLessButtonIcon.classList.remove("bxs-up-arrow");
    todoSeeLessButtonIcon.classList.add("bxs-down-arrow");

    todoSeeLessButton.removeEventListener("click", handleSeeLessButtonClick);
    todoSeeLessButton.addEventListener("click", handleSeeMoreButtonClick);
}

export default bindEventListenersToTodoElements;