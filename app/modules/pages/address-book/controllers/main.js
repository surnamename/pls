/**
 * @ngdoc function
 * @name app.controller:app.addressBook.ctrl
 * @description
 * # app.addressBook.ctrl
 * Controller of the app
 */
angular.module('app').controller('app.addressBook.controller.main', ['$scope',
  function ($scope) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Address Book';
  }
]);