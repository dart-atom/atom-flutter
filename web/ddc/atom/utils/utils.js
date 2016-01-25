dart_library.library('atom/utils/utils', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  function uriEncodeComponent(str) {
    return str[dartx.replaceAll](' ', '%20');
  }
  dart.fn(uriEncodeComponent, core.String, [core.String]);
  // Exports:
  exports.uriEncodeComponent = uriEncodeComponent;
});
//# sourceMappingURL=utils.js.map
