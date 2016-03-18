'use strict';
let dart = require("dart/_runtime");
let js = require("dart/js");
let core = require("dart/core");
let dartx = dart.dartx;
function require(input) {
  return dart.as(js.context.callMethod('require', dart.list([input], core.String)), js.JsObject);
}
dart.fn(require, js.JsObject, [core.String]);
// Exports:
exports.require = require;
//# sourceMappingURL=node.js.map
