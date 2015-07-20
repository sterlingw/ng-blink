/* global describe, beforeEach, expect, module, injector, it */

describe('ng-blink', function () {
  var blink
  beforeEach(module('ngBlink'))
  beforeEach(injector(function (_blink_) {
    blink = _blink_
  }))

  describe('', function () {
    it('should be true', function () {
      expect(true).toBe(true)
    })
  })
})
