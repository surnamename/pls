/**
 * This is a rewritten version of original jQuery slimsSroll (http://rocha.la/jQuery-slimScroll)
 * and
 * Rewritten version of ngSlimscroll (https://github.com/jkuri/ngSlimscroll)
 */
angular.module('ngSlimScroll', []);

/**
 * @ngdoc directive
 * @name ngSlimScroll.directive:ngSlimScroll
 * @description
 * # ngSlimScroll
 */
angular.module('ngSlimScroll').directive('ngSlimScroll', ['$document', '$window', '$compile',
  function ($document, $window, $compile) {
    'use strict';
    var setScopeValues = function (scope, element, attrs) {
      scope.width = attrs.width || 'auto';
      scope.height = attrs.height || '100%';
      scope.size = attrs.size || '7px';
      scope.color = attrs.color || '#000';
      scope.position = attrs.position || 'right';
      scope.distance = attrs.distance || '1px';
      scope.borderRadius = attrs.borderRadius || '3px';
      scope.start = attrs.start || 'top';
      scope.alwaysVisible = scope.$eval(attrs.alwaysVisible) || false;
      scope.barDraggable = scope.$eval(attrs.barDraggable) || true;
      scope.wheelStep = attrs.wheelStep || 15;
      scope.opacity = attrs.opacity || 0.5;
      scope.enabled = scope.$eval(attrs.enabled) || true;
      scope.horizontalScroll = scope.$eval(attrs.horizontalScroll) || false;
      scope.horizontalScrollPosition = attrs.horizontalScrollPosition || 'bottom';
      scope.touchScrollStep = attrs.touchScrollStep || 5000;
      scope.watchContent = scope.$eval(attrs.watchContent) || true;
    };

    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs) {
        setScopeValues(scope, element, attrs);

        var el = element[0];

        var minBarHeight = 30,
          isOverPanel,
          releaseScroll = false,
          isDrag = false,
          touchDiff,
          minBarWidth = 30;

        element.css({
          'overflow': 'hidden',
          'width': scope.width,
          'height': scope.height
        });

        var wrapper = angular.element('<div></div>');
        wrapper.css({
          'position': 'relative',
          'overflow': 'hidden',
          'width': scope.width,
          'height': scope.height
        });

        if (!scope.horizontalScroll) {
          var bar = angular.element('<div></div>');
          bar.css({
            'background': scope.color,
            'width': scope.size,
            'position': 'absolute',
            'top': '0',
            'opacity': scope.opacity,
            'display': scope.alwaysVisible ? 'block' : 'none',
            'border-radius': scope.borderRadius,
            'z-index': '99',
            'cursor': 'pointer'
          });

          var positionCss = (scope.position === 'right') ? {right: scope.distance} : {left: scope.distance};
          bar.css(positionCss);
        } else { // horizontal bar
          var bar = angular.element('<div></div>');
          bar.css({
            'background': scope.color,
            'height': scope.size,
            'position': 'absolute',
            'left': '0',
            'opacity': scope.opacity,
            'display': scope.alwaysVisible ? 'block' : 'none',
            'border-radius': scope.borderRadius,
            'z-index': '99',
            'cursor': 'pointer'
          });

          var positionCss = (scope.horizontalScrollPosition === 'bottom') ? {bottom: scope.distance} : {top: scope.distance};
          bar.css(positionCss);
        }

        element.wrap(wrapper);
        element.append(bar);
        $compile(bar)(scope);

        scope.makeBarDraggable = function () {
          bar.bind('mousedown', function (e) {
            var top = parseFloat(bar.css('top')),
              pageY = e.pageY,
              isDrag = true;

            $document.bind('mousemove', function (e) {
              bar.css({'top': top + e.pageY - pageY + 'px'});
              scope.scrollContent(0, bar[0].offsetTop, false);
            });

            $document.bind('selectstart', function (e) {
              return false;
            });

            $document.bind('mouseup', function (e) {
              isDrag = false;
              $document.unbind('mousemove');
              $document.unbind('selectstart');
            });
          });
        };

        scope.makeBarDraggableHorizontal = function () {
          bar.bind('mousedown', function (e) {
            var left = parseFloat(bar.css('left')),
              pageX = e.pageX,
              isDrag = true;

            $document.bind('mousemove', function (e) {
              bar.css({'left': left + e.pageX - pageX + 'px'});
              scope.scrollContentHorizontal(0, bar[0].offsetLeft, false);
            });

            $document.bind('selectstart', function (e) {
              return false;
            });

            $document.bind('mouseup', function (e) {
              isDrag = false;
              $document.unbind('mousemove');
              $document.unbind('selectstart');
            });
          });
        };

        scope.getBarHeight = function () {
          var barHeight = Math.max((el.offsetHeight / el.scrollHeight) * el.offsetHeight, minBarHeight);
          bar.css({'height': barHeight + 'px'});
          var display = barHeight === el.offsetHeight ? 'none' : 'block';
          bar.css({display: display});
        };

        scope.getBarWidth = function () {
          var barWidth = Math.max((el.offsetWidth / el.scrollWidth) * el.offsetWidth, minBarWidth);
          bar.css({'width': barWidth + 'px'});
          var display = barWidth === el.offsetWidth ? 'none' : 'block';
          bar.css({display: display});
        };

        scope.attachWheel = function (target) {
          if ($window.addEventListener) {
            target.addEventListener('DOMMouseScroll', scope.onWheel, false);
            target.addEventListener('mousewheel', scope.onWheel, false);
          } else {
            $document.addEventListener('onmousewheel', scope.onWheel);
          }
        };

        scope.detachWheel = function (target) {
          if ($window.removeEventListener) {
            target.removeEventListener('DOMMouseScroll', scope.onWheel, false);
            target.removeEventListener('mousewheel', scope.onWheel, false);
          } else {
            $document.removeEventListener('onmousewheel', scope.wheel);
          }
        };

        scope.onWheel = function (e) {
          var e = e || $window.event;

          var delta = 0;

          if (e.wheelDelta) delta = -e.wheelDelta / 120;
          if (e.detail) delta = e.detail / 3;

          var target = e.target || e.srcTarget || e.srcElement;

          if (!scope.horizontalScroll) {
            scope.scrollContent(delta, true);
          } else {
            scope.scrollContentHorizontal(delta, true);
          }

          if (e.preventDefault && !releaseScroll) e.preventDefault();
          if (!releaseScroll) e.returnValue = false;
        };

        scope.scrollContent = function (y, isWheel, isJump) {
          releaseScroll = false;
          var delta = y,
            maxTop = el.offsetHeight - bar[0].offsetHeight,
            percentScroll,
            barTop;

          if (isWheel) {
            delta = parseInt(bar.css('top'), 10) + y * parseInt(scope.wheelStep, 10) / 100 * bar[0].offsetHeight;
            delta = Math.min(Math.max(delta, 0), maxTop);
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
            bar.css({top: delta + 'px'});
          }

          percentScroll = parseInt(bar.css('top'), 10) / (el.offsetHeight - bar[0].offsetHeight);
          delta = percentScroll * (el.scrollHeight - el.offsetHeight);

          el.scrollTop = delta;
        };

        scope.scrollContentHorizontal = function (x, isWheel, isJump) {
          releaseScroll = false;
          var delta = x,
            maxLeft = el.offsetWidth - bar[0].offsetWidth,
            percentScroll,
            barLeft;

          if (isWheel) {
            delta = parseInt(bar.css('left'), 10) + x * parseInt(scope.wheelStep, 10) / 100 * bar[0].offsetWidth;
            delta = Math.min(Math.max(delta, 0), maxLeft);
            delta = (x > 0) ? Math.ceil(delta) : Math.floor(delta);
            bar.css({left: delta + 'px'});
          }

          percentScroll = parseInt(bar.css('left'), 10) / (el.offsetWidth - bar[0].offsetWidth);
          delta = percentScroll * (el.scrollWidth - el.offsetWidth);

          el.scrollLeft = delta;
        };

        // mobile
        element.bind('touchstart', function (e) {
          var touches;
          if (e.touches) touches = e.touches; //native
          else if (e.originalEvent && e.originalEvent.touches) touches = e.originalEvent.touches; //jquery

          if (touches.length) touchDiff = touches[0].pageY;
        });

        element.bind('touchmove', function (e) {
          if (!releaseScroll) e.preventDefault();

          var touches;
          if (e.touches) touches = e.touches; //native
          else if (e.originalEvent && e.originalEvent.touches) touches = e.originalEvent.touches; //jquery

          if (touches.length){
            var diff = (touchDiff - touches[0].pageY) / scope.touchScrollStep;
            if (!scope.horizontalScroll) scope.scrollContent(diff, true);
            else scope.scrollContentHorizontal(diff, true);
            touchDiff = touches[0].pageY;
          }
        });

        attrs.$observe('enabled', function () {
          scope.enabled = scope.$eval(attrs.enabled);

          if (scope.enabled === false) {
            bar.remove();
            scope.detachWheel(el);
          } else {
            element.append(bar);
            scope.attachWheel(el);
          }
        });

        if (scope.watchContent) {
          var contentWatcher = scope.$watch(
            function () {
              return el.scrollHeight;
            },
            function () {
              scope.resize();
            }
          );
          scope.$on("$destroy", function () {
            contentWatcher();
          });
        }

        scope.resize = function () {
          if (!scope.horizontalScroll) scope.getBarHeight();
          else scope.getBarWidth();
        };

        angular.element(window).resize(function () {
          scope.resize();
        });

        scope.init = function () {
          if (!scope.horizontalScroll) scope.makeBarDraggable();
          else scope.makeBarDraggableHorizontal();
          scope.attachWheel(el);
        };

        scope.init();
        /* Nested Scrolls
         el.addEventListener('mouseenter', function(){
         element.append(bar);
         ngScrolls.push(el.id);
         if (ngScrolls[0] !== el.id) scope.$emit('event:ngScrollEnterChild', ngScrolls[0]);
         }, false);

         el.addEventListener('mouseleave', function(){
         bar.remove();
         if (ngScrolls[0] !== el.id) scope.$emit('event:ngScrollLeaveChild', ngScrolls[0]);
         _.pull(ngScrolls, el.id);
         }, false);

         scope.$on('event:ngScrollEnterChild', function(event, parent) {
         if (el.id === parent) bar.remove();
         });

         scope.$on('event:ngScrollLeaveChild', function(event, parent) {
         if (el.id === parent) element.append(bar);
         });
         */
      }
    };
  }
]);