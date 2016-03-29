/**
 * @ngdoc function
 * @name app.controller:app.userManagement.controller.main
 * @description
 * # app.userManagement.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.userManagement.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'User Management';
  }
]);