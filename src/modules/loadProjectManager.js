import storageAvailable from "../util/storageAvailable";
import TodoItem from "./todoItem";
import Project from "./project";
import ProjectManager from "./projectManager";

function loadProjectManager() {
    return setupMockProjectManager();
    if(!localStorage.getItem("projectManager")) {
        return setupMockProjectManager();
    }
}

function setupMockProjectManager() {
    const projectManager = new ProjectManager();
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

    return projectManager;
}

export default loadProjectManager;