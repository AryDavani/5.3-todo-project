const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const todos = [];
const completedTodos = [];

app.get("/", function(req, res) {
  res.render('index', { "todos": todos });
});

app.post("/", function(req, res) {
  todos.push(req.body);
  console.log(todos);
  res.redirect('/');
});

app.post("/", function(req, res) {

  res.redirect('/');

})

app.listen(3000);
