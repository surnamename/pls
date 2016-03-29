/**
 * @ngdoc directive
 * @name app.directive:Fullscreen
 * @description
 * # appFullscreen
 */
angular.module('app').directive('appFullScreenGrid', ['$timeout', 'Fullscreen',
  function ($timeout, Fullscreen) {
    'use strict';
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        var $window = angular.element(window);

        element.on('click', function () {
          $timeout(function () {
            if (Fullscreen.isEnabled()) {
              if (attr.appFullScreenGrid) {
                scope.vm.accordion[attr.appFullScreenGrid].status = true;
              }
              $timeout(function() {
                angular.element(document.getElementById(attr.appFullScreenGrid)).css('height', $window.outerHeight() - 45 + 'px');
                resize();
              }, 300);
            } else if (attr.appFullScreenGrid && document.getElementById(attr.appFullScreenGrid)) {
              angular.element(document.getElementById(attr.appFullScreenGrid))[0].style.height = '';
              resize();
            }
          }, 100);
        });

        function resize() {
          $timeout(function () {
            $window.trigger('resize');
            if (attr.appFullScreenGrid) {
              scope.vm[attr.appFullScreenGrid].gridApi.core.refreshRows();
            }
          }, 10);
        }
      }
    };
  }
]);