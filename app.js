const express = require('express');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

const todos = [];

app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})


app.listen(3000);
