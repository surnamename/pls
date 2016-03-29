/**
 * @ngdoc directive
 * @name app.directive:Resize
 * @description
 * # appResize
 */
angular.module('app').directive('appResize', ['$timeout',
    function ($timeout) {
        'use strict';
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var $window = angular.element(window);

                element.on('click', function () {
                    $timeout(function () {
                        $window.trigger('resize');
                    }, attr.appResize = attr.appResize ? attr.appResize : 500);
                });
            }
        };
    }
]);