dart_library.library('atom_flutter_dev/src/atom', null, /* Imports */[
  "dart/_runtime",
  'dart/js',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, js, core) {
  'use strict';
  let dartx = dart.dartx;
  function registerPackage(package$) {
    let flutter = dart.map({activate: dart.bind(package$, 'activate'), deactivate: dart.bind(package$, 'deactivate'), config: jsify(package$.config()), serialize: dart.bind(package$, 'serialize')});
    js.context.set('flutter', jsify(flutter));
  }
  dart.fn(registerPackage, () => dart.definiteFunctionType(dart.void, [AtomPackage]));
  class AtomPackage extends core.Object {
    AtomPackage(name) {
      this.name = name;
    }
    activate(state) {
      if (state === void 0)
        state = null;
    }
    config() {
      return dart.map();
    }
    serialize() {
      return dart.map();
    }
    deactivate() {}
  }
  dart.setSignature(AtomPackage, {
    constructors: () => ({AtomPackage: [AtomPackage, [core.String]]}),
    methods: () => ({
      activate: [dart.void, [], [dart.dynamic]],
      config: [core.Map, []],
      serialize: [dart.dynamic, []],
      deactivate: [dart.void, []]
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