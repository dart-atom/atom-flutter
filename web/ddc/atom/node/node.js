dart_library.library('atom/node/node', null, /* Imports */[
  "dart/_runtime",
  'dart/js',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, js, core) {
  'use strict';
  let dartx = dart.dartx;
  function require(input) {
    return dart.as(js.context.callMethod('require', [input]), js.JsObject);
  }
  dart.fn(require, js.JsObject, [core.String]);
  // Exports:
  exports.require = require;
});
//# sourceMappingURL=node.js.map
