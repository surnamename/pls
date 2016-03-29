/**
 * @ngdoc function
 * @name app.controller:app.quotes.controller.saved
 * @description
 * # app.quotes.controller.saved
 * Controller of the plsApp
 */
angular.module('app').controller('app.quotes.controller.saved', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Saved Quotes';
  }
]);