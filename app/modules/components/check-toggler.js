/**
 * @ngdoc directive
 * @name app.directive:checkToggler
 * @description
 * # checkToggler
 */
angular.module('app').directive('checkToggler', [
  function () {
    'use strict';
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        element.on('click', function () {

          if (element.hasClass('checked')) {
            element.removeClass('checked');
          } else {
            element.addClass('checked');
          }
        });
      }
    };
  }
]);