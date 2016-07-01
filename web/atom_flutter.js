(function() {
  'use strict';
  const dart_sdk = require('dart_sdk');
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging = require('logging');
  const logging$ = logging.logging;
  const atom = require('atom');
  const utils__disposable = atom.utils__disposable;
  const utils__dependencies = atom.utils__dependencies;
  const node__package = atom.node__package;
  const utils__package_deps = atom.utils__package_deps;
  const atom$ = atom.atom;
  const node__shell = atom.node__shell;
  const utils__utils = atom.utils__utils;
  const node__command = atom.node__command;
  const node__process = atom.node__process;
  const usage = require('usage');
  const usage$ = usage.usage;
  const src__usage_impl = usage.src__usage_impl;
  const flutter = Object.create(null);
  const menus__getting_started = Object.create(null);
  const state = Object.create(null);
  const usage$0 = Object.create(null);
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let StringTodynamic = () => (StringTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.definiteFunctionType(core.String, [core.String])))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.definiteFunctionType(FutureOfString(), [])))();
  let VoidToStreamController = () => (VoidToStreamController = dart.constFn(dart.definiteFunctionType(async.StreamController, [])))();
  let StringAndStateStorableTovoid = () => (StringAndStateStorableTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String, state.StateStorable])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String])))();
  let LogRecordTovoid = () => (LogRecordTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [logging$.LogRecord])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let MapOfString$dynamicToString = () => (MapOfString$dynamicToString = dart.constFn(dart.definiteFunctionType(core.String, [MapOfString$dynamic()])))();
  dart.defineLazy(flutter, {
    get _logger() {
      return logging$.Logger.new('flutter');
    }
  });
  const _init = Symbol('_init');
  flutter.FlutterDevPackage = class FlutterDevPackage extends node__package.AtomPackage {
    new() {
      this.disposables = new utils__disposable.Disposables();
      super.new('flutter');
    }
    activate(pluginState) {
      if (pluginState === void 0) pluginState = null;
      flutter._logger.info('activate');
      utils__dependencies.Dependencies.setGlobalInstance(new utils__dependencies.Dependencies());
      utils__dependencies.deps.set(dart.wrapType(node__package.AtomPackage), this);
      state.state.loadFrom(pluginState);
      async.Future.delayed(core.Duration.ZERO, dart.fn(() => {
        utils__package_deps.install('Flutter', this);
      }, VoidTodynamic()));
      this[_init]();
    }
    [_init]() {
      this.disposables.add(new menus__getting_started.GettingStarted());
      this.disposables.add(new usage$0.UsageManager());
    }
    config() {
      return dart.map({flutterRoot: dart.map({title: 'flutter_root', description: 'The location of the Flutter SDK.', type: 'string', default: '', order: 1}), sendUsage: dart.map({title: 'Report usage information to Google Analytics', description: "Report anonymized usage information to Google Analytics.", type: 'boolean', default: true, order: 9})});
    }
    serialize() {
      return state.state.saveState();
    }
    deactivate() {
      flutter._logger.info('deactivate');
      this.disposables.dispose();
    }
  };
  dart.setSignature(flutter.FlutterDevPackage, {
    constructors: () => ({new: dart.definiteFunctionType(flutter.FlutterDevPackage, [])}),
    methods: () => ({
      activate: dart.definiteFunctionType(dart.void, [], [dart.dynamic]),
      [_init]: dart.definiteFunctionType(dart.void, [])
    })
  });
  const _gettingStarted = Symbol('_gettingStarted');
  const _handleSendFeedback = Symbol('_handleSendFeedback');
  const _flutterSettings = Symbol('_flutterSettings');
  menus__getting_started.GettingStarted = class GettingStarted extends core.Object {
    new() {
      this.disposables = new utils__disposable.Disposables();
      this.disposables.add(atom$.atom.commands.add('atom-workspace', 'flutter:getting-started', dart.bind(this, _gettingStarted)));
      this.disposables.add(atom$.atom.commands.add('atom-workspace', 'flutter:send-feedback', dart.bind(this, _handleSendFeedback)));
      this.disposables.add(atom$.atom.commands.add('atom-workspace', 'flutter:settings', dart.bind(this, _flutterSettings)));
    }
    dispose() {
      return this.disposables.dispose();
    }
    [_gettingStarted](_) {
      node__shell.shell.openExternal('http://flutter.io/getting-started/');
    }
    [_handleSendFeedback](_) {
      menus__getting_started.getSystemDescription().then(dart.dynamic)(dart.fn(description => {
        node__shell.shell.openExternal('https://github.com/flutter/flutter/issues/new?' + dart.str`body=${utils__utils.uriEncodeComponent(description)}`);
      }, StringTodynamic()));
    }
    [_flutterSettings](_) {
      atom$.atom.workspace.open('atom://config/packages/flutter');
    }
  };
  menus__getting_started.GettingStarted[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(menus__getting_started.GettingStarted, {
    constructors: () => ({new: dart.definiteFunctionType(menus__getting_started.GettingStarted, [])}),
    methods: () => ({
      dispose: dart.definiteFunctionType(dart.void, []),
      [_gettingStarted]: dart.definiteFunctionType(dart.void, [node__command.AtomEvent]),
      [_handleSendFeedback]: dart.definiteFunctionType(dart.void, [node__command.AtomEvent]),
      [_flutterSettings]: dart.definiteFunctionType(dart.void, [node__command.AtomEvent])
    })
  });
  menus__getting_started.getSystemDescription = function() {
    let atomVer = atom$.atom.getVersion();
    let os = dart.test(node__process.isMac) ? 'macos' : node__process.process.platform;
    return node__package.atomPackage.getPackageVersion().then(core.String)(dart.fn(pluginVer => {
      let hasFlutterSdk = atom$.atom.config.getValue('flutter.flutterRoot') != null;
      let description = dart.str`\n\nAtom ${atomVer}, flutter plugin ${pluginVer}`;
      if (!hasFlutterSdk) {
        description = description + ' (no flutter sdk configured)';
      }
      description = description + dart.str`, running on ${os}.`;
      return description;
    }, StringToString()));
  };
  dart.fn(menus__getting_started.getSystemDescription, VoidToFutureOfString());
  state.pluginId = 'flutter';
  dart.defineLazy(state, {
    get state() {
      return new state.State();
    }
  });
  const _pluginState = Symbol('_pluginState');
  const _storables = Symbol('_storables');
  const _controllers = Symbol('_controllers');
  state.State = class State extends core.Object {
    new() {
      this[_pluginState] = dart.map();
      this[_storables] = dart.map();
      this[_controllers] = dart.map();
    }
    get(key) {
      return dart.dindex(this[_pluginState], key);
    }
    set(key, value) {
      dart.dsetindex(this[_pluginState], key, value);
      if (this[_controllers][dartx.get](key) != null) this[_controllers][dartx.get](key).add(value);
      return value;
    }
    registerStorable(key, storable) {
      try {
        this[_storables][dartx.set](key, storable);
        let data = this.get(key);
        storable.initFromStored(typeof data == 'string' ? convert.JSON.decode(data) : null);
      } catch (e) {
        core.print(dart.str`Exception restoring state: ${e}`);
      }

    }
    loadFrom(inState) {
      this[_pluginState] = (inState != null ? inState : dart.map());
    }
    onValueChanged(key) {
      if (this[_controllers][dartx.get](key) != null) {
        return this[_controllers][dartx.get](key).stream;
      } else {
        let controller = async.StreamController.broadcast({sync: true, onCancel: dart.fn(() => this[_controllers][dartx.remove](key), VoidToStreamController())});
        this[_controllers][dartx.set](key, controller);
        return controller.stream;
      }
    }
    saveState() {
      this[_storables][dartx.forEach](dart.fn((key, storable) => {
        dart.dsetindex(this[_pluginState], key, convert.JSON.encode(storable.toStorable()));
      }, StringAndStateStorableTovoid()));
      return this[_pluginState];
    }
  };
  dart.setSignature(state.State, {
    constructors: () => ({new: dart.definiteFunctionType(state.State, [])}),
    methods: () => ({
      get: dart.definiteFunctionType(dart.dynamic, [core.String]),
      set: dart.definiteFunctionType(dart.void, [core.String, dart.dynamic]),
      registerStorable: dart.definiteFunctionType(dart.void, [core.String, state.StateStorable]),
      loadFrom: dart.definiteFunctionType(dart.void, [dart.dynamic]),
      onValueChanged: dart.definiteFunctionType(async.Stream, [core.String]),
      saveState: dart.definiteFunctionType(dart.dynamic, [])
    })
  });
  state.StateStorable = class StateStorable extends core.Object {
    new() {
    }
  };
  dart.setSignature(state.StateStorable, {
    constructors: () => ({new: dart.definiteFunctionType(state.StateStorable, [])})
  });
  usage$0._UA = 'UA-67589403-3';
  dart.defineLazy(usage$0, {
    get _ga() {
      return new usage$.AnalyticsMock();
    },
    set _ga(_) {}
  });
  const _subs = Symbol('_subs');
  const _editorObserve = Symbol('_editorObserve');
  const _init$ = Symbol('_init');
  usage$0.UsageManager = class UsageManager extends core.Object {
    new() {
      this[_subs] = new utils__disposable.StreamSubscriptions();
      this[_editorObserve] = null;
      this[_init$]().then(dart.dynamic)(dart.fn(_ => usage$0.trackCommand('auto-startup'), dynamicTovoid()));
    }
    [_init$]() {
      return node__package.atomPackage.getPackageVersion().then(dart.dynamic)(dart.fn(version => {
        atom$.atom.config.observe('flutter.sendUsage', null, dart.fn(value => {
          if (dart.equals(value, true)) {
            usage$0._ga = new usage$0._AnalyticsAtom(usage$0._UA, 'flutter', version);
            usage$0._ga.optIn = true;
            usage$0._ga.sendScreenView('editor');
          } else {
            usage$0._ga = new usage$.AnalyticsMock();
          }
        }, dynamicTovoid()));
        this[_subs].add(logging$.Logger.root.onRecord.listen(usage$0._handleLogRecord));
        this[_subs].add(atom$.atom.commands.onDidDispatch.listen(usage$0.trackCommand));
      }, StringTodynamic()));
    }
    dispose() {
      usage$0.trackCommand('auto-shutdown');
      this[_subs].cancel();
      if (this[_editorObserve] != null) this[_editorObserve].dispose();
    }
  };
  usage$0.UsageManager[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(usage$0.UsageManager, {
    constructors: () => ({new: dart.definiteFunctionType(usage$0.UsageManager, [])}),
    methods: () => ({
      [_init$]: dart.definiteFunctionType(async.Future, []),
      dispose: dart.definiteFunctionType(dart.void, [])
    })
  });
  usage$0.trackCommand = function(command) {
    let category = 'flutter';
    let list = command[dartx.split](':');
    if (dart.notNull(list[dartx.length]) >= 2) {
      category = core.String._check(list[dartx.get](0));
      command = core.String._check(list[dartx.get](1));
    }
    if (category == 'core') return;
    usage$0._ga.sendEvent(category, command);
  };
  dart.fn(usage$0.trackCommand, StringTovoid());
  usage$0._handleLogRecord = function(log) {
    if (dart.test(log.level['>='](logging$.Level.WARNING))) {
      let fatal = log.level['>='](logging$.Level.SEVERE);
      let message = log.message;
      if (dart.test(message[dartx.contains]('/Users/'))) {
        message = message[dartx.substring](0, message[dartx.indexOf]('/Users/'));
      }
      let desc = dart.str`${log.loggerName}:${message}`;
      if (log.error != null) {
        desc = desc + dart.str`,${dart.runtimeType(log.error)}`;
      }
      if (log.stackTrace != null) {
        desc = desc + dart.str`,${usage$.sanitizeStacktrace(log.stackTrace)}`;
      }
      usage$0._ga.sendException(desc, {fatal: fatal});
    }
  };
  dart.fn(usage$0._handleLogRecord, LogRecordTovoid());
  usage$0._AnalyticsAtom = class _AnalyticsAtom extends src__usage_impl.AnalyticsImpl {
    new(trackingId, applicationName, applicationVersion) {
      super.new(trackingId, new usage$0._AtomUsagePersistentProperties(applicationName), new usage$0._AtomUsagePostHandler(), {applicationName: applicationName, applicationVersion: applicationVersion});
      let screenWidth = html.window[dartx.screen][dartx.width];
      let screenHeight = html.window[dartx.screen][dartx.height];
      this.setSessionValue('sr', dart.str`${screenWidth}x${screenHeight}`);
      this.setSessionValue('sd', dart.str`${html.window[dartx.screen][dartx.pixelDepth]}-bits`);
      this.setSessionValue('ul', html.window[dartx.navigator][dartx.language]);
    }
  };
  dart.setSignature(usage$0._AnalyticsAtom, {
    constructors: () => ({new: dart.definiteFunctionType(usage$0._AnalyticsAtom, [core.String, core.String, core.String])})
  });
  usage$0._AtomUsagePersistentProperties = class _AtomUsagePersistentProperties extends src__usage_impl.PersistentProperties {
    new(name) {
      super.new(name);
    }
    get(key) {
      return atom$.atom.config.getValue(dart.str`_flutterAnalytics.${key}`);
    }
    set(key, value) {
      atom$.atom.config.setValue(dart.str`_flutterAnalytics.${key}`, value);
      return value;
    }
  };
  dart.setSignature(usage$0._AtomUsagePersistentProperties, {
    constructors: () => ({new: dart.definiteFunctionType(usage$0._AtomUsagePersistentProperties, [core.String])}),
    methods: () => ({
      get: dart.definiteFunctionType(dart.dynamic, [core.String]),
      set: dart.definiteFunctionType(dart.void, [core.String, dart.dynamic])
    })
  });
  usage$0._AtomUsagePostHandler = class _AtomUsagePostHandler extends src__usage_impl.PostHandler {
    sendPost(url, parameters) {
      let viewportWidth = html.document[dartx.documentElement][dartx.clientWidth];
      let viewportHeight = html.document[dartx.documentElement][dartx.clientHeight];
      parameters[dartx.set]('vp', dart.str`${viewportWidth}x${viewportHeight}`);
      let data = usage$0._postEncode(parameters);
      return html.HttpRequest.request(url, {method: 'POST', sendData: data}).catchError(dart.fn(e => {
      }, dynamicTodynamic()));
    }
  };
  dart.setSignature(usage$0._AtomUsagePostHandler, {
    methods: () => ({sendPost: dart.definiteFunctionType(async.Future, [core.String, core.Map$(core.String, dart.dynamic)])})
  });
  usage$0._postEncode = function(map) {
    return map[dartx.keys][dartx.map](core.String)(dart.fn(key => {
      let value = dart.str`${map[dartx.get](key)}`;
      let result = core.Uri.encodeComponent(value);
      return dart.str`${key}=${result}`;
    }, StringToString()))[dartx.join]('&');
  };
  dart.fn(usage$0._postEncode, MapOfString$dynamicToString());
  // Exports:
  exports.flutter = flutter;
  exports.menus__getting_started = menus__getting_started;
  exports.state = state;
  exports.usage = usage$0;
})();

//# sourceMappingURL=atom_flutter.js.map
