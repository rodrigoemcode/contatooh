// public/js/controllers/ContatosController.js

angular.module("contatooh").controller("ContatosController", function ($scope, $http) {
  $scope.contatos = [];
  $scope.filtro = '';

  // Fetch contacts from server
  $http.get('/contatos')
    .then(function(response) {
      $scope.contatos = response.data;
    })
    .catch(function(error) {
      console.log("Não foi possível obter a lista de contatos");
      console.log(error);
    });
});
