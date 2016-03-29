/**
 * @ngdoc function
 * @name app.controller:app.operationalBoard.controller.openShipments
 * @description
 * # app.operationalBoard.controller.openShipments
 * Controller of the app
 */
angular.module('app').controller('app.operationalBoard.controller.openShipments', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Open Shipments';
  }
]);