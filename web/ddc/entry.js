dart_library.library('entry', null, /* Imports */[
  'dart/_runtime',
  'logging/logging',
  'dart/core',
  'atom/atom',
  'atom_flutter/flutter'
], /* Lazy imports */[
], function(exports, dart, logging, core, atom, flutter) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    logging.Logger.root.level = logging.Level.INFO;
    logging.Logger.root.onRecord.listen(dart.fn(r => {
      let tag = `${r.loggerName} - ${r.level.name[dartx.toLowerCase]()} -`;
      core.print(`${tag} ${r.message}`);
      if (r.error != null) core.print(`${tag}   ${r.error}`);
      if (r.stackTrace != null) core.print(`${tag}   ${r.stackTrace}`);
    }, dart.void, [logging.LogRecord]));
    atom.registerPackage(new flutter.FlutterDevPackage());
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
//# sourceMappingURL=entry.js.map
