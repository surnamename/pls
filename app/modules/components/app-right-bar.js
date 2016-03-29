/**
 * @ngdoc directive
 * @name app.directive:rightBar
 * @description
 * # rightBar
 */
angular.module('app').directive('appRightBar', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      templateUrl: 'app/views/templates/components/right-bar.html',
      controller: ['$scope', '$timeout',
        function ($scope, $timeout) {
          var rightBar = this;

          rightBar.switch = function () {
            $timeout(function () {
              angular.element(window).trigger("resize");
            }, 300);
          }
        }
      ],
      controllerAs: 'rightBar'
    }
  }
]);