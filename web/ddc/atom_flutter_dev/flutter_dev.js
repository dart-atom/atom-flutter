dart_library.library('atom_flutter_dev/flutter_dev', null, /* Imports */[
  "dart/_runtime",
  'atom/atom',
  'atom/utils/disposable',
  'dart/async',
  'dart/core',
  'atom/utils/package_deps'
], /* Lazy imports */[
], function(exports, dart, atom, disposable, async, core, package_deps) {
  'use strict';
  let dartx = dart.dartx;
  const _init = Symbol('_init');
  class FlutterDevPackage extends atom.AtomPackage {
    FlutterDevPackage() {
      this.disposables = new disposable.Disposables();
      super.AtomPackage('flutter');
    }
    activate(state) {
      if (state === void 0) state = null;
      async.Future.delayed(core.Duration.ZERO, dart.fn(() => {
        package_deps.install('Flutter', this, {justNotify: true});
      }));
      this[_init]();
    }
    [_init]() {}
    deactivate() {
      this.disposables.dispose();
    }
  }
  dart.setSignature(FlutterDevPackage, {
    constructors: () => ({FlutterDevPackage: [FlutterDevPackage, []]}),
    methods: () => ({
      activate: [dart.void, [], [dart.dynamic]],
      [_init]: [dart.void, []]
    })
  });
  // Exports:
  exports.FlutterDevPackage = FlutterDevPackage;
});
//# sourceMappingURL=flutter_dev.js.map
