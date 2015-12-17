dart_library.library('entry', null, /* Imports */[
  "dart/_runtime",
  'atom/atom',
  'atom_flutter_dev/flutter_dev'
], /* Lazy imports */[
], function(exports, dart, atom, flutter_dev) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    atom.registerPackage(new flutter_dev.FlutterDevPackage());
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
//# sourceMappingURL=entry.js.map
