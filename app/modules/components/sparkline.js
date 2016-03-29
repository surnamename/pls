/**
 * @ngdoc directive
 * @name app.directive:sparkline
 * @description
 * # sparkline
 */
angular.module('app').directive('sparkline', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function ($scope, $el) {
        var data = $scope.data,
            options = $scope.options,
            chartResize;

        var chartRedraw = function () {
          return $el.sparkline(data, options);
        };

        angular.element(window).resize(function () {
          clearTimeout(chartResize);
          chartResize = setTimeout(chartRedraw, 200);
        });

        return chartRedraw();
      }
    };
  }
]);