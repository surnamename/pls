/**
 * @ngdoc function
 * @name app.controller:app.operationalBoard.controller.activeShipments
 * @description
 * # app.operationalBoard.controller.activeShipments
 * Controller of the plsApp
 */
angular.module('app').controller('app.operationalBoard.controller.activeShipments', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Active Shipments';
  }
]);