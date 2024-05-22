//  contatooh/app/controllers/contato.js
// app/controllers/contato.js

let contatos = [
  { _id: 1, nome: 'Contato Exemplo 1' },
  { _id: 2, nome: 'Contato Exemplo 2' }
];

const controller = {};

controller.listaTodos = function(req, res) {
  res.json(contatos);
};

controller.salvaContato = function(req, res) {
  const novoContato = req.body;
  novoContato._id = contatos.length + 1;
  contatos.push(novoContato);
  res.status(201).json(novoContato);
};

controller.obtenContato = function(req, res) {
  const idContato = parseInt(req.params.id);
  const contato = contatos.find(contato => contato._id === idContato);
  if (contato) {
    res.json(contato);
  } else {
    res.status(404).send('Contato não encontrado');
  }
};

controller.removeContato = function(req, res) {
  const idContato = parseInt(req.params.id);
  contatos = contatos.filter(contato => contato._id !== idContato);
  res.status(204).end();
};

module.exports = controller;

