/**
 * @ngdoc directive
 * @name app.directive:rightBar
 * @description
 * # rightBar
 */
angular.module('app').directive('appHeader', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      templateUrl: 'app/views/templates/components/header.html'
    }
  }
]);