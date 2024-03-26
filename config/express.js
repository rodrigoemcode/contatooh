var express = require('express');
var app = express();
var home = require('../app/routes/home');

module.exports = function() {
  // variável de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));

  // abaixo do middleware express.static
  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  // abaixo da configuração do último middleware
  home(app); // Passando o app para o módulo home

  return app;
};
