import "./style.css";
import bindInitialEventListeners from "./modules/bindInitialEventListeners";
import { render } from "./modules/render";
import { bindEventListenersToStaticProjectElements } from "./modules/bindEventListenersToProjectElements";
import { bindEventListenersToStaticTodoElements } from "./modules/bindEventListenersToTodoElements";
import loadProjectManager from "./modules/loadProjectManager";

function main() {
    const projectManager = loadProjectManager();
    bindInitialEventListeners();
    bindEventListenersToStaticProjectElements(projectManager);
    bindEventListenersToStaticTodoElements(projectManager);
    render(projectManager);
}

main();