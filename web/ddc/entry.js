dart_library.library('entry', null, /* Imports */[
  "dart/_runtime",
  'dart/core',
  'logging/logging',
  'atom_flutter_dev/src/atom',
  'atom_flutter_dev/flutter_dev'
], /* Lazy imports */[
], function(exports, dart, core, logging, atom, flutter_dev) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    core.print('*** hello from flutter ***');
    logging.Logger.root.level = logging.Level.INFO;
    atom.registerPackage(new flutter_dev.FlutterDevPackage());
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
//# sourceMappingURL=entry.js.map