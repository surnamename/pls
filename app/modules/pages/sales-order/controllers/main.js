/**
 * @ngdoc function
 * @name app.controller:app.salesOrder.controller.main
 * @description
 * # app.salesOrder.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.salesOrder.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Sales Order';
  }
]);