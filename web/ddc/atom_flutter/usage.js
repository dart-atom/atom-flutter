dart_library.library('atom_flutter/usage', null, /* Imports */[
  'dart/_runtime',
  'usage/usage',
  'dart/core',
  'atom/utils/disposable',
  'atom_flutter/state',
  'atom/atom',
  'logging/logging',
  'dart/async',
  'usage/src/usage_impl',
  'dart/html'
], /* Lazy imports */[
], function(exports, dart, usage, core, disposable, state, atom, logging, async, usage_impl, html) {
  'use strict';
  let dartx = dart.dartx;
  exports._UA = 'UA-67589403-3';
  dart.defineLazyProperties(exports, {
    get _ga() {
      return new usage.AnalyticsMock();
    },
    set _ga(_) {}
  });
  const _subs = Symbol('_subs');
  const _editorObserve = Symbol('_editorObserve');
  const _init = Symbol('_init');
  class UsageManager extends core.Object {
    UsageManager() {
      this[_subs] = new disposable.StreamSubscriptions();
      this[_editorObserve] = null;
      this[_init]().then(dart.fn(_ => trackCommand('auto-startup'), dart.void, [dart.dynamic]));
    }
    [_init]() {
      return state.atomPackage.getPackageVersion().then(dart.fn(version => {
        atom.atom.config.observe('flutter.sendUsage', null, dart.fn(value => {
          if (dart.equals(value, true)) {
            exports._ga = new _AnalyticsAtom(exports._UA, 'flutter', version);
            exports._ga.optIn = true;
            exports._ga.sendScreenView('editor');
          } else {
            exports._ga = new usage.AnalyticsMock();
          }
        }, dart.void, [dart.dynamic]));
        this[_subs].add(logging.Logger.root.onRecord.listen(_handleLogRecord));
        this[_subs].add(atom.atom.commands.onDidDispatch.listen(trackCommand));
      }, dart.dynamic, [core.String]));
    }
    dispose() {
      trackCommand('auto-shutdown');
      this[_subs].cancel();
      if (this[_editorObserve] != null) this[_editorObserve].dispose();
    }
  }
  UsageManager[dart.implements] = () => [disposable.Disposable];
  dart.setSignature(UsageManager, {
    constructors: () => ({UsageManager: [UsageManager, []]}),
    methods: () => ({
      [_init]: [async.Future, []],
      dispose: [dart.void, []]
    })
  });
  function trackCommand(command) {
    let category = 'flutter';
    let list = command[dartx.split](':');
    if (dart.notNull(list[dartx.length]) >= 2) {
      category = dart.as(list[dartx.get](0), core.String);
      command = dart.as(list[dartx.get](1), core.String);
    }
    if (category == 'core') return;
    exports._ga.sendEvent(category, command);
  }
  dart.fn(trackCommand, dart.void, [core.String]);
  function _handleLogRecord(log) {
    if (dart.notNull(log.level['>='](logging.Level.WARNING))) {
      let fatal = log.level['>='](logging.Level.SEVERE);
      let message = log.message;
      if (dart.notNull(message[dartx.contains]('/Users/'))) {
        message = message[dartx.substring](0, message[dartx.indexOf]('/Users/'));
      }
      let desc = `${log.loggerName}:${message}`;
      if (log.error != null) {
        desc = desc + `,${dart.runtimeType(log.error)}`;
      }
      if (log.stackTrace != null) {
        desc = desc + `,${usage.sanitizeStacktrace(log.stackTrace)}`;
      }
      exports._ga.sendException(desc, {fatal: fatal});
    }
  }
  dart.fn(_handleLogRecord, dart.void, [logging.LogRecord]);
  class _AnalyticsAtom extends usage_impl.AnalyticsImpl {
    _AnalyticsAtom(trackingId, applicationName, applicationVersion) {
      super.AnalyticsImpl(trackingId, new _AtomUsagePersistentProperties(applicationName), new _AtomUsagePostHandler(), {applicationName: applicationName, applicationVersion: applicationVersion});
      let screenWidth = html.window.screen.width;
      let screenHeight = html.window.screen.height;
      this.setSessionValue('sr', `${screenWidth}x${screenHeight}`);
      this.setSessionValue('sd', `${html.window.screen.pixelDepth}-bits`);
      this.setSessionValue('ul', html.window.navigator.language);
    }
  }
  dart.setSignature(_AnalyticsAtom, {
    constructors: () => ({_AnalyticsAtom: [_AnalyticsAtom, [core.String, core.String, core.String]]})
  });
  class _AtomUsagePersistentProperties extends usage_impl.PersistentProperties {
    _AtomUsagePersistentProperties(name) {
      super.PersistentProperties(name);
    }
    get(key) {
      return atom.atom.config.getValue(`_flutterAnalytics.${key}`);
    }
    set(key, value) {
      atom.atom.config.setValue(`_flutterAnalytics.${key}`, value);
      return value;
    }
  }
  dart.setSignature(_AtomUsagePersistentProperties, {
    constructors: () => ({_AtomUsagePersistentProperties: [_AtomUsagePersistentProperties, [core.String]]}),
    methods: () => ({
      get: [dart.dynamic, [core.String]],
      set: [dart.void, [core.String, dart.dynamic]]
    })
  });
  class _AtomUsagePostHandler extends usage_impl.PostHandler {
    sendPost(url, parameters) {
      let viewportWidth = html.document.documentElement.clientWidth;
      let viewportHeight = html.document.documentElement.clientHeight;
      parameters.set('vp', `${viewportWidth}x${viewportHeight}`);
      let data = _postEncode(parameters);
      return html.HttpRequest.request(url, {method: 'POST', sendData: data}).catchError(dart.fn(e => {
      }));
    }
  }
  dart.setSignature(_AtomUsagePostHandler, {
    methods: () => ({sendPost: [async.Future, [core.String, core.Map$(core.String, dart.dynamic)]]})
  });
  function _postEncode(map) {
    return map.keys[dartx.map](dart.fn(key => {
      let value = `${map.get(key)}`;
      let result = core.Uri.encodeComponent(value);
      return `${key}=${result}`;
    }, dart.dynamic, [core.String]))[dartx.join]('&');
  }
  dart.fn(_postEncode, core.String, [core.Map$(core.String, dart.dynamic)]);
  // Exports:
  exports.UsageManager = UsageManager;
  exports.trackCommand = trackCommand;
});
//# sourceMappingURL=usage.js.map
