/**
 * @ngdoc directive
 * @name app.directive:gaugeChart
 * @description
 * # gaugeChart
 */
angular.module('app').directive('gaugeChart', [
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
            gauge = new Gauge($el[0]).setOptions(options);

        gauge.maxValue = data.maxValue;
        gauge.animationSpeed = data.animationSpeed;
        gauge.set(data.val);
      }
    };
  }
]);
