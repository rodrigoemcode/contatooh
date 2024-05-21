// public/js/main.js
var app = angular.module('contatooh', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        })
        .otherwise({
            redirectTo: '/contatos'
        });
});
