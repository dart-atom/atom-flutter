(function() {
  'use strict';
  const dart_sdk = require('dart_sdk');
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const usage = Object.create(null);
  const src__uuid = Object.create(null);
  const src__usage_impl = Object.create(null);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let dynamic__ToString = () => (dynamic__ToString = dart.constFn(dart.definiteFunctionType(core.String, [dart.dynamic], {shorten: core.bool})))();
  let StringToString = () => (StringToString = dart.constFn(dart.definiteFunctionType(core.String, [core.String])))();
  let MapOfString$dynamicToString = () => (MapOfString$dynamicToString = dart.constFn(dart.definiteFunctionType(core.String, [MapOfString$dynamic()])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String, dart.dynamic])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.definiteFunctionType(core.bool, [])))();
  dart.defineLazy(usage, {
    get _pathRegex() {
      return core.RegExp.new('file:/\\S+/(\\S+\\.dart)');
    }
  });
  usage.Analytics = class Analytics extends core.Object {};
  const _startMillis = Symbol('_startMillis');
  const _endMillis = Symbol('_endMillis');
  usage.AnalyticsTimer = class AnalyticsTimer extends core.Object {
    new(analytics, variableName, opts) {
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
  };
  dart.setSignature(usage.AnalyticsTimer, {
    constructors: () => ({new: dart.definiteFunctionType(usage.AnalyticsTimer, [usage.Analytics, core.String], {category: core.String, label: core.String})}),
    methods: () => ({finish: dart.definiteFunctionType(async.Future, [])})
  });
  const _log = Symbol('_log');
  usage.AnalyticsMock = class AnalyticsMock extends core.Object {
    get trackingId() {
      return 'UA-0';
    }
    new(logCalls) {
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
      return new usage.AnalyticsTimer(this, variableName, {category: category, label: label});
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
      if (dart.test(this.logCalls)) {
        core.print(dart.str`analytics: ${hitType} ${m}`);
      }
      return async.Future.value();
    }
  };
  usage.AnalyticsMock[dart.implements] = () => [usage.Analytics];
  dart.setSignature(usage.AnalyticsMock, {
    constructors: () => ({new: dart.definiteFunctionType(usage.AnalyticsMock, [], [core.bool])}),
    methods: () => ({
      sendScreenView: dart.definiteFunctionType(async.Future, [core.String]),
      sendEvent: dart.definiteFunctionType(async.Future, [core.String, core.String], {label: core.String, value: core.int}),
      sendSocial: dart.definiteFunctionType(async.Future, [core.String, core.String, core.String]),
      sendTiming: dart.definiteFunctionType(async.Future, [core.String, core.int], {category: core.String, label: core.String}),
      startTimer: dart.definiteFunctionType(usage.AnalyticsTimer, [core.String], {category: core.String, label: core.String}),
      sendException: dart.definiteFunctionType(async.Future, [core.String], {fatal: core.bool}),
      setSessionValue: dart.definiteFunctionType(dart.void, [core.String, dart.dynamic]),
      waitForLastPing: dart.definiteFunctionType(async.Future, [], {timeout: core.Duration}),
      [_log]: dart.definiteFunctionType(async.Future, [core.String, core.Map])
    })
  });
  usage.sanitizeStacktrace = function(st, opts) {
    let shorten = opts && 'shorten' in opts ? opts.shorten : true;
    let str = dart.str`${st}`;
    let iter = usage._pathRegex.allMatches(str);
    iter = iter[dartx.toList]()[dartx.reversed];
    for (let match of iter) {
      let replacement = match.group(1);
      str = dart.notNull(str[dartx.substring](0, match.start)) + dart.notNull(replacement) + dart.notNull(str[dartx.substring](match.end));
    }
    if (dart.test(shorten)) {
      str = str[dartx.replaceAll]('(package:', '(')[dartx.replaceAll]('(dart:', '(')[dartx.replaceAll](core.RegExp.new('\\s+'), ' ');
    }
    return str;
  };
  dart.fn(usage.sanitizeStacktrace, dynamic__ToString());
  const _random = Symbol('_random');
  const _bitsDigits = Symbol('_bitsDigits');
  const _printDigits = Symbol('_printDigits');
  const _generateBits = Symbol('_generateBits');
  src__uuid.Uuid = class Uuid extends core.Object {
    new() {
      this[_random] = math.Random.new();
    }
    generateV4() {
      let special = 8 + dart.notNull(this[_random].nextInt(4));
      return dart.str`${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}-` + dart.str`${this[_bitsDigits](16, 4)}-` + dart.str`4${this[_bitsDigits](12, 3)}-` + dart.str`${this[_printDigits](special, 1)}${this[_bitsDigits](12, 3)}-` + dart.str`${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}${this[_bitsDigits](16, 4)}`;
    }
    [_bitsDigits](bitCount, digitCount) {
      return this[_printDigits](this[_generateBits](bitCount), digitCount);
    }
    [_generateBits](bitCount) {
      return this[_random].nextInt((1)[dartx['<<']](bitCount));
    }
    [_printDigits](value, count) {
      return value[dartx.toRadixString](16)[dartx.padLeft](count, '0');
    }
  };
  dart.setSignature(src__uuid.Uuid, {
    methods: () => ({
      generateV4: dart.definiteFunctionType(core.String, []),
      [_bitsDigits]: dart.definiteFunctionType(core.String, [core.int, core.int]),
      [_generateBits]: dart.definiteFunctionType(core.int, [core.int]),
      [_printDigits]: dart.definiteFunctionType(core.String, [core.int, core.int])
    })
  });
  src__usage_impl._MAX_EXCEPTION_LENGTH = 100;
  src__usage_impl.postEncode = function(map) {
    return map[dartx.keys][dartx.map](core.String)(dart.fn(key => {
      let value = dart.str`${map[dartx.get](key)}`;
      return dart.str`${key}=${core.Uri.encodeComponent(value)}`;
    }, StringToString()))[dartx.join]('&');
  };
  dart.fn(src__usage_impl.postEncode, MapOfString$dynamicToString());
  const _lastReplenish = Symbol('_lastReplenish');
  const _checkReplenish = Symbol('_checkReplenish');
  src__usage_impl.ThrottlingBucket = class ThrottlingBucket extends core.Object {
    new(startingCount) {
      this.startingCount = startingCount;
      this.drops = null;
      this[_lastReplenish] = null;
      this.drops = this.startingCount;
      this[_lastReplenish] = new core.DateTime.now().millisecondsSinceEpoch;
    }
    removeDrop() {
      this[_checkReplenish]();
      if (dart.notNull(this.drops) <= 0) {
        return false;
      } else {
        this.drops = dart.notNull(this.drops) - 1;
        return true;
      }
    }
    [_checkReplenish]() {
      let now = new core.DateTime.now().millisecondsSinceEpoch;
      if (dart.notNull(this[_lastReplenish]) + 1000 >= dart.notNull(now)) {
        let inc = ((dart.notNull(now) - dart.notNull(this[_lastReplenish])) / 1000)[dartx.truncate]();
        this.drops = math.min(core.int)(dart.notNull(this.drops) + inc, this.startingCount);
        this[_lastReplenish] = dart.notNull(this[_lastReplenish]) + 1000 * inc;
      }
    }
  };
  dart.setSignature(src__usage_impl.ThrottlingBucket, {
    constructors: () => ({new: dart.definiteFunctionType(src__usage_impl.ThrottlingBucket, [core.int])}),
    methods: () => ({
      removeDrop: dart.definiteFunctionType(core.bool, []),
      [_checkReplenish]: dart.definiteFunctionType(dart.void, [])
    })
  });
  const _bucket = Symbol('_bucket');
  const _variableMap = Symbol('_variableMap');
  const _futures = Symbol('_futures');
  const _url = Symbol('_url');
  const _sendPayload = Symbol('_sendPayload');
  const _clientId = Symbol('_clientId');
  const _initClientId = Symbol('_initClientId');
  const _recordFuture = Symbol('_recordFuture');
  src__usage_impl.AnalyticsImpl = class AnalyticsImpl extends usage.Analytics {
    new(trackingId, properties, postHandler, opts) {
      let applicationName = opts && 'applicationName' in opts ? opts.applicationName : null;
      let applicationVersion = opts && 'applicationVersion' in opts ? opts.applicationVersion : null;
      let analyticsUrl = opts && 'analyticsUrl' in opts ? opts.analyticsUrl : null;
      this[_bucket] = new src__usage_impl.ThrottlingBucket(20);
      this[_variableMap] = dart.map();
      this[_futures] = JSArrayOfFuture().of([]);
      this.trackingId = trackingId;
      this.properties = properties;
      this.postHandler = postHandler;
      this[_url] = null;
      dart.assert(this.trackingId != null);
      if (applicationName != null) this.setSessionValue('an', applicationName);
      if (applicationVersion != null) this.setSessionValue('av', applicationVersion);
      this[_url] = (analyticsUrl != null ? analyticsUrl : src__usage_impl.AnalyticsImpl._defaultAnalyticsUrl);
    }
    get optIn() {
      return dart.equals(this.properties.get('optIn'), true);
    }
    set optIn(value) {
      this.properties.set('optIn', value);
    }
    get hasSetOptIn() {
      return this.properties.get('optIn') != null;
    }
    sendScreenView(viewName) {
      let args = dart.map({cd: viewName});
      return this[_sendPayload]('screenview', args);
    }
    sendEvent(category, action, opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let value = opts && 'value' in opts ? opts.value : null;
      if (!dart.test(this.optIn)) return async.Future.value();
      let args = dart.map({ec: category, ea: action});
      if (label != null) args[dartx.set]('el', label);
      if (value != null) args[dartx.set]('ev', value);
      return this[_sendPayload]('event', args);
    }
    sendSocial(network, action, target) {
      if (!dart.test(this.optIn)) return async.Future.value();
      let args = dart.map({sn: network, sa: action, st: target});
      return this[_sendPayload]('social', args);
    }
    sendTiming(variableName, time, opts) {
      let category = opts && 'category' in opts ? opts.category : null;
      let label = opts && 'label' in opts ? opts.label : null;
      if (!dart.test(this.optIn)) return async.Future.value();
      let args = dart.map({utv: variableName, utt: time});
      if (label != null) args[dartx.set]('utl', label);
      if (category != null) args[dartx.set]('utc', category);
      return this[_sendPayload]('timing', args);
    }
    startTimer(variableName, opts) {
      let category = opts && 'category' in opts ? opts.category : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new usage.AnalyticsTimer(this, variableName, {category: category, label: label});
    }
    sendException(description, opts) {
      let fatal = opts && 'fatal' in opts ? opts.fatal : null;
      if (!dart.test(this.optIn)) return async.Future.value();
      if (dart.test(description[dartx.contains]('file:/'))) {
        description = description[dartx.substring](0, description[dartx.indexOf]('file:/'));
      }
      if (description != null && dart.notNull(description[dartx.length]) > dart.notNull(src__usage_impl._MAX_EXCEPTION_LENGTH)) {
        description = description[dartx.substring](0, src__usage_impl._MAX_EXCEPTION_LENGTH);
      }
      let args = dart.map({exd: description});
      if (fatal != null && dart.test(fatal)) args[dartx.set]('exf', '1');
      return this[_sendPayload]('exception', args);
    }
    setSessionValue(param, value) {
      if (value == null) {
        this[_variableMap][dartx.remove](param);
      } else {
        this[_variableMap][dartx.set](param, value);
      }
    }
    waitForLastPing(opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let f = async.Future.wait(dart.dynamic)(this[_futures]).catchError(dart.fn(e => null, dynamicTodynamic()));
      if (timeout != null) {
        f = f.timeout(timeout, {onTimeout: dart.fn(() => null, VoidTodynamic())});
      }
      return f;
    }
    get [_clientId]() {
      return core.String._check(this.properties.get('clientId'));
    }
    [_initClientId]() {
      if (this[_clientId] == null) {
        this.properties.set('clientId', new src__uuid.Uuid().generateV4());
      }
    }
    [_sendPayload](hitType, args) {
      if (dart.test(this[_bucket].removeDrop())) {
        this[_initClientId]();
        this[_variableMap][dartx.forEach](dart.fn((key, value) => {
          args[dartx.set](key, value);
        }, StringAnddynamicTovoid()));
        args[dartx.set]('v', '1');
        args[dartx.set]('tid', this.trackingId);
        args[dartx.set]('cid', this[_clientId]);
        args[dartx.set]('t', hitType);
        return this[_recordFuture](this.postHandler.sendPost(this[_url], args));
      } else {
        return async.Future.value();
      }
    }
    [_recordFuture](f) {
      this[_futures][dartx.add](f);
      return f.whenComplete(dart.fn(() => this[_futures][dartx.remove](f), VoidTobool()));
    }
  };
  dart.setSignature(src__usage_impl.AnalyticsImpl, {
    constructors: () => ({new: dart.definiteFunctionType(src__usage_impl.AnalyticsImpl, [core.String, src__usage_impl.PersistentProperties, src__usage_impl.PostHandler], {applicationName: core.String, applicationVersion: core.String, analyticsUrl: core.String})}),
    methods: () => ({
      sendScreenView: dart.definiteFunctionType(async.Future, [core.String]),
      sendEvent: dart.definiteFunctionType(async.Future, [core.String, core.String], {label: core.String, value: core.int}),
      sendSocial: dart.definiteFunctionType(async.Future, [core.String, core.String, core.String]),
      sendTiming: dart.definiteFunctionType(async.Future, [core.String, core.int], {category: core.String, label: core.String}),
      startTimer: dart.definiteFunctionType(usage.AnalyticsTimer, [core.String], {category: core.String, label: core.String}),
      sendException: dart.definiteFunctionType(async.Future, [core.String], {fatal: core.bool}),
      setSessionValue: dart.definiteFunctionType(dart.void, [core.String, dart.dynamic]),
      waitForLastPing: dart.definiteFunctionType(async.Future, [], {timeout: core.Duration}),
      [_initClientId]: dart.definiteFunctionType(dart.void, []),
      [_sendPayload]: dart.definiteFunctionType(async.Future, [core.String, core.Map$(core.String, dart.dynamic)]),
      [_recordFuture]: dart.definiteFunctionType(async.Future, [async.Future])
    })
  });
  src__usage_impl.AnalyticsImpl._defaultAnalyticsUrl = 'https://www.google-analytics.com/collect';
  src__usage_impl.PersistentProperties = class PersistentProperties extends core.Object {
    new(name) {
      this.name = name;
    }
  };
  dart.setSignature(src__usage_impl.PersistentProperties, {
    constructors: () => ({new: dart.definiteFunctionType(src__usage_impl.PersistentProperties, [core.String])})
  });
  src__usage_impl.PostHandler = class PostHandler extends core.Object {};
  // Exports:
  exports.usage = usage;
  exports.src__uuid = src__uuid;
  exports.src__usage_impl = src__usage_impl;
})();

//# sourceMappingURL=usage.js.map
