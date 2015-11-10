dart_library.library('entry', null, /* Imports */[
  "dart/_runtime",
  'dart/core',
  'atom_flutter_dev/src/atom',
  'atom_flutter_dev/flutter_dev'
], /* Lazy imports */[
], function(exports, dart, core, atom, flutter_dev) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    core.print('** flutter-dev main() called **');
    atom.registerPackage(new flutter_dev.FlutterDevPackage());
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
//# sourceMappingURL=entry.js.map