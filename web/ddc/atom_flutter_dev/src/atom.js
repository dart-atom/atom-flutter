dart_library.library('atom_flutter_dev/src/atom', null, /* Imports */[
  "dart/_runtime",
  'dart/core',
  'dart/js'
], /* Lazy imports */[
], function(exports, dart, core, js) {
  'use strict';
  let dartx = dart.dartx;
  function registerPackage(package$) {
    core.print('** registerPackage() called **');
    let exports = dart.as(dart.dindex(js.context.get('module'), 'exports'), js.JsObject);
    exports.set('activate', dart.bind(package$, 'activate'));
    exports.set('deactivate', dart.bind(package$, 'deactivate'));
    exports.set('config', jsify(package$.config()));
    exports.set('serialize', dart.bind(package$, 'serialize'));
    core.print('** registerPackage() exited **');
  }
  dart.fn(registerPackage, () => dart.definiteFunctionType(dart.void, [AtomPackage]));
  class AtomPackage extends core.Object {
    AtomPackage() {
    }
    config() {
      return dart.map();
    }
    activate(state) {
      if (state === void 0)
        state = null;
      core.print('** AtomPackage.activate() **');
    }
    deactivate() {
      core.print('** AtomPackage.deactivate() **');
    }
    serialize() {
      return dart.map();
    }
  }
  dart.setSignature(AtomPackage, {
    constructors: () => ({AtomPackage: [AtomPackage, []]}),
    methods: () => ({
      config: [core.Map, []],
      activate: [dart.void, [], [dart.dynamic]],
      deactivate: [dart.void, []],
      serialize: [dart.dynamic, []]
    })
  });
  function jsify(obj) {
    if (obj == null)
      return null;
    if (dart.is(obj, js.JsObject))
      return dart.as(obj, js.JsObject);
    if (dart.is(obj, core.List) || dart.is(obj, core.Map))
      return js.JsObject.jsify(obj);
    return dart.as(obj, js.JsObject);
  }
  dart.fn(jsify, js.JsObject, [dart.dynamic]);
  // Exports:
  exports.registerPackage = registerPackage;
  exports.AtomPackage = AtomPackage;
  exports.jsify = jsify;
});
//# sourceMappingURL=atom.js.map