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

const todos = ['make food', 'eat food'];
const completed = [];

app.get('/', function(req, res) {

  var idx = 0;

  var context = {
    todos : todos,
    completed: completed,
    id: function(){
      return idx++;
    }
  };
  res.render('index', context);
});

app.post('/', function(req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});

app.post('/:id', function(req, res) {
  let id = parseInt(req.params.id);
  completed.push(todos.splice(id, 1));
  res.redirect('/');
});

app.listen(3000);
