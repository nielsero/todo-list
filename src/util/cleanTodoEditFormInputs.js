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

export default cleanTodoEditFormInputs;