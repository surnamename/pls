/**
 * @ngdoc directive
 * @name app.directive:rightBar
 * @description
 * # rightBar
 */
angular.module('app').directive('gridPanel', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      scope: {
        vm: '=scope',
        gridId: '@gridPanel'
      },
      templateUrl: 'app/views/templates/components/grid-panel.html'
    }
  }
]);