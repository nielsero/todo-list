import "./style.css";
import ProjectManager from "./modules/projectManager";
import bindInitialEventListeners from "./modules/bindInitialEventListeners";
import { render } from "./modules/render";
import bindEventListenersToProjectElements from "./modules/bindEventListenersToProjectElements";
import Project from "./modules/project";
import TodoItem from "./modules/todoItem";
import bindEventListenersToTodoElements from "./modules/bindEventListenersToTodoElements";

function main() {
    const projectManager = new ProjectManager();
    setupMockProjectManager(projectManager);
    bindInitialEventListeners();
    render(projectManager);
    bindEventListenersToProjectElements(projectManager);
    bindEventListenersToTodoElements(projectManager);
}

function setupMockProjectManager(projectManager) {
    const demoProject = new Project("Demo");
    const otherProject = new Project("Other");

    const todoOne = new TodoItem("First todo", "Todo description", new Date(), 1);
    const todoTwo = new TodoItem("Second todo", "Todo description", new Date(), 1);
    const todoThree = new TodoItem("Third todo", "Todo description", new Date(), 1);
    const todoFour = new TodoItem("Fourth todo", "Todo description", new Date(), 1);

    demoProject.addTodo(todoOne);
    demoProject.addTodo(todoTwo);
    otherProject.addTodo(todoThree);
    otherProject.addTodo(todoFour);

    projectManager.addProject(demoProject);
    projectManager.addProject(otherProject);
    projectManager.activeProject = demoProject;
}

main();