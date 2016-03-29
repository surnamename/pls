/**
 * @ngdoc function
 * @name app.controller:dateRange
 * @description
 * # dateRange
 * Controller of the app
 */
angular.module('app').controller('dateRange', ['$moment',
  function ($moment) {
    'use strict';
    var dateRange = this;

    dateRange.start = $moment().subtract(6, 'days').format('MMMM D, YYYY');
    dateRange.end = $moment().format('MMMM D, YYYY');
    dateRange.options = {
      ranges: {
        Today: [$moment(), $moment()],
        Yesterday: [$moment().subtract(1, 'days'), $moment().subtract(1, 'days')],
        'Last 7 Days': [$moment().subtract(6, 'days'), $moment()],
        'Last 30 Days': [$moment().subtract(29, 'days'), $moment()],
        'Last Month': [$moment().subtract(1, 'month').startOf('month'), $moment().subtract(1, 'month').endOf('month')],
        'This Month (until now)': [$moment().startOf('month'), $moment()],
        'This Month (whole)': [$moment().startOf('month'), $moment().endOf('month')]
      },
      opens: 'left',
      startDate: $moment().subtract(6, 'days'),
      endDate: $moment(),
      parentEl: '#content'
    };
  }
]);

/**
 * @ngdoc directive
 * @name app.directive:dateRangePicker
 * @description
 * # dateRangePicker
 */
angular.module('app').directive('dateRangePicker', [
  function () {
    'use strict';
    return {
      restrict: 'A',
      scope: {
        dateRange: '=dateRangePicker'
      },
      link: function (scope, element) {
        if (angular.isDefined(scope.dateRange)) {
          element.daterangepicker(scope.dateRange.options, function (start, end) {
            scope.dateRange.start = start.format('MMMM D, YYYY');
            scope.dateRange.end = end.format('MMMM D, YYYY');
            scope.$apply();
          });
        }
      }
    };
  }
]);