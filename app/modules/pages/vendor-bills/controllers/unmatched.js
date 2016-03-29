/**
 * @ngdoc function
 * @name app.controller:app.vendorBill.controller.unmatched
 * @description
 * # app.vendorBill.controller.unmatched
 * Controller of the plsApp
 */
angular.module('app').controller('app.vendorBill.controller.unmatched', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Unmatched Vendor Bills';
  }
]);