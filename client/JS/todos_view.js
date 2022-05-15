class TodosView {
    constructor() {
        this.todosContainer = $('#todos-container');
        const todosTemplateHTML = $('#todos-template').html();
        this.todosTemplate = Handlebars.compile(todosTemplateHTML);
    }

    renderTodos(todos) {
        this.todosContainer.empty();
        const compiledHTML = this.todosTemplate({ todos });
        this.todosContainer.html(compiledHTML);
    }
}