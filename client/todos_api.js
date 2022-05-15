class TodosApi {
  
    getTodos() {
        return axios.get('/todos').then(data => {
            return data.data;
        });
    }

    addTodo(text) {
        return axios.post('/todo', { text }).then(data => {
            return data.data;
        });
    }

    updateTodo(todoId) {
        return axios.put(`/todo/${todoId}`).then(data => {
            return data.data;
        });
    }

    deleteTodo(todoId) {
        return axios.delete(`/todo/${todoId}`).then(data => {
            return data.data;
        });
    }

}