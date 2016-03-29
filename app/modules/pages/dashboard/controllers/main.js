angular.module('app.dashboard', []);

angular.module('app.dashboard').config(['$stateProvider',
  function ($stateProvider) {
    'use strict';

    $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/views/templates/pages/dashboard.html',
      controller: 'app.dashboard.controller.main as vm'
    });
  }
]);

/**
 * @ngdoc function
 * @name app.controller:app.dashboard.controller.main
 * @description
 * # app.dashboard.controller.main
 * Controller of the application
 */
angular.module('app.dashboard').controller('app.dashboard.controller.main', ['$scope', '$http',
  function ($scope, $http) {
    'use strict';
    var vm = this;

    $scope.page.title = 'Dashboard';
    var $window = angular.element(window);

    vm.isFS = {};

    vm.accordion = {
      alerts: {
        status: false,
        type: 'grid'
      },
      booked: {
        status: false,
        type: 'grid'
      },
      undelivered: {
        status: false,
        type: 'grid'
      },
      unbilled: {
        status: false,
        type: 'grid'
      },
      open: {
        status: false,
        type: 'grid'
      },
      all: {
        status: false,
        type: 'grid'
      },
      allManualBol: {
        status: false,
        type: 'grid'
      }
    };

    vm.compact = true;
    vm.pagination = false;

    var cellTemplate = {
      address: '<div class="ui-grid-cell-contents"><span data-ng-bind="row.entity[col.field].city"></span>, ' +
      '<span data-ng-bind="row.entity[col.field].state"></span>, <span data-ng-bind="row.entity[col.field].zip"></span></div>',
      actions: '<div class="ui-grid-cell-contents">' +
      '<i uib-popover="Copy record" popover-placement="left" popover-trigger="mouseenter" class="fa fa-copy" ' +
      'ng-click="grid.appScope.vm.copyRow(row)"></i> ' +
      '<i uib-popover="Edit record" popover-placement="left" popover-trigger="mouseenter" class="fa fa-edit" ' +
      'ng-click="grid.appScope.vm.editRow(row)"></i> ' +
      '<i uib-popover="Remove row" popover-placement="left" popover-trigger="mouseenter" class="fa fa-times-circle" ' +
      'ng-click="grid.appScope.vm.removeRow(row)"></i></div>'
    };

    vm.alerts = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'index', displayName: '#', width: 50},
        {name: 'bol', displayName: 'BOL', minWidth: 100},
        {name: 'customerName', displayName: 'Customer', minWidth: 100},
        {name: 'carrierName', displayName: 'Carrier', minWidth: 100},
        {name: 'pickupDate', cellFilter: 'date', minWidth: 100},
        {name: 'estimatedDelivery', displayName: 'Estimated Delivery Date', minWidth: 120},
        {name: 'shipper', minWidth: 100},
        {
          name: 'originAddress',
          displayName: 'Origin',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'consignee', minWidth: 100},
        {
          name: 'destinationAddress',
          displayName: 'Destination',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'alertTypes', displayName: 'Alert', width: 50},
        {name: 'createdBy', minWidth: 100},
        {name: 'createdDateTime', cellFilter: 'date', minWidth: 100},
        {name: 'pickupWindowEnd', cellFilter: 'date', displayName: 'Late Pickup Date/Time', minWidth: 100},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.alerts.gridApi = gridApi;
      }
    };

    vm.booked = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bol', displayName: 'BOL', minWidth: 100},
        {name: 'customerName', displayName: 'Customer', minWidth: 100},
        {
          name: 'carrierName',
          displayName: 'Carrier',
          minWidth: 100,
          cellTemplate: '<div class="ui-grid-cell-contents"><a href data-ng-bind="row.entity[col.field]"></a></div>'
        },
        {name: 'pickupDate', cellFilter: 'date', minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {name: 'origin', minWidth: 100},
        {name: 'consignee', minWidth: 100},
        {name: 'destination', minWidth: 100},
        {name: 'createdBy', minWidth: 100},
        {name: 'createdDate', cellFilter: 'date', minWidth: 100},
        {name: 'pickupWindowEnd', cellFilter: 'date', displayName: 'Late Pickup Date/Time', minWidth: 100},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.booked.gridApi = gridApi;
      }
    };

    vm.undelivered = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bol', displayName: 'BOL', minWidth: 100},
        {name: 'pro', displayName: 'PRO#', minWidth: 100},
        {name: 'customerName', displayName: 'Customer', minWidth: 100},
        {name: 'carrierName', displayName: 'Carrier', minWidth: 100},
        {name: 'status', minWidth: 100},
        {name: 'estimatedDelivery', minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {name: 'origin', minWidth: 100},
        {name: 'consignee', minWidth: 100},
        {name: 'destination', minWidth: 100},
        {name: 'createdBy', minWidth: 100},
        {name: 'createdDate', cellFilter: 'date', minWidth: 100},
        {name: 'pickupWindowEnd', cellFilter: 'date', displayName: 'Late Pickup Date/Time', minWidth: 100},
        {name: 'glNumber', displayName: 'GL#', minWidth: 100},
        {name: 'srNumber', displayName: "Shipper Reference#", minWidth: 100},
        {name: 'poNumber', displayName: "PO#", minWidth: 100},
        {name: 'puNumber', displayName: "PU#", minWidth: 100},
        {name: 'revenue', minWidth: 75},
        {name: 'cost', minWidth: 65},
        {name: 'margin', minWidth: 65},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.undelivered.gridApi = gridApi;
      }
    };

    vm.unbilled = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bolNumber', displayName: 'BOL', minWidth: 100},
        {name: 'proNumber', displayName: 'PRO#', minWidth: 100},
        {name: 'customerName', displayName: 'Customer', minWidth: 100},
        {name: 'carrier', minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {
          name: 'origin',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'consignee', minWidth: 100},
        {
          name: 'destination',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'deliveryDate', cellFilter: 'date', minWidth: 100},
        {
          name: 'billToRecieved',
          displayName: 'Reason',
          minWidth: 100,
          cellTemplate: '<div class="ui-grid-cell-contents"><span data-ng-if="row.entity[col.field] === 0">' +
          'Waiting for VB</span><span data-ng-if="row.entity[col.field] === 1">Date Hold</span></div>'
        },
        {name: 'createdBy', minWidth: 100},
        {name: 'createdDate', cellFilter: 'date', minWidth: 100},
        {name: 'revenue', minWidth: 75},
        {name: 'total', displayName: 'cost', minWidth: 65},
        {name: 'margin', minWidth: 65},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.unbilled.gridApi = gridApi;
      }
    };

    vm.open = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bol', displayName: 'BOL', minWidth: 100},
        {name: 'customerName', displayName: 'Customer', minWidth: 100},
        {name: 'pickupWindowStart', displayName: 'Estimated Pickup Date', minWidth: 100},
        {name: 'pickupWindowEnd', cellFilter: 'date', displayName: 'Late Pickup Date/Time', minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {name: 'origin', minWidth: 100},
        {name: 'consignee', minWidth: 100},
        {name: 'destination', minWidth: 100},
        {name: 'createdBy', minWidth: 100},
        {name: 'createdDate', minWidth: 100},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.open.gridApi = gridApi;
      }
    };

    vm.all = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bolNumber', displayName: 'BOL', minWidth: 100},
        {name: 'soNumber', displayName: 'SO#', minWidth: 100},
        {name: 'glNumber', displayName: 'GL#', minWidth: 100},
        {name: 'proNumber', displayName: 'Pro#', minWidth: 100},
        {name: 'refNumber', displayName: 'Shipper Ref#', minWidth: 100},
        {name: 'poNumber', displayName: "PO#", minWidth: 100},
        {name: 'puNumber', displayName: "PU#", minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {
          name: 'origin',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'consignee', minWidth: 100},
        {
          name: 'destination',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {
          name: 'carrier',
          minWidth: 100,
          cellTemplate: '<div class="ui-grid-cell-contents"><a href data-ng-bind="row.entity[col.field]"></a></div>'
        },
        {name: 'pickupDate', cellFilter: 'date', minWidth: 100},
        {name: 'deliveryDate', cellFilter: 'date', minWidth: 100},
        {name: 'status', displayName: "Ops. Status", minWidth: 100},
        {name: 'billingStatus', minWidth: 100},
        {name: 'revenue', minWidth: 75},
        {name: 'cost', minWidth: 65},
        {name: 'margin', minWidth: 65},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.all.gridApi = gridApi;
      }
    };

    vm.allManualBol = {
      data: null,
      enableSorting: true,
      enableFiltering: true,
      enableRowSelection: true,
      //enableFullRowSelection: true,
      showGridFooter: true,
      multiSelect: true,
      fastWatch: true,
      columnDefs: [
        {name: 'bolNumber', displayName: 'BOL', minWidth: 100},
        {name: 'soNumber', displayName: 'SO#', minWidth: 100},
        {name: 'glNumber', displayName: 'GL#', minWidth: 100},
        {name: 'proNumber', displayName: 'Pro#', minWidth: 100},
        {name: 'refNumber', displayName: 'Shipper Ref#', minWidth: 100},
        {name: 'poNumber', displayName: "PO#", minWidth: 100},
        {name: 'puNumber', displayName: "PU#", minWidth: 100},
        {name: 'shipper', minWidth: 100},
        {
          name: 'origin',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {name: 'consignee', minWidth: 100},
        {
          name: 'destination',
          minWidth: 100,
          cellTemplate: cellTemplate.address
        },
        {
          name: 'carrier',
          minWidth: 100,
          cellTemplate: '<div class="ui-grid-cell-contents"><a href data-ng-bind="row.entity[col.field]"></a></div>'
        },
        {name: 'pickupDate', cellFilter: 'date', minWidth: 100},
        {name: 'status', minWidth: 100},
        {name: 'actions', width: 100, cellTemplate: cellTemplate.actions}
      ],
      onRegisterApi: function (gridApi) {
        vm.allManualBol.gridApi = gridApi;
      }
    };

    vm.refreshModel = function (modelName, hard) {
      if (_.isEmpty(vm[modelName].data) || hard) {
        $http.get('data/restful/shipment/tracking/board/' + modelName + '.json').then(function (res) {
          vm[modelName].data = res.data;
          vm.setRowIndex(modelName);
          setTimeout(function () {
            $window.trigger('resize');
            vm[modelName].gridApi.core.refresh();
          }, 300);
        });
      } else {
        setTimeout(function () {
          $window.trigger('resize');
          vm[modelName].gridApi.core.refresh();
        }, 300);
      }
      //vm[modelName].gridApi.core.clearAllFilters()
    };

    vm.setRowIndex = function (modelName) {
      vm[modelName].data.forEach(function (value, index) {
        value.index = index + 1;
        if (value.index < 10) {
          value.index = '000' + value.index;
        } else if (value.index > 9 && value.index < 100) {
          value.index = '00' + value.index;
        } else if (value.index > 99 && value.index < 1000) {
          value.index = '0' + value.index;
        }
      });
    };

    vm.switchTo = function (type, modelName, formType) {
      switch (type) {
        case 'form':
          vm.accordion[modelName].type = 'form';
          vm.accordion[modelName].form = formType;
          if (formType === 'new') {
            vm.refreshModel(modelName);
          }
          setTimeout(function () {
            $window.trigger('resize');
          }, 300);
          break;
        case 'grid':
          vm.accordion[modelName].type = 'grid';
          $window.trigger('resize');
          break;
      }
      vm.accordion[modelName].status = true;
    };

    vm.copyRow = function (row) {
      var modelName = row.grid.element[0].id;
      vm.accordion[modelName].type = 'form';
      vm.accordion[modelName].form = 'copy';
      vm[modelName].editRow = row;
    };

    vm.editRow = function (row) {
      var modelName = row.grid.element[0].id;
      vm.accordion[modelName].type = 'form';
      vm.accordion[modelName].form = 'edit';
      vm[modelName].editRow = row;
    };

    vm.removeRow = function (row) {
      row.grid.rows.some(function (value, index) {
        if (value.entity === row.entity) {
          row.grid.rows.splice(index, 1);
          row.grid.api.core.refreshRows();
          return true;
        }
      });
    };

    $scope.$watch('vm.accordion', function (newValue) {
      if (newValue.alerts.status) {
        vm.refreshModel('alerts');
      } else if (newValue.booked.status) {
        vm.refreshModel('booked');
      } else if (newValue.undelivered.status) {
        vm.refreshModel('undelivered');
      } else if (newValue.unbilled.status) {
        vm.refreshModel('unbilled');
      } else if (newValue.open.status) {
        vm.refreshModel('open');
      } else if (newValue.all.status) {
        vm.refreshModel('all');
      } else if (newValue.allManualBol.status) {
        vm.refreshModel('allManualBol');
      }
      setTimeout(function () {
        $window.trigger('resize');
      }, 1000);
    }, true);
  }
]);