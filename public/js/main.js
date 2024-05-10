// public/js/main.js

const { Template } = require("ejs");

angular.module('contatooh', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/contatos/:contatoId', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });
    });