/**
 * @ngdoc function
 * @name app.controller:app.financialBoard.controller.main
 * @description
 * # app.financialBoard.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.financialBoard.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    $scope.breadcrumbs = [{text: 'Financial Board'}];
  }
]);