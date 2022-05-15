const todosContainer = $('#todos-container');
const addTodoForm = $('#todo-form');
const addTodoInput = $('#todo-input');

const todosApi = new TodosApi();
const todosModel = new TodosModel(todosApi);
const todosView = new TodosView();


function initialRender() {
    todosModel.getTodos().then(todos => {
        todosView.renderTodos(todos);
        addTodoEventListeners();
    });
}
initialRender();

function submit(e) {
    e.preventDefault();

    const text = addTodoInput.val();
    if (!text) return;
    todosModel.addTodo(text).then(todos => {
        addTodoInput.val('');
        todosView.renderTodos(todos);
        addTodoEventListeners();
    });
}

function addTodoEventListeners() {
    const todoElements = todosContainer.find('.todo');
    todoElements.find('.delete-btn').on('click', function() {
        const todoId = $(this).closest('.todo').data().id;
        todosModel.deleteTodo(todoId).then(todos => {
            todosView.renderTodos(todos);
            addTodoEventListeners();
        })
    });

    todoElements.find('.completed-btn').on('click', function() {
        const todoId = $(this).closest('.todo').data().id;
        todosModel.updateTodo(todoId).then(todos => {
            todosView.renderTodos(todos);
            addTodoEventListeners();
        })
    });
}

addTodoForm.on('submit', submit);