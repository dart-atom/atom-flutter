'use strict';
let dart = require("dart/_runtime");
let core = require("dart/core");
let math = require("dart/math");
let async = require("dart/async");
let usage = require("usage/usage");
let uuid = require("usage/src/uuid");
let dartx = dart.dartx;
exports._MAX_EXCEPTION_LENGTH = 100;
function postEncode(map) {
  return map[dartx.keys][dartx.map](dart.fn(key => {
    let value = `${map[dartx.get](key)}`;
    return `${key}=${core.Uri.encodeComponent(value)}`;
  }, core.String, [core.String]))[dartx.join]('&');
}
dart.fn(postEncode, core.String, [core.Map$(core.String, dart.dynamic)]);
const _lastReplenish = Symbol('_lastReplenish');
const _checkReplenish = Symbol('_checkReplenish');
class ThrottlingBucket extends core.Object {
  ThrottlingBucket(startingCount) {
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
      this.drops = math.min(dart.notNull(this.drops) + inc, this.startingCount);
      this[_lastReplenish] = dart.notNull(this[_lastReplenish]) + 1000 * inc;
    }
  }
}
dart.setSignature(ThrottlingBucket, {
  constructors: () => ({ThrottlingBucket: [ThrottlingBucket, [core.int]]}),
  methods: () => ({
    removeDrop: [core.bool, []],
    [_checkReplenish]: [dart.void, []]
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
class AnalyticsImpl extends usage.Analytics {
  AnalyticsImpl(trackingId, properties, postHandler, opts) {
    let applicationName = opts && 'applicationName' in opts ? opts.applicationName : null;
    let applicationVersion = opts && 'applicationVersion' in opts ? opts.applicationVersion : null;
    let analyticsUrl = opts && 'analyticsUrl' in opts ? opts.analyticsUrl : null;
    this[_bucket] = new ThrottlingBucket(20);
    this[_variableMap] = dart.map();
    this[_futures] = dart.list([], async.Future);
    this.trackingId = trackingId;
    this.properties = properties;
    this.postHandler = postHandler;
    this[_url] = null;
    dart.assert(this.trackingId != null);
    if (applicationName != null) this.setSessionValue('an', applicationName);
    if (applicationVersion != null) this.setSessionValue('av', applicationVersion);
    this[_url] = (analyticsUrl != null ? analyticsUrl : AnalyticsImpl._defaultAnalyticsUrl);
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
    if (!dart.notNull(this.optIn)) return async.Future.value();
    let args = dart.map({ec: category, ea: action});
    if (label != null) args[dartx.set]('el', label);
    if (value != null) args[dartx.set]('ev', value);
    return this[_sendPayload]('event', args);
  }
  sendSocial(network, action, target) {
    if (!dart.notNull(this.optIn)) return async.Future.value();
    let args = dart.map({sn: network, sa: action, st: target});
    return this[_sendPayload]('social', args);
  }
  sendTiming(variableName, time, opts) {
    let category = opts && 'category' in opts ? opts.category : null;
    let label = opts && 'label' in opts ? opts.label : null;
    if (!dart.notNull(this.optIn)) return async.Future.value();
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
    if (!dart.notNull(this.optIn)) return async.Future.value();
    if (dart.notNull(description[dartx.contains]('file:/'))) {
      description = description[dartx.substring](0, description[dartx.indexOf]('file:/'));
    }
    if (description != null && dart.notNull(description[dartx.length]) > dart.notNull(exports._MAX_EXCEPTION_LENGTH)) {
      description = description[dartx.substring](0, exports._MAX_EXCEPTION_LENGTH);
    }
    let args = dart.map({exd: description});
    if (fatal != null && dart.notNull(fatal)) args[dartx.set]('exf', '1');
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
    let f = async.Future.wait(this[_futures]).catchError(dart.fn(e => null));
    if (timeout != null) {
      f = f.timeout(timeout, {onTimeout: dart.fn(() => null)});
    }
    return f;
  }
  get [_clientId]() {
    return dart.as(this.properties.get('clientId'), core.String);
  }
  [_initClientId]() {
    if (this[_clientId] == null) {
      this.properties.set('clientId', new uuid.Uuid().generateV4());
    }
  }
  [_sendPayload](hitType, args) {
    if (dart.notNull(this[_bucket].removeDrop())) {
      this[_initClientId]();
      this[_variableMap][dartx.forEach](dart.fn((key, value) => {
        args[dartx.set](key, value);
      }, dart.void, [core.String, dart.dynamic]));
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
    return f.whenComplete(dart.fn(() => this[_futures][dartx.remove](f), core.bool, []));
  }
}
dart.setSignature(AnalyticsImpl, {
  constructors: () => ({AnalyticsImpl: [AnalyticsImpl, [core.String, PersistentProperties, PostHandler], {applicationName: core.String, applicationVersion: core.String, analyticsUrl: core.String}]}),
  methods: () => ({
    sendScreenView: [async.Future, [core.String]],
    sendEvent: [async.Future, [core.String, core.String], {label: core.String, value: core.int}],
    sendSocial: [async.Future, [core.String, core.String, core.String]],
    sendTiming: [async.Future, [core.String, core.int], {category: core.String, label: core.String}],
    startTimer: [usage.AnalyticsTimer, [core.String], {category: core.String, label: core.String}],
    sendException: [async.Future, [core.String], {fatal: core.bool}],
    setSessionValue: [dart.void, [core.String, dart.dynamic]],
    waitForLastPing: [async.Future, [], {timeout: core.Duration}],
    [_initClientId]: [dart.void, []],
    [_sendPayload]: [async.Future, [core.String, core.Map$(core.String, dart.dynamic)]],
    [_recordFuture]: [async.Future, [async.Future]]
  })
});
AnalyticsImpl._defaultAnalyticsUrl = 'https://www.google-analytics.com/collect';
class PersistentProperties extends core.Object {
  PersistentProperties(name) {
    this.name = name;
  }
}
dart.setSignature(PersistentProperties, {
  constructors: () => ({PersistentProperties: [PersistentProperties, [core.String]]})
});
class PostHandler extends core.Object {}
// Exports:
exports.postEncode = postEncode;
exports.ThrottlingBucket = ThrottlingBucket;
exports.AnalyticsImpl = AnalyticsImpl;
exports.PersistentProperties = PersistentProperties;
exports.PostHandler = PostHandler;
//# sourceMappingURL=usage_impl.js.map
