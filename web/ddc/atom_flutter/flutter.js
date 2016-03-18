'use strict';
let dart = require("dart/_runtime");
let logging = require("logging/logging");
let disposable = require("atom/utils/disposable");
let dependencies = require("atom/utils/dependencies");
let atom = require("atom/atom");
let state = require("atom_flutter/state");
let async = require("dart/async");
let core = require("dart/core");
let package_deps = require("atom/utils/package_deps");
let getting_started = require("atom_flutter/menus/getting_started");
let usage = require("atom_flutter/usage");
let dartx = dart.dartx;
dart.defineLazyProperties(exports, {
  get _logger() {
    return logging.Logger.new('flutter');
  }
});
const _init = Symbol('_init');
class FlutterDevPackage extends atom.AtomPackage {
  FlutterDevPackage() {
    this.disposables = new disposable.Disposables();
    super.AtomPackage('flutter');
  }
  activate(pluginState) {
    if (pluginState === void 0) pluginState = null;
    exports._logger.info('activate');
    dependencies.Dependencies.setGlobalInstance(new dependencies.Dependencies());
    dependencies.deps.set(atom.AtomPackage, this);
    state.state.loadFrom(pluginState);
    async.Future.delayed(core.Duration.ZERO, dart.fn(() => {
      package_deps.install('Flutter', this);
    }));
    this[_init]();
  }
  [_init]() {
    this.disposables.add(new getting_started.GettingStarted());
    this.disposables.add(new usage.UsageManager());
  }
  config() {
    return dart.map({flutterRoot: dart.map({title: 'FLUTTER_ROOT', description: 'The location of the Flutter SDK.', type: 'string', default: '', order: 1}), sendUsage: dart.map({title: 'Report usage information to Google Analytics.', description: "Report anonymized usage information to Google Analytics.", type: 'boolean', default: true, order: 9})});
  }
  serialize() {
    return state.state.saveState();
  }
  deactivate() {
    exports._logger.info('deactivate');
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
//# sourceMappingURL=flutter.js.map
