'use strict';
let dart = require("dart/_runtime");
let logging = require("logging/logging");
let core = require("dart/core");
let atom = require("atom/atom");
let flutter = require("atom_flutter/flutter");
let dartx = dart.dartx;
function main() {
  logging.Logger.root.level = logging.Level.INFO;
  logging.Logger.root.onRecord.listen(dart.fn(r => {
    let tag = `${r.loggerName} - ${r.level.name[dartx.toLowerCase]()} -`;
    core.print(`${tag} ${r.message}`);
    if (r.error != null) core.print(`${tag}   ${r.error}`);
    if (r.stackTrace != null) core.print(`${tag}   ${r.stackTrace}`);
  }, dart.void, [logging.LogRecord]));
  atom.registerPackageDDC(new flutter.FlutterDevPackage());
}
dart.fn(main);
// Exports:
exports.main = main;
//# sourceMappingURL=entry.js.map
