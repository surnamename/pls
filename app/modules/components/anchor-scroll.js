/**
 * @ngdoc directive
 * @name app.directive:anchorScroll
 * @description
 * # anchorScroll
 */
angular.module('app').directive('anchorScroll', ['$location', '$anchorScroll',
  function ($location, $anchorScroll) {
    'use strict';
    return {
      restrict: 'AC',
      link: function (scope, el, attr) {
        el.on('click', function (e) {
          $location.hash(attr.anchorScroll);
          $anchorScroll();
        });
      }
    };
  }
]);