(function () {
  'use strict';
  var production = location.hostname === 'via-site.github.io',
    headEl = document.getElementsByTagName('head')[0],
    head = false, body = true;

  if (production) addTag('base', {href: "pls"});
  else addTag('base', {href: "/"}, head);

  if (navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1 || navigator.userAgent.indexOf("MSIE 6") > -1) {
    console.log(navigator.userAgent);
  } else {
    /* CSS Vendors */
    addTag('link', {rel: 'stylesheet', href: 'vendors/twitter-bootstrap/3.3.5/bootstrap.min.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'vendors/font-awesome/4.4.0/css/font-awesome.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'vendors/angular-ui-grid/3.0.7/ui-grid.min.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'vendors/bs-daterangepicker/1.13.7/daterangepicker.css', type: 'text/css'}, head);

    /* CSS Template */
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/main.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/add-nav.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/boxed.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/btn.css', type: 'text/css'},head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/checkbox-custom.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/content.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/dropdown.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/form.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/loader.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/nav.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/onoffswitch.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/page.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/panel.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/slider.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/tile.css', type: 'text/css'}, head);
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/ui-select.css', type: 'text/css'}, head);

    /* CSS PLS styles */
    addTag('link', {rel: 'stylesheet', href: 'app/views/assets/styles/!pls.css', type: 'text/css'}, head);

    /* JS Vendors */
    addTag('script', {src: 'vendors/jquery/2.1.4/jquery.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular/1.3.20/angular.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-touch/1.3.20/angular-touch.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-animate/1.3.20/angular-animate.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-resource/1.3.20/angular-resource.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-ui-router/0.2.15/angular-ui-router.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/angular-ui-grid/3.0.7/ui-grid.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/lodash/3.10.1/lodash.min.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/moment/2.8.4/moment.min.js'}, body);
    addTag('script', {src: 'vendors/ng-momentjs/angular-momentjs.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/ng-fullscreen/src/angular-fullscreen.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/oclazyload/dist/ocLazyLoad.min.js', type: 'text/javascript'}, body);

    /* JQuery dependent Vendors */
    addTag('script', {src: 'vendors/bs-daterangepicker/1.13.7/daterangepicker.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'vendors/ng-bs-daterangepicker/src/ng-bs-daterangepicker.js', type: 'text/javascript'}, body);

    /* App Module */
    addTag('script', {src: 'app/modules/common/app.js', type: 'text/javascript'}, body);

    /* App Components */
    addTag('script', {src: 'app/modules/components/app-full-screen-grid.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/app-resize.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/app-header.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/app-right-bar.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/navcollapse.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/sparkline.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/collapse-sidebar.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/grid-panel.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/ripple.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/pageloader.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/daterangepicker.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/tilecontrolclose.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/prettyprint.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/activatebutton.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/setnganimate.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/onblurvalidation.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/check-toggler.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/active-toggle.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/vector-map.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/anchor-scroll.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/components/ng-slim-scroll.js', type: 'text/javascript'}, body);

    /* App.Dashboard Module */
    addTag('script', {src: 'app/modules/pages/dashboard/controllers/main.js', type: 'text/javascript'}, body);

    /* App.Load Module */
    addTag('script', {src: 'app/modules/pages/load/controllers/main.js', type: 'text/javascript'}, body);

    /* App.ShipmentEntry Module */
    addTag('script', {src: 'app/modules/pages/shipment-entry/controllers/main.js', type: 'text/javascript'}, body);

    /* App.ManualBOL Module */
    addTag('script', {src: 'app/modules/pages/manual-bol/controllers/main.js', type: 'text/javascript'}, body);

    /* App.Quotes Module */
    addTag('script', {src: 'app/modules/pages/quotes/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/quotes/controllers/new.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/quotes/controllers/saved.js', type: 'text/javascript'}, body);

    /* App.SalesOrder Module */
    addTag('script', {src: 'app/modules/pages/sales-order/controllers/main.js', type: 'text/javascript'}, body);

    /* App.VendorBills Module */
    addTag('script', {src: 'app/modules/pages/vendor-bills/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/vendor-bills/controllers/unmatched.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/vendor-bills/controllers/archived.js', type: 'text/javascript'}, body);

    /* App.OperationalBoard Module */
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/alerts.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/booked.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/active-shipments.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/waiting-for-vendor-bill.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/open-shipments.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/all-shipments.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/operational-board/controllers/manual-bol.js', type: 'text/javascript'}, body);

    /* App.FinancialBoard Module */
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/transactional-invoices.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/consolidated-invoices.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/invoice-audit.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/price-audit.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/invoice-errors.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/financial-board/controllers/invoice-history.js', type: 'text/javascript'}, body);

    /* App.Pricing Module */
    addTag('script', {src: 'app/modules/pages/pricing/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/tariffs.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/fuel.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/customer.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/scac-codes.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/acc-type.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/analysis.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/pricing/controllers/manual-bol.js', type: 'text/javascript'}, body);

    /* App.Customers Module */
    addTag('script', {src: 'app/modules/pages/customers/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/customers/controllers/active.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/customers/controllers/hold.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/customers/controllers/inactive.js', type: 'text/javascript'}, body);

    /* App.Products Module */
    addTag('script', {src: 'app/modules/pages/products/controllers/main.js', type: 'text/javascript'}, body);

    /* App.AddressBook Module */
    addTag('script', {src: 'app/modules/pages/address-book/controllers/main.js', type: 'text/javascript'}, body);

    /* App.Reports Module */
    addTag('script', {src: 'app/modules/pages/reports/controllers/main.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/reports/controllers/unbilled.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/reports/controllers/activity.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/reports/controllers/savings.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/pages/reports/controllers/lost-savings.js', type: 'text/javascript'}, body);

    /* App.UserManagement Module */
    addTag('script', {src: 'app/modules/pages/user-management/controllers/main.js', type: 'text/javascript'}, body);

    /* Maps Module */
    addTag('script', {src: 'app/modules/pages/maps/controllers/maps-vector-map.js', type: 'text/javascript'}, body);

    /*
    addTag('script', {src: 'app/modules/app/module.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/app/configs/routing.js', type: 'text/javascript'}, body);
    addTag('script', {src: 'app/modules/app/controllers/main.js', type: 'text/javascript'}, body);
    /*
    addTag('link', {rel: 'stylesheet', href: 'build/all.min.css', type: 'text/css'}, body);
    addTag('script', {src: 'build/all.min.js', type: 'text/javascript'}, body);
    */
  }

  function addTag(name, attributes, parent) {
    var el = document.createElement(name);

    for (var attrName in attributes) {
      el.setAttribute(attrName, attributes[attrName]);
    }

    parent ? document.write(outerHTML(el)) : headEl.appendChild(el);
  }

  function outerHTML(node) {
    return node.outerHTML || (function (n) {
        var div = document.createElement('div'), h;
        div.appendChild(n);
        h = div.innerHTML;
        div = null;
        return h;
      })(node);
  }
})();
