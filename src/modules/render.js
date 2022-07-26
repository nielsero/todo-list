import cleanContainer from "../util/cleanContainer";
import appendChildren from "../util/appendChildren";

const projectsDiv = document.querySelector(".projects");
const todosDiv = document.querySelector(".todos");

function renderProjects(projects) {
    cleanContainer(projectsDiv); // out with the old, in with the new

    projects.forEach((project) => {
        projectsDiv.appendChild(createProjectElement(project));
    });
}

function renderTodos(todos) {
    cleanContainer(todosDiv);
   
    todos.forEach((todo, index) => {
        todosDiv.appendChild(createTodoElement(todo, index));
    });
}

function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    console.log(project.name);
    projectElement.setAttribute("data-project", project.name);
    // added data attribute to help with event listeners recognition

    const projectName = createParagraph(project.name);
    projectName.classList.add("project__name");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("project__buttons-container");
    const editButton = createButton("Edit");
    editButton.classList.add("project__edit-button");
    editButton.setAttribute("data-project", project.name);
    const deleteButton = createButton("Delete");
    deleteButton.classList.add("project__delete-button");
    deleteButton.setAttribute("data-project", project.name);

    appendChildren(buttonsContainer, [editButton, deleteButton]);
    appendChildren(projectElement, [projectName, buttonsContainer]);
    return projectElement;
}

function createTodoElement(todo, index) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");

    const mainPart = document.createElement("div");
    mainPart.classList.add("todo__main");
    const todoFinished = document.createElement("input");
    todoFinished.type = "checkbox";
    const todoTitle = createParagraph(todo.title);
    todoTitle.classList.add("todo__title");
    const todoDate = createParagraph(todo.formattedDueDate);
    const buttonsContainer = document.createElement("div");
    const editButton = createButton("Edit");
    editButton.setAttribute("data-todo", index);
    const deleteButton = createButton("Delete");
    deleteButton.setAttribute("data-todo", index);
    const seeMoreButton = createButton("See more");
    seeMoreButton.setAttribute("data-todo", index);
    const mainElements = [todoFinished, todoTitle, todoDate, buttonsContainer];
    appendChildren(buttonsContainer, [editButton, deleteButton, seeMoreButton]);
    appendChildren(mainPart, mainElements);
    
    const extraPart = document.createElement("div");
    extraPart.classList.add("todo__extra");
    const description = createParagraph(todo.description);
    const priority = createParagraph(todo.priority);
    const closeButton = createButton("Close");
    appendChildren(extraPart, [description, priority, closeButton]);

    appendChildren(todoElement, [mainPart, extraPart]);
    return todoElement;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    return button;
}

export { renderProjects, renderTodos };