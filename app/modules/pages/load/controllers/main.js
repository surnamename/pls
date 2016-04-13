/**
 * @ngdoc function
 * @name app.controller:app.load.controller.main
 * @description
 * # app.load.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.load.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Load';
  }
]);

angular.module('app').directive('appLoadAddress', function () {
  return {
    restrict: 'A',
    scope: {
      address: '@appLoadAddress'
    },
    templateUrl: 'app/views/templates/components/address.html'
  };
});