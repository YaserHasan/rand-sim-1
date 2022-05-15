const express = require('express');
const router = express.Router();

const todos = [];
let id = 1;

router.get('/todos', function (req, res) {
  res.send(todos);
});

router.post('/todo', function (req, res) {
  const text = req.body.text;
  const newTodo = { id: id++, text: text, completed: false };

  todos.push(newTodo);
  res.send(todos);
});

router.put('/todo/:todoID', function (req, res) {
  const todoID = req.params.todoID;
  let todoIdParsed = parseInt(todoID);
  let todoList = todos.find((t) => t.id === todoIdParsed);

  todoList.completed = !todoList.completed;

  res.send(todos);
});

router.delete('/todo/:todoID', function (req, res) {
  const todoID = req.params.todoID;
  let todoIdParsed = parseInt(todoID);
  let todoList = todos.find((t) => t.id === todoIdParsed);

  let index = todos.indexOf(todoList);
  todos.splice(index, 1);
  res.send(todos);
});

module.exports = router;
