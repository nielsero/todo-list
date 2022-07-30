import cleanContainer from "../util/cleanContainer";
import appendChildren from "../util/appendChildren";
import { bindEventListenersToDynamicProjectElements } from "./bindEventListenersToProjectElements";
import { bindEventListenersToDynamicTodoElements } from "./bindEventListenersToTodoElements";
import saveProjectManager from "./saveProjectManager";

function render(projectManager) {
    renderProjectsFromProjectManager(projectManager);
    renderTodosFromProjectManager(projectManager);
    saveProjectManager(projectManager);
} 

function renderProjectsFromProjectManager(projectManager) {
    const projectsContainer = document.querySelector(".projects");
    cleanContainer(projectsContainer); // out with the old, in with the new

    if(projectManager.isEmpty()) {
        const emptyProjectsMessage = createParagraph("No projects");
        emptyProjectsMessage.classList.add("project__empty-projects-message");
        projectsContainer.appendChild(emptyProjectsMessage);
        return;
    }

    projectManager.projects.forEach((project) => {
        const projectElement = createProjectElement(project);

        if(projectManager.isProjectActive(project.title)) {
            projectElement.classList.add("project_active");
        }

        projectsContainer.appendChild(projectElement);
    });

    bindEventListenersToDynamicProjectElements(projectManager); // re-binding listeners to new project elements
}

function renderTodosFromProjectManager(projectManager) {
    const todosProjectTitle = document.querySelector(".todos__project-title");
    const todoAddButton = document.querySelector(".todo__add-button");
    const todoEditForm = document.querySelector(".todo-edit");
    const todosContainer = document.querySelector(".todos");
    cleanContainer(todosContainer);

    const project = projectManager.activeProject;

    if(project == null ) {
        todosProjectTitle.textContent = "Todos";
        const emptyTodosMessage = createParagraph("Can't make todos, create a project first.");
        emptyTodosMessage.classList.add("todo__empty-todos-message");
        todosContainer.appendChild(emptyTodosMessage);

        // To not display add button & form, when there are no projects
        todoAddButton.classList.add("todo__add-button_invisible");
        todoEditForm.classList.add("todo-edit_invisible");
        return;
    } 

    todoAddButton.classList.remove("todo__add-button_invisible");
    todosProjectTitle.textContent = project.title;
   
    if(project.todos.length === 0) {
        const emptyTodosMessage = createParagraph("No todos available, add a todo.");
        emptyTodosMessage.classList.add("todo__empty-todos-message");
        todosContainer.appendChild(emptyTodosMessage);
        return;
    }
    
    project.todos.forEach((todo, index) => {
        todosContainer.appendChild(createTodoElement(todo, index));
    });

    bindEventListenersToDynamicTodoElements(projectManager);
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
    todoElement.setAttribute("data-todo", index);

    const todoMain = createTodoMain(todo);

    const todoExtra = createTodoExtra(todo);

    if(todo.isComplete) {
        todoMain.classList.add("todo-main_checked");
    }

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

function createTodoMain(todo) {
    const todoMain = document.createElement("div");
    todoMain.classList.add("todo__main");

    const todoMainContent = createTodoMainContent(todo);
    const todoButtons = createTodoButtons();

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

    if(todo.isComplete) {
        todoCheckbox.checked = true;
    }

    appendChildren(todoMainCheckboxAndTitleContainer, [todoCheckbox, todoTitle]);
    return todoMainCheckboxAndTitleContainer;
}

function createTodoButtons() {
    const todoButtonsContainer = document.createElement("div");
    todoButtonsContainer.classList.add("todo__buttons");

    const todoSeeMoreButton = createButtonWithIcon("bxs-down-arrow");
    todoSeeMoreButton.classList.add("todo__see-more-button");

    const todoEditButtonLink = document.createElement("a");
    todoEditButtonLink.href = "#todo-edit";
    todoEditButtonLink.classList.add("todo__edit-button-link");
    const todoEditButton = createButtonWithIcon("bxs-edit");
    todoEditButton.classList.add("todo__edit-button");
    todoEditButtonLink.appendChild(todoEditButton);

    const todoDeleteButton = createButtonWithIcon("bxs-trash-alt");
    todoDeleteButton.classList.add("todo__delete-button");

    appendChildren(todoButtonsContainer, [todoSeeMoreButton, todoEditButtonLink, todoDeleteButton]);
    return todoButtonsContainer;
} 

function createTodoExtra(todo) {
    const todoExtra = document.createElement("div");
    todoExtra.classList.add("todo__extra");
    todoExtra.classList.add("todo__extra_invisible");

    const todoDescriptionTitle = createParagraph("Description");
    todoDescriptionTitle.classList.add("todo__description-title");

    let todoDescription;

    if(todo.description === "") {
        todoDescription = createParagraph("No description provided");
        todoDescription.classList.add("todo__description_not-provided");
    } else {
        todoDescription = createParagraph(todo.description);
    }
    todoDescription.classList.add("todo__description");

    const todoPriorityTitle = createParagraph("Priority");
    todoPriorityTitle.classList.add("todo__priority-title");

    const todoPriority = createParagraph(todo.priorityInWords);
    todoPriority.classList.add("todo__priority");

    appendChildren(todoExtra, [todoDescriptionTitle, todoDescription, todoPriorityTitle, todoPriority]);
    return todoExtra;
}

export { render, renderProjectsFromProjectManager, renderTodosFromProjectManager };