/**
 * @ngdoc function
 * @name app.controller:app.products.ctrl
 * @description
 * # app.products.ctrl
 * Controller of the plsApp
 */
angular.module('app').controller('app.products.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Products';
  }
]);