/* global angular */

angular.module('ngBlink', [])
.directive('blink', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<div></div>',
    controller: function ($scope, $element, $attrs) {
      
    }
  }
})
