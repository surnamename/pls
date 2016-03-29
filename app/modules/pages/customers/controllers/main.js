/**
 * @ngdoc function
 * @name app.controller:app.customer.controller.main
 * @description
 * # app.customer.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.customer.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    $scope.breadcrumbs = [{text: 'Customers'}];
  }
]);