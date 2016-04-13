/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular.module('app', [
  'ngResource',
  'ngAnimate',
  'ngTouch',

  'ui.bootstrap',
  'ui.router',

  'ui.grid',
  'ui.grid.selection',
  'ui.grid.resizeColumns',
  'ui.grid.moveColumns',

  'angular-momentjs',
  'FBAngular',
  'oc.lazyLoad',

  'ngSlimScroll',

  'app.dashboard'
]);

angular.module('app').run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    'use strict';
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      $rootScope.page = {
        title: null
      };

      event.targetScope.$watch('$viewContentLoaded', function () {
        //angular.element('html, body, #content').animate({scrollTop: 0}, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility', 'visible');
          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
    });

    $rootScope.settings = {
      isFSBody: false
    };

    $rootScope.main = {
      settings: {
        boxedLayout: false,
        sidebarNO: false,
        headerFixed: true,
        rightbarShow: false
      }
    };
  }
]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'app/views/templates/components/app.html'
        })

        /* Load */
      .state('app.load', {
        url: '/load',
        templateUrl: 'app/views/templates/pages/load.html',
        controller: 'app.load.controller.main as vm'
      })
      .state('app.load.shipmentEntry', {
        url: '/shipment-entry'
      })
      .state('app.load.manualBOL', {
        url: '/manual-bol'
      })
      .state('app.load.quotes', {
        url: '/quotes'
      })
      .state('app.load.salesOrder', {
        url: '/sales-order'
      })

      /* shipment-entry */
        .state('app.shipmentEntry', {
          url: '/shipment-entry',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.shipmentEntry.controller.main as vm'
        })

      /* manual-bol */
        .state('app.manualBOL', {
          url: '/manual-bol',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.manualBol.controller.main as vm'
        })

      /* quotes */
        .state('app.quotes', {
          abstract: true,
          url: '/quotes',
          template: '<div ui-view></div>',
          controller: 'app.quotes.controller.main'
        })
        /* quotes/new */
        .state('app.quotes.new', {
          url: '/new',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.quotes.controller.new as vm'
        })
        /* quotes/saved */
        .state('app.quotes.saved', {
          url: '/saved',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.quotes.controller.saved as vm'
        })

      /* sales-order */
        .state('app.salesOrder', {
          url: '/sales-order',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.salesOrder.controller.main as vm'
        })

      /* vendor-bills */
        .state('app.vendorBills', {
          abstract: true,
          url: '/vendor-bills',
          template: '<div ui-view></div>',
          controller: 'app.vendorBill.controller.main'
        })
      /* vendor-bills/unmatched */
        .state('app.vendorBills.unmatched', {
          url: '/unmatched',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.vendorBill.controller.unmatched as vm'
        })
      /* vendor-bills/archived */
        .state('app.vendorBills.archived', {
          url: '/archived',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.vendorBill.controller.saved as vm'
        })

      /* operational-board */
        .state('app.operationalBoard', {
          abstract: true,
          url: '/operational-board',
          template: '<div ui-view></div>',
          controller: 'app.operationalBoard.controller.main'
        })
      /* operational-board/alerts */
        .state('app.operationalBoard.alerts', {
          url: '/alerts',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.alerts as vm'
        })
      /* operational-board/booked */
        .state('app.operationalBoard.booked', {
          url: '/booked',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.booked as vm'
        })
      /* operational-board/active-shipments */
        .state('app.operationalBoard.activeShipments', {
          url: '/active-shipments',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.activeShipments as vm'
        })
      /* operational-board/waiting-for-vendor-bill */
        .state('app.operationalBoard.waitingForVendorBill', {
          url: '/waiting-for-vendor-bill',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.waitingForVendorBill as vm'
        })
      /* operational-board/open-shipments */
        .state('app.operationalBoard.openShipments', {
          url: '/open-shipments',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.openShipments as vm'
        })
      /* operational-board/all-shipments */
        .state('app.operationalBoard.allShipments', {
          url: '/all-shipments',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.allShipments as vm'
        })
      /* operational-board/manual-bol */
        .state('app.operationalBoard.manualBOL', {
          url: '/manual-bol',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.operationalBoard.controller.manualBOL as vm'
        })

      /* financial-board */
        .state('app.financialBoard', {
          abstract: true,
          url: '/financial-board',
          template: '<div ui-view></div>',
          controller: 'app.financialBoard.controller.main'
        })
      /* financial-board/transactional-invoices */
        .state('app.financialBoard.transactionalInvoices', {
          url: '/transactional-invoices',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.transactionalInvoices as vm'
        })
      /* financial-board/consolidated-invoices */
        .state('app.financialBoard.consolidatedInvoices', {
          url: '/consolidated-invoices',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.consolidatedInvoices as vm'
        })
      /* financial-board/invoice-audit */
        .state('app.financialBoard.invoiceAudit', {
          url: '/invoice-audit',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.invoiceAudit as vm'
        })
      /* financial-board/price-audit */
        .state('app.financialBoard.priceAudit', {
          url: '/price-audit',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.priceAudit as vm'
        })
      /* financial-board/invoice-errors */
        .state('app.financialBoard.invoiceErrors', {
          url: '/invoice-errors',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.invoiceErrors as vm'
        })
      /* financial-board/invoice-history */
        .state('app.financialBoard.invoiceHistory', {
          url: '/invoice-history',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.financialBoard.controller.invoiceHistory as vm'
        })

      /* pricing */
        .state('app.pricing', {
          abstract: true,
          url: '/pricing',
          template: '<div ui-view></div>',
          controller: 'app.pricing.controller.main as vm'
        })
      /* pricing/tariffs */
        .state('app.pricing.tariffs', {
          url: '/tariffs',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.tariffs as vm'
        })
      /* pricing/fuel */
        .state('app.pricing.fuel', {
          url: '/fuel',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.fuel as vm'
        })
      /* pricing/customer */
        .state('app.pricing.customer', {
          url: '/customer',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.customer as vm'
        })
      /* pricing/scac-codes */
        .state('app.pricing.scacCodes', {
          url: '/scac-codes',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.scacCodes as vm'
        })
      /* pricing/acc-type */
        .state('app.pricing.accType', {
          url: '/acc-type',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.accType as vm'
        })
      /* pricing/analysis */
        .state('app.pricing.analysis', {
          url: '/analysis',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.analysis as vm'
        })
      /* pricing/manual-bol */
        .state('app.pricing.manualBol', {
          url: '/manual-bol',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.pricing.controller.manualBol as vm'
        })

      /* customers */
        .state('app.customers', {
          abstract: true,
          url: '/customers',
          template: '<div ui-view></div>',
          controller: 'app.customer.controller.main'
        })
      /* customers/active */
        .state('app.customers.active', {
          url: '/active',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.customer.controller.active as vm'
        })
      /* customers/inactive */
        .state('app.customers.inactive', {
          url: '/inactive',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.customer.controller.inactive as vm'
        })
      /* customers/hold */
        .state('app.customers.hold', {
          url: '/hold',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.customer.controller.hold as vm'
        })

      /* products */
        .state('app.products', {
          url: '/products',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.products.controller.main as vm'
        })

      /* address-book */
        .state('app.addressBook', {
          url: '/address-book',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.addressBook.controller.main as vm'
        })

      /* reports */
        .state('app.reports', {
          abstract: true,
          url: '/reports',
          template: '<div ui-view></div>',
          controller: 'app.reports.controller.main'
        })
      /* reports/ */
        .state('app.reports.unbilled', {
          url: '/unbilled',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.reports.controller.unbilled as vm'
        })
      /* reports/ */
        .state('app.reports.activity', {
          url: '/activity',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.reports.controller.activity as vm'
        })
      /* reports/ */
        .state('app.reports.savings', {
          url: '/savings',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.reports.controller.savings as vm'
        })
      /* reports/ */
        .state('app.reports.lostSavings', {
          url: '/lost-savings',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.reports.controller.lostSavings as vm'
        })

      /* user-management */
        .state('app.userManagement', {
          url: '/user-management',
          templateUrl: 'app/views/templates/pages/empty.html',
          controller: 'app.userManagement.controller.main as vm'
        })

      /* maps */
        .state('app.maps', {
          url: '/maps',
          template: '<div ui-view></div>'
        })
      /* maps/vector */
        .state('app.maps.vector', {
          url: '/vector',
          controller: 'VectorMapCtrl',
          templateUrl: 'app/views/templates/pages/maps/vector.html',
          resolve: {
            plugins: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                'vendors/jqvmap/1.0.0/jquery.vmap.min.js',
                'vendors/jqvmap/1.0.0/maps/jquery.vmap.world.js',
                'vendors/jqvmap/1.0.0/maps/jquery.vmap.usa.js',
                'vendors/jqvmap/1.0.0/maps/jquery.vmap.europe.js',
                'vendors/jqvmap/1.0.0/maps/jquery.vmap.germany.js'
              ]);
            }]
          }
        });
  }
]);