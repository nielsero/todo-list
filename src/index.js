import TodoItem from "./modules/todoItem";
import Project from "./modules/project";
import ProjectManager from "./modules/projectManager";
import { renderProjects, renderTodos } from "./modules/render";
import { format } from "date-fns";

// const today = new Date();
// console.log(format(today, "dd-MM-yyyy"));

const projectManager = new ProjectManager();
const defaultProject = new Project("default");
const exampleTodo = new TodoItem("my todo", "this is an example todo", new Date(), 1);
const otherTodo = new TodoItem("other todo", "this is another todo", new Date(), 2);

projectManager.addProject(defaultProject);
defaultProject.addTodo(exampleTodo);
defaultProject.addTodo(otherTodo);

const otherProject = new Project("other");
const demoProject = new Project("demo");

projectManager.addProject(otherProject);
projectManager.addProject(demoProject);

renderProjects([... projectManager.projects]);

renderTodos([... defaultProject.todos]);