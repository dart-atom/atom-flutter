dart_library.library('atom_flutter_dev/src/atom', null, /* Imports */[
  "dart/_runtime",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  exports.exports = null;
  function registerPackage(package$) {
    core.print('foo');
    dart.dsetindex(exports.exports, 'activate', dart.bind(package$, 'packageActivated'));
    dart.dsetindex(exports.exports, 'deactivate', dart.bind(package$, 'packageDeactivated'));
    core.print('bar');
  }
  dart.fn(registerPackage, () => dart.definiteFunctionType(dart.void, [AtomPackage]));
  class AtomPackage extends core.Object {
    AtomPackage() {
    }
    config() {
      return dart.map();
    }
    packageActivated(state) {
      if (state === void 0)
        state = null;
    }
    packageDeactivated() {}
    serialize() {
      return dart.map();
    }
  }
  dart.setSignature(AtomPackage, {
    constructors: () => ({AtomPackage: [AtomPackage, []]}),
    methods: () => ({
      config: [core.Map, []],
      packageActivated: [dart.void, [], [dart.dynamic]],
      packageDeactivated: [dart.void, []],
      serialize: [dart.dynamic, []]
    })
  });
  // Exports:
  exports.registerPackage = registerPackage;
  exports.AtomPackage = AtomPackage;
});
//# sourceMappingURL=atom.js.map