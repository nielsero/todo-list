import cleanContainer from "../util/cleanContainer";
import appendChildren from "../util/appendChildren";

function renderProjects(projects) {
    const projectsContainer = document.querySelector(".projects");
    cleanContainer(projectsContainer); // out with the old, in with the new

    projects.forEach((project) => {
        projectsContainer.appendChild(createProjectElement(project));
    });
}

function renderTodosFromProject(project) {
    const todosProjectTitle = document.querySelector(".todos__project-title");
    todosProjectTitle.textContent = project.title;

    const todosContainer = document.querySelector(".todos");
    cleanContainer(todosContainer);
   
    project.todos.forEach((todo, index) => {
        todosContainer.appendChild(createTodoElement(todo, index));
    });
}

function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.setAttribute("data-project", project.title); // added data attribute to help with event listeners recognition

    const projectTitle = createParagraph(project.title);
    projectTitle.classList.add("project__title");

    const projectButtonsContainer = document.createElement("div");
    projectButtonsContainer.classList.add("project__buttons");

    const projectEditButton = createButtonWithIcon("bxs-edit");
    projectEditButton.classList.add("project__edit-button");
    projectEditButton.setAttribute("data-project", project.title);

    const projectDeleteButton = createButtonWithIcon("bxs-trash-alt");
    projectDeleteButton.classList.add("project__delete-button");
    projectDeleteButton.setAttribute("data-project", project.title);

    appendChildren(projectButtonsContainer, [projectEditButton, projectDeleteButton]);
    appendChildren(projectElement, [projectTitle, projectButtonsContainer]);
    console.log(projectElement);
    return projectElement;
}

function createTodoElement(todo, index) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");

    const todoMain = createTodoMain(todo, index);

    const todoExtra = createTodoExtra(todo);

    appendChildren(todoElement, [todoMain, todoExtra]);
    console.log(todoElement);
    return todoElement;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createButtonWithIcon(iconClassName) {
    const button = document.createElement("button");

    const icon = document.createElement("i");
    icon.classList.add("bx");
    icon.classList.add(iconClassName);

    button.appendChild(icon);
    return button;
}

function createTodoMain(todo, index) {
    const todoMain = document.createElement("div");
    todoMain.classList.add("todo__main");

    const todoMainContent = createTodoMainContent(todo);
    const todoButtons = createTodoButtons(index);

    appendChildren(todoMain, [todoMainContent, todoButtons]);
    return todoMain;
}

function createTodoMainContent(todo) {
    const todoMainContent = document.createElement("div");
    todoMainContent.classList.add("todo-main__content");
    
    const todoMainCheckboxAndTitleContainer = createTodoMainCheckboxAndTitleContainer(todo);

    const todoDueDate = createParagraph(todo.formattedDueDate);
    todoDueDate.classList.add("todo__due-date");
            
    appendChildren(todoMainContent, [todoMainCheckboxAndTitleContainer, todoDueDate]);
    return todoMainContent;
}

function createTodoMainCheckboxAndTitleContainer(todo) {
    const todoMainCheckboxAndTitleContainer = document.createElement("div");
    todoMainCheckboxAndTitleContainer.classList.add("todo-main__checkbox-and-title-container");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.classList.add("todo__checkbox");

    const todoTitle = createParagraph(todo.title);
    todoTitle.classList.add("todo__title");

    appendChildren(todoMainCheckboxAndTitleContainer, [todoCheckbox, todoTitle]);
    return todoMainCheckboxAndTitleContainer;
}

function createTodoButtons(index) {
    const todoButtonsContainer = document.createElement("div");
    todoButtonsContainer.classList.add("todo__buttons");

    const todoSeeMoreButton = createButtonWithIcon("bxs-down-arrow");
    todoSeeMoreButton.classList.add("todo__see-more-button");
    todoSeeMoreButton.setAttribute("data-todo", index);

    const todoEditButton = createButtonWithIcon("bxs-edit");
    todoEditButton.classList.add("todo__edit-button");
    todoEditButton.setAttribute("data-todo", index);

    const todoDeleteButton = createButtonWithIcon("bxs-trash-alt");
    todoDeleteButton.classList.add("todo__delete-button");
    todoDeleteButton.setAttribute("data-todo", index);

    appendChildren(todoButtonsContainer, [todoSeeMoreButton, todoEditButton, todoDeleteButton]);
    return todoButtonsContainer;
} 

function createTodoExtra(todo) {
    const todoExtra = document.createElement("div");
    todoExtra.classList.add("todo__extra");

    const todoDescriptionTitle = createParagraph("Description");
    todoDescriptionTitle.classList.add("todo__description-title");

    const todoDescription = createParagraph(todo.description);
    todoDescription.classList.add("todo__description");

    const todoPriority = createParagraph(`Priority: ${todo.priorityInWords}`);
    todoPriority.classList.add("todo__priority");

    const todoStatus = createParagraph(`Status: ${todo.statusInWords}`);
    todoStatus.classList.add("todo__status");

    appendChildren(todoExtra, [todoDescriptionTitle, todoDescription, todoPriority, todoStatus]);
    return todoExtra;
}

export { renderProjects, renderTodosFromProject };