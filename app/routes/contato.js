// app/routes/contato.js

module.exports = function(app) {
  var controllers = app.controllers.contato;
  app.get('/contatos', controllers.listaContatos);
};