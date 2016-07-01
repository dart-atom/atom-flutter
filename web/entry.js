(function() {
  'use strict';
  const dart_sdk = require('dart_sdk');
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging = require('logging');
  const logging$ = logging.logging;
  const atom = require('atom');
  const node__package = atom.node__package;
  const atom_flutter = require('atom_flutter');
  const flutter = atom_flutter.flutter;
  const web__entry = Object.create(null);
  let LogRecordTovoid = () => (LogRecordTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [logging$.LogRecord])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  web__entry.main = function() {
    logging$.Logger.root.level = logging$.Level.INFO;
    logging$.Logger.root.onRecord.listen(dart.fn(r => {
      let tag = dart.str`${r.loggerName} - ${r.level.name[dartx.toLowerCase]()} -`;
      core.print(dart.str`${tag} ${r.message}`);
      if (r.error != null) core.print(dart.str`${tag}   ${r.error}`);
      if (r.stackTrace != null) core.print(dart.str`${tag}   ${r.stackTrace}`);
    }, LogRecordTovoid()));
    node__package.registerPackage(new flutter.FlutterDevPackage());
  };
  dart.fn(web__entry.main, VoidTodynamic());
  // Exports:
  exports.web__entry = web__entry;
})();

//# sourceMappingURL=entry.js.map
