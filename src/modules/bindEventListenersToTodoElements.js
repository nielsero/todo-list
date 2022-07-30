import { render } from "./render";
import TodoItem from "./todoItem";

function bindEventListenersToStaticTodoElements(projectManager) {
    const todoEditConfirmButton = document.querySelector(".todo-edit__confirm-button");
    
    todoEditConfirmButton.
        addEventListener("click", () => { handleTodoEditConfirmButtonClick(projectManager) });
}

function bindEventListenersToDynamicTodoElements(projectManager) {
    const todoSeeMoreButtons = document.querySelectorAll(".todo__see-more-button");
    const todoDeleteButtons = document.querySelectorAll(".todo__delete-button");
    const todoEditButtons = document.querySelectorAll(".todo__edit-button");
    console.log(todoEditButtons);

    todoSeeMoreButtons.forEach((button) => {
        button.addEventListener("click", handleTodoSeeMoreButtonClick);
    });

    todoDeleteButtons.forEach((button) => {
        button.addEventListener("click", () => { 
            handleTodoDeleteButtonClick(button, projectManager) 
        });
    });

    todoEditButtons.forEach((button) => {
        button.addEventListener("click", () => {
            handleTodoEditButtonClick(button, projectManager);
        });
    });
}

function handleTodoEditConfirmButtonClick(projectManager) {
    const todoEditContainer = document.querySelector(".todo-edit");
    const mode = todoEditContainer.getAttribute("data-mode");

    if(mode === "add") {
        handleTodoEditConfirmButtonModeAdd(projectManager);
        return;
    }

    if(mode === "edit") {
        handleTodoEditConfirmButtonModeEdit(projectManager);
        return;
    }
}

function handleTodoEditConfirmButtonModeAdd(projectManager) {
    const todoEditForm = document.querySelector(".todo-edit");
    const todoEditTitleInput = document.querySelector(".todo-edit__title-input");
    const todoEditDescriptionArea = document.querySelector(".todo-edit__description-input"); // actually a text area, change later
    const todoEditDateInput = document.querySelector(".todo-edit__date-input");
    const todoEditPrioritySelect = document.querySelector(".todo-edit__priority-select");

    const todoTitle = todoEditTitleInput.value;
    const todoDescription = todoEditDescriptionArea.value;
    const todoDueDateString = todoEditDateInput.value;
    const todoPriority = todoEditPrioritySelect.value;
    
    // To prevent invalid dates
    const todoDueDate = (todoDueDateString === "") ? new Date() : new Date(todoDueDateString);

    const todo = new TodoItem(todoTitle, todoDescription, todoDueDate, todoPriority);
    projectManager.activeProject.addTodo(todo);
    
    render(projectManager);
    cleanTodoEditFormInputs();
    todoEditForm.classList.add("todo-edit_invisible");
}

function cleanTodoEditFormInputs() {
    const todoEditTitleInput = document.querySelector(".todo-edit__title-input");
    const todoEditDescriptionArea = document.querySelector(".todo-edit__description-input"); // actually a text area, change later
    const todoEditDateInput = document.querySelector(".todo-edit__date-input");
    const todoEditPrioritySelect = document.querySelector(".todo-edit__priority-select");

    todoEditTitleInput.value = "";
    todoEditDescriptionArea.value = "";
    todoEditDateInput.value = "";
    todoEditPrioritySelect.value = 0;
}

function handleTodoEditConfirmButtonModeEdit(projectManager) {
    const todoEditContainer = document.querySelector(".todo-edit");
    const todoIndex = Number(todoEditContainer.getAttribute("data-todo"));

    const todoEditTitleInput = document.querySelector(".todo-edit__title-input");
    const todoEditDescriptionArea = document.querySelector(".todo-edit__description-input"); // actually a text area, change later
    const todoEditDateInput = document.querySelector(".todo-edit__date-input");
    const todoEditPrioritySelect = document.querySelector(".todo-edit__priority-select");

    const todoTitle = todoEditTitleInput.value;
    const todoDescription = todoEditDescriptionArea.value;
    const todoDueDateString = todoEditDateInput.value;
    const todoPriority = todoEditPrioritySelect.value;
    
    // To prevent invalid dates
    const todoDueDate = (todoDueDateString === "") ? new Date() : new Date(todoDueDateString);

    const todo = projectManager.activeProject.findTodo(todoIndex);
    todo.edit(todoTitle, todoDescription, todoDueDate, todoPriority);
    
    render(projectManager);
    cleanTodoEditFormInputs();
    todoEditContainer.classList.add("todo-edit_invisible");
}

