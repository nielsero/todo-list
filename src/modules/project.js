class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(index) {
        if(index < 0 || i >= this.todos.length) {
            console.log("Can't delete todo. Invalid index");
            return;
        }
        this.todos.splice(index, index + 1);
    }
}

export default Project;