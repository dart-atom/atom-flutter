dart_library.library('atom_flutter_dev/flutter_dev', null, /* Imports */[
  "dart/_runtime",
  'atom_flutter_dev/src/atom',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, atom, core) {
  'use strict';
  let dartx = dart.dartx;
  dart.export(exports, atom, ['registerPackage'], []);
  class FlutterDevPackage extends atom.AtomPackage {
    FlutterDevPackage() {
      super.AtomPackage();
    }
    activate(state) {
      if (state === void 0)
        state = null;
      core.print('** FlutterDevPackage.activate() **');
    }
    deactivate() {
      core.print('** FlutterDevPackage.deactivate() **');
    }
    config() {
      return dart.map({flutterRoot: dart.map({title: 'FLUTTER_ROOT', description: 'The location of the Flutter SDK.', type: 'string', default: ''})});
    }
  }
  // Exports:
  exports.FlutterDevPackage = FlutterDevPackage;
});
//# sourceMappingURL=flutter_dev.js.map