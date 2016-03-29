/**
 * @ngdoc function
 * @name app.controller:app.quotes.controller.new
 * @description
 * # app.quotes.controller.new
 * Controller of the plsApp
 */
angular.module('app').controller('app.quotes.controller.new', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'New Quotes';
  }
]);