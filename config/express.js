//config/express.js

var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function() {
  // variável de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // abaixo do middleware express.static
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  // abaixo da configuração do último middleware
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
