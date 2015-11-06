dart_library.library('atom_flutter_dev/flutter_dev', null, /* Imports */[
  "dart/_runtime",
  'atom_flutter_dev/src/atom',
  'logging/logging'
], /* Lazy imports */[
], function(exports, dart, atom, logging) {
  'use strict';
  let dartx = dart.dartx;
  dart.export(exports, atom, ['registerPackage'], []);
  dart.defineLazyProperties(exports, {
    get _logger() {
      return logging.Logger.new('flutter_dev');
    }
  });
  class FlutterDevPackage extends atom.AtomPackage {
    FlutterDevPackage() {
      super.AtomPackage();
    }
    packageActivated(state) {
      if (state === void 0)
        state = null;
      exports._logger.info('activated');
    }
    packageDeactivated() {
      exports._logger.info('deactivated');
    }
  }
  // Exports:
  exports.FlutterDevPackage = FlutterDevPackage;
});
//# sourceMappingURL=flutter_dev.js.map