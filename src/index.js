import TodoItem from "./modules/todoItem";
import Project from "./modules/project";
import ProjectManager from "./modules/projectManager";
import { renderProjects } from "./modules/render";
import { format } from "date-fns";

// const today = new Date();
// console.log(format(today, "dd-MM-yyyy"));

const projectManager = new ProjectManager();
const defaultProject = new Project("default");
const exampleTodo = new TodoItem("my todo", "this is an example todo", new Date(), 1);

projectManager.addProject(defaultProject);
defaultProject.addTodo(exampleTodo);

const otherProject = new Project("other");
const demoProject = new Project("demo");

projectManager.addProject(otherProject);
projectManager.addProject(demoProject);

renderProjects([... projectManager.projects]);