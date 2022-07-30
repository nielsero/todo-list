function saveProjectManager(projectManager) {
    const projectManagerJSON = createProjectManagerJSON(projectManager);
    localStorage.setItem("projectManager", JSON.stringify(projectManagerJSON));
}

function createProjectManagerJSON(projectManager) {
    const projectManagerJSON = {
        projects: createProjectsJSON(projectManager.projects),
    }
    return projectManagerJSON;
}

function createProjectsJSON(projects) {
    const projectsJSON = projects.map((project) => {
        return createProjectJSON(project); // single project
    });
    return projectsJSON;
}

function createProjectJSON(project) {
    const projectJSON = {
        title: project.title,
        todos: createTodosJSON(project.todos),
    }
    return projectJSON;
}

function createTodosJSON(todos) {
    const todosJSON = todos.map((todo) => {
        return createTodoJSON(todo);
    });
    return todosJSON;
}

function createTodoJSON(todo) {
    const todoJSON = {
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        priority: todo.priority,
        isComplete: todo.isComplete,
    }
    return todoJSON;
}

export default saveProjectManager;