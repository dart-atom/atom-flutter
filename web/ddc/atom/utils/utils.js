'use strict';
let dart = require("dart/_runtime");
let core = require("dart/core");
let dartx = dart.dartx;
function uriEncodeComponent(str) {
  return str[dartx.replaceAll](' ', '%20');
}
dart.fn(uriEncodeComponent, core.String, [core.String]);
// Exports:
exports.uriEncodeComponent = uriEncodeComponent;
//# sourceMappingURL=utils.js.map
