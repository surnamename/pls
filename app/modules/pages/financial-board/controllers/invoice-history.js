/**
 * @ngdoc function
 * @name app.controller:app.financialBoard.controller.invoiceHistory
 * @description
 * # app.financialBoard.controller.invoiceHistory
 * Controller of the plsApp
 */
angular.module('app').controller('app.financialBoard.controller.invoiceHistory', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Invoice History';
  }
]);