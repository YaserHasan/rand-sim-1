class TodosModel {
    constructor(todosApi) {
        this.todosApi = todosApi;
        this.todos = [];
    }

    getTodos() {
        return this.todosApi.getTodos().then(updatedTodos => {
            this.todos = updatedTodos;
            return this.todos;
        });
    }

    addTodo(text) {
        return this.todosApi.addTodo(text).then(updatedTodos => {
            this.todos = updatedTodos;
            return this.todos;
        });
    }

    updateTodo(todoId) {
        return this.todosApi.updateTodo(todoId).then(updatedTodos => {
            this.todos = updatedTodos;
            return this.todos;
        });
    }

    deleteTodo(todoId) {
        return this.todosApi.deleteTodo(todoId).then(updatedTodos => {
            this.todos = updatedTodos;
            return this.todos;
        });
    }
}