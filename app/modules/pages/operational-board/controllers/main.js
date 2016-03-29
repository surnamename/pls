/**
 * @ngdoc function
 * @name app.controller:app.operationalBoard.controller.main
 * @description
 * # app.operationalBoard.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.operationalBoard.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    $scope.breadcrumbs = [{link: null, text: 'Operational Board'}];
  }
]);