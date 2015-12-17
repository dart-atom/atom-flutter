dart_library.library('atom_flutter_dev/flutter_dev', null, /* Imports */[
  "dart/_runtime",
  'atom/atom',
  'dart/async',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, atom, async, core) {
  'use strict';
  let dartx = dart.dartx;
  class FlutterDevPackage extends atom.AtomPackage {
    FlutterDevPackage() {
      super.AtomPackage('flutter');
    }
    activate(state) {
      if (state === void 0)
        state = null;
      atom.atom.notifications.addInfo('Flutter plugin installed.');
      async.Future.delayed(new core.Duration({seconds: 4})).then(dart.fn(_ => {
        atom.atom.notifications.addSuccess('Plus, futures work!');
      }));
    }
    config() {
      return dart.map({flutterRoot: dart.map({title: 'FLUTTER_ROOT', description: 'The location of the Flutter SDK.', type: 'string', default: ''})});
    }
    deactivate() {}
  }
  dart.setSignature(FlutterDevPackage, {
    constructors: () => ({FlutterDevPackage: [FlutterDevPackage, []]}),
    methods: () => ({activate: [dart.void, [], [dart.dynamic]]})
  });
  // Exports:
  exports.FlutterDevPackage = FlutterDevPackage;
});
//# sourceMappingURL=flutter_dev.js.map
