/* global describe, beforeEach, expect, module, inject, it, angular, spyOn */

describe('ng-blink', function () {
  var element,
    $scope,
    $timeout
  beforeEach(module('ngBlink'))
  beforeEach(inject(function ($compile, $rootScope, _$timeout_) {
    $scope = $rootScope
    $timeout = _$timeout_
    element = angular.element('<blink></blink>')
    $compile(element)($rootScope)
  }))

  describe('$scope', function () {
    it('should define $scope.speed', function () {
      $scope.$digest()
      expect($scope.speed).toBeDefined()
    })
    describe('#stop', function () {
      it('should call $timeout.cancel', function () {
        spyOn($timeout, 'cancel')

        $scope.stop()

        expect($timeout.cancel).toHaveBeenCalled()
      })
    })
  })
})
