/* global angular */

angular.module('ngBlink', [])
.directive('blink', function ($timeout) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<div ng-transclude></div>',
    controller: function ($scope, $element, $attrs) {
      $scope.speed = $attrs.speed || 500

      function show () {
        $element.css('visibility', 'visible')
        $scope.promise = $timeout(hide, $scope.speed)
      }

      function hide () {
        $element.css('visibility', 'hidden')
        $timeout(show, $scope.speed)
      }

      $scope.start = function () {
        show()
      }

      $scope.stop = function () {
        $timeout.cancel($scope.promise)
      }

      $scope.start()
    }
  }
})