function handleTodoSeeMoreButtonClick(event) {
    const todoSeeMoreButton = this; // event.target is not working
    const todoContainer = todoSeeMoreButton.parentElement.parentElement.parentElement;
    const todoExtra = todoContainer.querySelector(".todo__extra");

    todoExtra.classList.remove("todo__extra_invisible");
    
    changeTodoSeeMoreButtonToSeeLess(todoSeeMoreButton);
}

function changeTodoSeeMoreButtonToSeeLess(todoSeeMoreButton) {
    const todoSeeMoreButtonIcon = todoSeeMoreButton.querySelector("i");
    todoSeeMoreButtonIcon.classList.remove("bxs-down-arrow");
    todoSeeMoreButtonIcon.classList.add("bxs-up-arrow");

    todoSeeMoreButton.removeEventListener("click", handleTodoSeeMoreButtonClick);
    todoSeeMoreButton.addEventListener("click", handleTodoSeeLessButtonClick);
}

function handleTodoSeeLessButtonClick(event) {
    const todoSeeLessButton = this;
    const todoContainer = todoSeeLessButton.parentElement.parentElement.parentElement;
    const todoExtra = todoContainer.querySelector(".todo__extra");

    todoExtra.classList.add("todo__extra_invisible");

    changeTodoSeeLessButtonToSeeMore(todoSeeLessButton);
}

function changeTodoSeeLessButtonToSeeMore(todoSeeLessButton) {
    const todoSeeLessButtonIcon = todoSeeLessButton.querySelector("i");
    todoSeeLessButtonIcon.classList.remove("bxs-up-arrow");
    todoSeeLessButtonIcon.classList.add("bxs-down-arrow");

    todoSeeLessButton.removeEventListener("click", handleTodoSeeLessButtonClick);
    todoSeeLessButton.addEventListener("click", handleTodoSeeMoreButtonClick);
}

function handleTodoDeleteButtonClick(todoDeleteButton, projectManager) {
    const todoElement = todoDeleteButton.parentElement.parentElement.parentElement;
    const todoIndex = Number(todoElement.getAttribute("data-todo"));

    projectManager.activeProject.deleteTodo(todoIndex);
    render(projectManager);
}

function handleTodoEditButtonClick(todoEditButton, projectManager) {
    // Main elements
    const todoElement = todoEditButton.parentElement.parentElement.parentElement.parentElement;
    const todoIndex = Number(todoElement.getAttribute("data-todo"));
    const todo = projectManager.activeProject.findTodo(todoIndex);

    // Elements to modify
    const todoEditContainer = document.querySelector(".todo-edit");
    const todoEditTitleInput = document.querySelector(".todo-edit__title-input");
    const todoEditDescriptionArea = document.querySelector(".todo-edit__description-input"); // actually a text area, change later
    const todoEditDateInput = document.querySelector(".todo-edit__date-input");
    const todoEditPrioritySelect = document.querySelector(".todo-edit__priority-select");
    
    todoEditContainer.classList.remove("todo-edit_invisible");
    todoEditContainer.setAttribute("data-mode", "edit");
    todoEditContainer.setAttribute("data-todo", todoIndex);

    todoEditTitleInput.value = todo.title;
    todoEditDescriptionArea.value = todo.description;
    todoEditDateInput.value = todo.browserRequiredFormattedDueDate;
    todoEditPrioritySelect.value = todo.priority;
}

export { bindEventListenersToStaticTodoElements , bindEventListenersToDynamicTodoElements };