dart_library.library('usage/src/uuid', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/math'
], /* Lazy imports */[
], function(exports, dart, core, math) {
  'use strict';
  let dartx = dart.dartx;
  const _random = Symbol('_random');
  const _bitsDigits = Symbol('_bitsDigits');
  const _printDigits = Symbol('_printDigits');
  const _generateBits = Symbol('_generateBits');
  class Uuid extends core.Object {
    Uuid() {
      this[_random] = math.Random.new();
    }
    generateV4() {
      let special = 8 + dart.notNull(this[_random].nextInt(4));
      return `${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}-` + `${this[_bitsDigits](16, 4)}-` + `4${this[_bitsDigits](12, 3)}-` + `${this[_printDigits](special, 1)}${this[_bitsDigits](12, 3)}-` + `${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}`;
    }
    [_bitsDigits](bitCount, digitCount) {
      return this[_printDigits](this[_generateBits](bitCount), digitCount);
    }
    [_generateBits](bitCount) {
      return this[_random].nextInt(1 << dart.notNull(bitCount));
    }
    [_printDigits](value, count) {
      return value[dartx.toRadixString](16)[dartx.padLeft](count, '0');
    }
  }
  dart.setSignature(Uuid, {
    methods: () => ({
      generateV4: [core.String, []],
      [_bitsDigits]: [core.String, [core.int, core.int]],
      [_generateBits]: [core.int, [core.int]],
      [_printDigits]: [core.String, [core.int, core.int]]
    })
  });
  // Exports:
  exports.Uuid = Uuid;
});
//# sourceMappingURL=uuid.js.map
