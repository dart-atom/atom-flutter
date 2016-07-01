(function() {
  'use strict';
  const dart_sdk = require('dart_sdk');
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging = Object.create(null);
  let ComparableOfLevel = () => (ComparableOfLevel = dart.constFn(core.Comparable$(logging.Level)))();
  let MapOfString$Logger = () => (MapOfString$Logger = dart.constFn(core.Map$(core.String, logging.Logger)))();
  let UnmodifiableMapViewOfString$Logger = () => (UnmodifiableMapViewOfString$Logger = dart.constFn(collection.UnmodifiableMapView$(core.String, logging.Logger)))();
  let StreamControllerOfLogRecord = () => (StreamControllerOfLogRecord = dart.constFn(async.StreamController$(logging.LogRecord)))();
  let VoidToLogger = () => (VoidToLogger = dart.constFn(dart.definiteFunctionType(logging.Logger, [])))();
  logging.hierarchicalLoggingEnabled = false;
  logging.Level = class Level extends core.Object {
    new(name, value) {
      this.name = name;
      this.value = value;
    }
    ['=='](other) {
      return logging.Level.is(other) && this.value == other.value;
    }
    ['<'](other) {
      return dart.notNull(this.value) < dart.notNull(other.value);
    }
    ['<='](other) {
      return dart.notNull(this.value) <= dart.notNull(other.value);
    }
    ['>'](other) {
      return dart.notNull(this.value) > dart.notNull(other.value);
    }
    ['>='](other) {
      return dart.notNull(this.value) >= dart.notNull(other.value);
    }
    compareTo(other) {
      return dart.notNull(this.value) - dart.notNull(other.value);
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  logging.Level[dart.implements] = () => [ComparableOfLevel()];
  dart.setSignature(logging.Level, {
    constructors: () => ({new: dart.definiteFunctionType(logging.Level, [core.String, core.int])}),
    methods: () => ({
      '<': dart.definiteFunctionType(core.bool, [logging.Level]),
      '<=': dart.definiteFunctionType(core.bool, [logging.Level]),
      '>': dart.definiteFunctionType(core.bool, [logging.Level]),
      '>=': dart.definiteFunctionType(core.bool, [logging.Level]),
      compareTo: dart.definiteFunctionType(core.int, [logging.Level])
    })
  });
  dart.defineExtensionMembers(logging.Level, ['compareTo']);
  dart.defineLazy(logging.Level, {
    get ALL() {
      return dart.const(new logging.Level('ALL', 0));
    },
    get OFF() {
      return dart.const(new logging.Level('OFF', 2000));
    },
    get FINEST() {
      return dart.const(new logging.Level('FINEST', 300));
    },
    get FINER() {
      return dart.const(new logging.Level('FINER', 400));
    },
    get FINE() {
      return dart.const(new logging.Level('FINE', 500));
    },
    get CONFIG() {
      return dart.const(new logging.Level('CONFIG', 700));
    },
    get INFO() {
      return dart.const(new logging.Level('INFO', 800));
    },
    get WARNING() {
      return dart.const(new logging.Level('WARNING', 900));
    },
    get SEVERE() {
      return dart.const(new logging.Level('SEVERE', 1000));
    },
    get SHOUT() {
      return dart.const(new logging.Level('SHOUT', 1200));
    },
    get LEVELS() {
      return dart.constList([logging.Level.ALL, logging.Level.FINEST, logging.Level.FINER, logging.Level.FINE, logging.Level.CONFIG, logging.Level.INFO, logging.Level.WARNING, logging.Level.SEVERE, logging.Level.SHOUT, logging.Level.OFF], logging.Level);
    }
  });
  logging.recordStackTraceAtLevel = logging.Level.OFF;
  logging._rootLevel = logging.Level.INFO;
  const _children = Symbol('_children');
  const _level = Symbol('_level');
  const _controller = Symbol('_controller');
  const _getStream = Symbol('_getStream');
  const _publish = Symbol('_publish');
  logging.Logger = class Logger extends core.Object {
    get fullName() {
      return this.parent == null || this.parent.name == '' ? this.name : dart.str`${this.parent.fullName}.${this.name}`;
    }
    static new(name) {
      return logging.Logger._loggers[dartx.putIfAbsent](name, dart.fn(() => logging.Logger._named(name), VoidToLogger()));
    }
    static detached(name) {
      return new logging.Logger._internal(name, null, MapOfString$Logger().new());
    }
    static _named(name) {
      if (dart.test(name[dartx.startsWith]('.'))) {
        dart.throw(new core.ArgumentError("name shouldn't start with a '.'"));
      }
      let dot = name[dartx.lastIndexOf]('.');
      let parent = null;
      let thisName = null;
      if (dot == -1) {
        if (name != '') parent = logging.Logger.new('');
        thisName = name;
      } else {
        parent = logging.Logger.new(name[dartx.substring](0, dot));
        thisName = name[dartx.substring](dart.notNull(dot) + 1);
      }
      return new logging.Logger._internal(thisName, parent, MapOfString$Logger().new());
    }
    _internal(name, parent, children) {
      this.name = name;
      this.parent = parent;
      this[_children] = children;
      this.children = new (UnmodifiableMapViewOfString$Logger())(children);
      this[_level] = null;
      this[_controller] = null;
      if (this.parent != null) this.parent[_children][dartx.set](this.name, this);
    }
    get level() {
      if (dart.test(logging.hierarchicalLoggingEnabled)) {
        if (this[_level] != null) return this[_level];
        if (this.parent != null) return this.parent.level;
      }
      return logging._rootLevel;
    }
    set level(value) {
      if (dart.test(logging.hierarchicalLoggingEnabled) && this.parent != null) {
        this[_level] = value;
      } else {
        if (this.parent != null) {
          dart.throw(new core.UnsupportedError('Please set "hierarchicalLoggingEnabled" to true if you want to ' + 'change the level on a non-root logger.'));
        }
        logging._rootLevel = value;
      }
    }
    get onRecord() {
      return this[_getStream]();
    }
    clearListeners() {
      if (dart.test(logging.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] != null) {
          this[_controller].close();
          this[_controller] = null;
        }
      } else {
        logging.Logger.root.clearListeners();
      }
    }
    isLoggable(value) {
      return value['>='](this.level);
    }
    log(logLevel, message, error, stackTrace, zone) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      let object = null;
      if (dart.test(this.isLoggable(logLevel))) {
        if (core.Function.is(message)) message = dart.dcall(message);
        if (!(typeof message == 'string')) {
          object = message;
          message = dart.toString(message);
        }
        if (stackTrace == null && dart.test(logLevel['>='](logging.recordStackTraceAtLevel))) {
          try {
            dart.throw(dart.str`autogenerated stack trace for ${logLevel} ${message}`);
          } catch (e) {
            let t = dart.stackTrace(e);
            stackTrace = t;
            if (error == null) error = e;
          }

        }
        if (zone == null) zone = async.Zone.current;
        let record = new logging.LogRecord(logLevel, core.String._check(message), this.fullName, error, stackTrace, zone, object);
        if (dart.test(logging.hierarchicalLoggingEnabled)) {
          let target = this;
          while (target != null) {
            target[_publish](record);
            target = target.parent;
          }
        } else {
          logging.Logger.root[_publish](record);
        }
      }
    }
    finest(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINEST, message, error, stackTrace);
    }
    finer(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINER, message, error, stackTrace);
    }
    fine(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINE, message, error, stackTrace);
    }
    config(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.CONFIG, message, error, stackTrace);
    }
    info(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.INFO, message, error, stackTrace);
    }
    warning(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.WARNING, message, error, stackTrace);
    }
    severe(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.SEVERE, message, error, stackTrace);
    }
    shout(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.SHOUT, message, error, stackTrace);
    }
    [_getStream]() {
      if (dart.test(logging.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] == null) {
          this[_controller] = StreamControllerOfLogRecord().broadcast({sync: true});
        }
        return this[_controller].stream;
      } else {
        return logging.Logger.root[_getStream]();
      }
    }
    [_publish](record) {
      if (this[_controller] != null) {
        this[_controller].add(record);
      }
    }
  };
  dart.defineNamedConstructor(logging.Logger, '_internal');
  dart.setSignature(logging.Logger, {
    constructors: () => ({
      new: dart.definiteFunctionType(logging.Logger, [core.String]),
      detached: dart.definiteFunctionType(logging.Logger, [core.String]),
      _named: dart.definiteFunctionType(logging.Logger, [core.String]),
      _internal: dart.definiteFunctionType(logging.Logger, [core.String, logging.Logger, core.Map$(core.String, logging.Logger)])
    }),
    methods: () => ({
      clearListeners: dart.definiteFunctionType(dart.void, []),
      isLoggable: dart.definiteFunctionType(core.bool, [logging.Level]),
      log: dart.definiteFunctionType(dart.void, [logging.Level, dart.dynamic], [core.Object, core.StackTrace, async.Zone]),
      finest: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      finer: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      fine: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      config: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      info: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      warning: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      severe: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      shout: dart.definiteFunctionType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
      [_getStream]: dart.definiteFunctionType(async.Stream$(logging.LogRecord), []),
      [_publish]: dart.definiteFunctionType(dart.void, [logging.LogRecord])
    })
  });
  dart.defineLazy(logging.Logger, {
    get root() {
      return logging.Logger.new('');
    },
    get _loggers() {
      return dart.map({}, core.String, logging.Logger);
    }
  });
  logging.LoggerHandler = dart.typedef('LoggerHandler', () => dart.functionType(dart.void, [dart.dynamic]));
  logging.LogRecord = class LogRecord extends core.Object {
    new(level, message, loggerName, error, stackTrace, zone, object) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      if (object === void 0) object = null;
      this.level = level;
      this.message = message;
      this.loggerName = loggerName;
      this.error = error;
      this.stackTrace = stackTrace;
      this.zone = zone;
      this.object = object;
      this.time = new core.DateTime.now();
      this.sequenceNumber = (() => {
        let x = logging.LogRecord._nextNumber;
        logging.LogRecord._nextNumber = dart.notNull(x) + 1;
        return x;
      })();
    }
    toString() {
      return dart.str`[${this.level.name}] ${this.loggerName}: ${this.message}`;
    }
  };
  dart.setSignature(logging.LogRecord, {
    constructors: () => ({new: dart.definiteFunctionType(logging.LogRecord, [logging.Level, core.String, core.String], [core.Object, core.StackTrace, async.Zone, core.Object])})
  });
  logging.LogRecord._nextNumber = 0;
  // Exports:
  exports.logging = logging;
})();

//# sourceMappingURL=logging.js.map
