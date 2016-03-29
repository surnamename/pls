/**
 * @ngdoc function
 * @name app.controller:app.shipmentEntry.controller.main
 * @description
 * # app.shipmentEntry.controller.main
 * Controller of the plsApp
 */
angular.module('app').controller('app.shipmentEntry.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Shipment Entry';
  }
]);