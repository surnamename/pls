/**
 * @ngdoc directive
 * @name app.directive:tileControlClose
 * @description
 * # tileControlClose
 */
angular.module('app').directive('tileControlClose', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');

        element.on('click', function () {
          tile.addClass('closed').fadeOut();
        });
      }
    };
  }
]);