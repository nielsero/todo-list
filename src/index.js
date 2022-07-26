import Project from "./modules/project";
import ProjectManager from "./modules/projectManager";
import TodoItem from "./modules/todoItem";
import { renderProjects, renderTodos } from "./modules/render";
import bindEventListeners from "./modules/bindEventListeners";

// Initialization
export const projectManager = new ProjectManager(); // exported to be used by the event listeners
const defaultProject = new Project("default");
// projectManager.addProject(defaultProject);
// projectManager.changeActiveProjectTo("default");

// Demo todos
const first = new TodoItem("first todo", "description of first todo", new Date(), 1);
const second = new TodoItem("second todo", "description of second todo", new Date(), 2);
const third = new TodoItem("third todo", "description of third todo", new Date(), 1);
const fourth = new TodoItem("fourth todo", "description of fourth todo", new Date(), 1);

const otherProject = new Project("other");
defaultProject.addTodo(first);
defaultProject.addTodo(second);

otherProject.addTodo(third);
otherProject.addTodo(fourth);

projectManager.addProject(defaultProject);
projectManager.addProject(otherProject);
projectManager.changeActiveProjectTo("default");

renderProjects(projectManager.projects);
renderTodos(projectManager.activeProject.todos);

bindEventListeners();