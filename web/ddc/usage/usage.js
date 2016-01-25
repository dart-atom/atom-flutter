dart_library.library('usage/usage', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/async'
], /* Lazy imports */[
], function(exports, dart, core, async) {
  'use strict';
  let dartx = dart.dartx;
  dart.defineLazyProperties(exports, {
    get _pathRegex() {
      return core.RegExp.new('file:/\\S+/(\\S+\\.dart)');
    }
  });
  class Analytics extends core.Object {}
  const _startMillis = Symbol('_startMillis');
  const _endMillis = Symbol('_endMillis');
  class AnalyticsTimer extends core.Object {
    AnalyticsTimer(analytics, variableName, opts) {
      let category = opts && 'category' in opts ? opts.category : null;
      let label = opts && 'label' in opts ? opts.label : null;
      this.analytics = analytics;
      this.variableName = variableName;
      this.category = category;
      this.label = label;
      this[_startMillis] = null;
      this[_endMillis] = null;
      this[_startMillis] = new core.DateTime.now().millisecondsSinceEpoch;
    }
    get currentElapsedMillis() {
      if (this[_endMillis] == null) {
        return dart.notNull(new core.DateTime.now().millisecondsSinceEpoch) - dart.notNull(this[_startMillis]);
      } else {
        return dart.notNull(this[_endMillis]) - dart.notNull(this[_startMillis]);
      }
    }
    finish() {
      if (this[_endMillis] != null) return async.Future.value();
      this[_endMillis] = new core.DateTime.now().millisecondsSinceEpoch;
      return this.analytics.sendTiming(this.variableName, this.currentElapsedMillis, {category: this.category, label: this.label});
    }
  }
  dart.setSignature(AnalyticsTimer, {
    constructors: () => ({AnalyticsTimer: [AnalyticsTimer, [Analytics, core.String], {category: core.String, label: core.String}]}),
    methods: () => ({finish: [async.Future, []]})
  });
  const _log = Symbol('_log');
  class AnalyticsMock extends core.Object {
    get trackingId() {
      return 'UA-0';
    }
    AnalyticsMock(logCalls) {
      if (logCalls === void 0) logCalls = false;
      this.logCalls = logCalls;
      this.optIn = false;
      this.hasSetOptIn = true;
    }
    sendScreenView(viewName) {
      return this[_log]('screenView', dart.map({viewName: viewName}));
    }
    sendEvent(category, action, opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let value = opts && 'value' in opts ? opts.value : null;
      return this[_log]('event', dart.map({category: category, action: action, label: label, value: value}));
    }
    sendSocial(network, action, target) {
      return this[_log]('social', dart.map({network: network, action: action, target: target}));
    }
    sendTiming(variableName, time, opts) {
      let category = opts && 'category' in opts ? opts.category : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return this[_log]('timing', dart.map({variableName: variableName, time: time, category: category, label: label}));
    }
    startTimer(variableName, opts) {
      let category = opts && 'category' in opts ? opts.category : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new AnalyticsTimer(this, variableName, {category: category, label: label});
    }
    sendException(description, opts) {
      let fatal = opts && 'fatal' in opts ? opts.fatal : null;
      return this[_log]('exception', dart.map({description: description, fatal: fatal}));
    }
    setSessionValue(param, value) {}
    waitForLastPing(opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      return async.Future.value();
    }
    [_log](hitType, m) {
      if (dart.notNull(this.logCalls)) {
        core.print(`analytics: ${hitType} ${m}`);
      }
      return async.Future.value();
    }
  }
  AnalyticsMock[dart.implements] = () => [Analytics];
  dart.setSignature(AnalyticsMock, {
    constructors: () => ({AnalyticsMock: [AnalyticsMock, [], [core.bool]]}),
    methods: () => ({
      sendScreenView: [async.Future, [core.String]],
      sendEvent: [async.Future, [core.String, core.String], {label: core.String, value: core.int}],
      sendSocial: [async.Future, [core.String, core.String, core.String]],
      sendTiming: [async.Future, [core.String, core.int], {category: core.String, label: core.String}],
      startTimer: [AnalyticsTimer, [core.String], {category: core.String, label: core.String}],
      sendException: [async.Future, [core.String], {fatal: core.bool}],
      setSessionValue: [dart.void, [core.String, dart.dynamic]],
      waitForLastPing: [async.Future, [], {timeout: core.Duration}],
      [_log]: [async.Future, [core.String, core.Map]]
    })
  });
  function sanitizeStacktrace(st, opts) {
    let shorten = opts && 'shorten' in opts ? opts.shorten : true;
    let str = `${st}`;
    let iter = exports._pathRegex.allMatches(str);
    iter = iter[dartx.toList]()[dartx.reversed];
    for (let match of iter) {
      let replacement = match.group(1);
      str = dart.notNull(str[dartx.substring](0, match.start)) + dart.notNull(replacement) + dart.notNull(str[dartx.substring](match.end));
    }
    if (dart.notNull(shorten)) {
      str = str[dartx.replaceAll]('(package:', '(')[dartx.replaceAll]('(dart:', '(')[dartx.replaceAll](core.RegExp.new('\\s+'), ' ');
    }
    return str;
  }
  dart.fn(sanitizeStacktrace, core.String, [dart.dynamic], {shorten: core.bool});
  // Exports:
  exports.Analytics = Analytics;
  exports.AnalyticsTimer = AnalyticsTimer;
  exports.AnalyticsMock = AnalyticsMock;
  exports.sanitizeStacktrace = sanitizeStacktrace;
});
//# sourceMappingURL=usage.js.map
