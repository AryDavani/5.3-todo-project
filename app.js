const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const todos = [];

app.get("/", function(req, res) {
  let idx = 0;

  function counter() {
    return idx++;
  };

  var count = {
  todos: todos,
  id: counter()
  };
  console.log(count.id);
  res.render('index', count);
});

app.post("/", function(req, res) {
  todos.push({todo: req.body.todo});
  res.redirect('/');
});

app.post("/", function(req, res) {
  let getid = count.id
});

app.listen(3000);
