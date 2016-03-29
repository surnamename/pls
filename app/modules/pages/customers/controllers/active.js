/**
 * @ngdoc function
 * @name app.controller:app.customer.controller.active
 * @description
 * # app.customer.controller.active
 * Controller of the plsApp
 */
angular.module('app').controller('app.customer.controller.active', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Active Customers';
  }
]);