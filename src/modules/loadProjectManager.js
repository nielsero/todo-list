import storageAvailable from "../util/storageAvailable";
import TodoItem from "./todoItem";
import Project from "./project";
import ProjectManager from "./projectManager";

function loadProjectManager() {
    if(!localStorage.getItem("projectManager" || !storageAvailable("localStorage"))) {
        return setupMockProjectManager();
    }

    console.log("Loading actual project manager from localStorage ...");
    const projectManagerJSON = JSON.parse(localStorage.getItem("projectManager"));
    
    const projectManager = new ProjectManager();
    const projects = loadProjects(projectManagerJSON);
    projects.forEach((project) => {
        projectManager.addProject(project);
    });

    if(projects.length > 0) {
        projectManager.activeProject = projectManager.projects[0];
    }
    return projectManager;
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

function loadProjects(projectManager) {
    const projects = projectManager.projects.map((_project) => {
        const project = new Project(_project.title);
        const todos = loadTodos(_project);
        todos.forEach((todo) => {
            project.addTodo(todo);
        });
        return project;
    });
    return projects;
}

function loadTodos(project) {
    const todos = project.todos.map((todo) => {
        const todoItem = new TodoItem(todo.title, todo.description, new Date(todo.dueDate), todo.priority);
        todoItem.isComplete = todo.isComplete;
        return todoItem;
    });
    return todos;
}

export default loadProjectManager;