/**
 * @ngdoc directive
 * @name app.directive:vectorMap
 * @description
 * # vectorMap
 */
angular.module('app').directive('vectorMap', [
  function () {
    'use strict';
    return {
      restrict: 'AE',
      scope: {
        options: '='
      },
      link: function postLink(scope, element) {
        var options = scope.options;
        element.vectorMap(options);
      }
    };
  }
]);