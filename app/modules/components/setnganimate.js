/**
 * @ngdoc directive
 * @name app.directive:setNgAnimate
 * @description
 * # setNgAnimate
 */
angular.module('app').directive('setNgAnimate', ['$animate',
  function ($animate) {
    'use strict';
    return {
      link: function ($scope, $element, $attrs) {
        $scope.$watch(function () {
          return $scope.$eval($attrs.setNgAnimate, $scope);
        }, function (valnew) {
          console.log('Directive animation Enabled: ' + valnew);
          $animate.enabled(!!valnew, $element);
        });
      }
    };
  }
]);