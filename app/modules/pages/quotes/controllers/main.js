/**
 * @ngdoc function
 * @name app.controller:app.quotes.controller.main
 * @description
 * # app.quotes.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.quotes.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    $scope.breadcrumbs = [{link: null, text: 'Quotes'}];
  }
]);