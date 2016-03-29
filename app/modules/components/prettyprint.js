/**
 * @ngdoc directive
 * @name app.directive:prettyprint
 * @description
 * # prettyprint
 */
/* jshint ignore:start */
angular.module('app').directive('prettyprint', [
  function () {
    'use strict';
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        element.html(prettyPrintOne(element.html(), '', true));
      }
    };
  }
]);
/* jshint ignore:end */