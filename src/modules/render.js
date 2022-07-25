import cleanContainer from "../util/cleanContainer";

const projectsDiv = document.querySelector(".projects");
const todosDiv = document.querySelector(".todos");

function renderProjects(projects) {
    cleanContainer(projectsDiv); // first we have to remove old projects
    projects.forEach((project) => {
        const projectParagraph = document.createElement("p");
        projectParagraph.textContent = project.name;
        console.log(projectParagraph);
        projectsDiv.appendChild(projectParagraph);
    });
}

export { renderProjects };