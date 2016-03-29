/**
 * @ngdoc function
 * @name app.controller:app.customer.inactive.ctrl
 * @description
 * # app.customer.inactive.ctrl
 * Controller of the plsApp
 */
angular.module('app').controller('app.customer.controller.inactive', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Inactive Customers';
  }
]);