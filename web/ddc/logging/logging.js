dart_library.library('logging/logging', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/collection',
  'dart/async'
], /* Lazy imports */[
], function(exports, dart, core, collection, async) {
  'use strict';
  let dartx = dart.dartx;
  exports.hierarchicalLoggingEnabled = false;
  class Level extends core.Object {
    Level(name, value) {
      this.name = name;
      this.value = value;
    }
    ['=='](other) {
      return dart.is(other, Level) && this.value == other.value;
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
  }
  Level[dart.implements] = () => [core.Comparable$(Level)];
  dart.setSignature(Level, {
    constructors: () => ({Level: [Level, [core.String, core.int]]}),
    methods: () => ({
      '<': [core.bool, [Level]],
      '<=': [core.bool, [Level]],
      '>': [core.bool, [Level]],
      '>=': [core.bool, [Level]],
      compareTo: [core.int, [Level]]
    })
  });
  dart.defineExtensionMembers(Level, ['compareTo']);
  dart.defineLazyProperties(Level, {
    get ALL() {
      return dart.const(new Level('ALL', 0));
    },
    get OFF() {
      return dart.const(new Level('OFF', 2000));
    },
    get FINEST() {
      return dart.const(new Level('FINEST', 300));
    },
    get FINER() {
      return dart.const(new Level('FINER', 400));
    },
    get FINE() {
      return dart.const(new Level('FINE', 500));
    },
    get CONFIG() {
      return dart.const(new Level('CONFIG', 700));
    },
    get INFO() {
      return dart.const(new Level('INFO', 800));
    },
    get WARNING() {
      return dart.const(new Level('WARNING', 900));
    },
    get SEVERE() {
      return dart.const(new Level('SEVERE', 1000));
    },
    get SHOUT() {
      return dart.const(new Level('SHOUT', 1200));
    },
    get LEVELS() {
      return dart.const(dart.list([Level.ALL, Level.FINEST, Level.FINER, Level.FINE, Level.CONFIG, Level.INFO, Level.WARNING, Level.SEVERE, Level.SHOUT, Level.OFF], Level));
    }
  });
  exports.recordStackTraceAtLevel = Level.OFF;
  exports._rootLevel = Level.INFO;
  const _children = Symbol('_children');
  const _level = Symbol('_level');
  const _controller = Symbol('_controller');
  const _getStream = Symbol('_getStream');
  const _publish = Symbol('_publish');
  class Logger extends core.Object {
    get fullName() {
      return this.parent == null || this.parent.name == '' ? this.name : `${this.parent.fullName}.${this.name}`;
    }
    static new(name) {
      return Logger._loggers.putIfAbsent(name, dart.fn(() => Logger._named(name), Logger, []));
    }
    static detached(name) {
      return new Logger._internal(name, null, core.Map$(core.String, Logger).new());
    }
    static _named(name) {
      if (dart.notNull(name[dartx.startsWith]('.'))) {
        dart.throw(new core.ArgumentError("name shouldn't start with a '.'"));
      }
      let dot = name[dartx.lastIndexOf]('.');
      let parent = null;
      let thisName = null;
      if (dot == -1) {
        if (name != '') parent = Logger.new('');
        thisName = name;
      } else {
        parent = Logger.new(name[dartx.substring](0, dot));
        thisName = name[dartx.substring](dart.notNull(dot) + 1);
      }
      return new Logger._internal(thisName, parent, core.Map$(core.String, Logger).new());
    }
    _internal(name, parent, children) {
      this.name = name;
      this.parent = parent;
      this[_children] = children;
      this.children = new (collection.UnmodifiableMapView$(core.String, Logger))(children);
      this[_level] = null;
      this[_controller] = null;
      if (this.parent != null) this.parent[_children].set(this.name, this);
    }
    get level() {
      if (dart.notNull(exports.hierarchicalLoggingEnabled)) {
        if (this[_level] != null) return this[_level];
        if (this.parent != null) return this.parent.level;
      }
      return exports._rootLevel;
    }
    set level(value) {
      if (dart.notNull(exports.hierarchicalLoggingEnabled) && this.parent != null) {
        this[_level] = value;
      } else {
        if (this.parent != null) {
          dart.throw(new core.UnsupportedError('Please set "hierarchicalLoggingEnabled" to true if you want to ' + 'change the level on a non-root logger.'));
        }
        exports._rootLevel = value;
      }
    }
    get onRecord() {
      return this[_getStream]();
    }
    clearListeners() {
      if (dart.notNull(exports.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] != null) {
          this[_controller].close();
          this[_controller] = null;
        }
      } else {
        Logger.root.clearListeners();
      }
    }
    isLoggable(value) {
      return value['>='](this.level);
    }
    log(logLevel, message, error, stackTrace, zone) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      if (dart.notNull(this.isLoggable(logLevel))) {
        if (dart.is(message, core.Function)) message = dart.dcall(message);
        if (!(typeof message == 'string')) message = dart.toString(message);
        if (stackTrace == null && dart.notNull(logLevel['>='](exports.recordStackTraceAtLevel))) {
          try {
            dart.throw(`autogenerated stack trace for ${logLevel} ${message}`);
          } catch (e) {
            let t = dart.stackTrace(e);
            stackTrace = t;
            if (error == null) error = e;
          }

        }
        if (zone == null) zone = async.Zone.current;
        let record = new LogRecord(logLevel, dart.as(message, core.String), this.fullName, error, stackTrace, zone);
        if (dart.notNull(exports.hierarchicalLoggingEnabled)) {
          let target = this;
          while (target != null) {
            target[_publish](record);
            target = target.parent;
          }
        } else {
          Logger.root[_publish](record);
        }
      }
    }
    finest(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.FINEST, message, error, stackTrace);
    }
    finer(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.FINER, message, error, stackTrace);
    }
    fine(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.FINE, message, error, stackTrace);
    }
    config(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.CONFIG, message, error, stackTrace);
    }
    info(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.INFO, message, error, stackTrace);
    }
    warning(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.WARNING, message, error, stackTrace);
    }
    severe(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.SEVERE, message, error, stackTrace);
    }
    shout(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(Level.SHOUT, message, error, stackTrace);
    }
    [_getStream]() {
      if (dart.notNull(exports.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] == null) {
          this[_controller] = async.StreamController$(LogRecord).broadcast({sync: true});
        }
        return this[_controller].stream;
      } else {
        return Logger.root[_getStream]();
      }
    }
    [_publish](record) {
      if (this[_controller] != null) {
        this[_controller].add(record);
      }
    }
  }
  dart.defineNamedConstructor(Logger, '_internal');
  dart.setSignature(Logger, {
    constructors: () => ({
      new: [Logger, [core.String]],
      detached: [Logger, [core.String]],
      _named: [Logger, [core.String]],
      _internal: [Logger, [core.String, Logger, core.Map$(core.String, Logger)]]
    }),
    methods: () => ({
      clearListeners: [dart.void, []],
      isLoggable: [core.bool, [Level]],
      log: [dart.void, [Level, dart.dynamic], [core.Object, core.StackTrace, async.Zone]],
      finest: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      finer: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      fine: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      config: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      info: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      warning: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      severe: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      shout: [dart.void, [dart.dynamic], [core.Object, core.StackTrace]],
      [_getStream]: [async.Stream$(LogRecord), []],
      [_publish]: [dart.void, [LogRecord]]
    })
  });
  dart.defineLazyProperties(Logger, {
    get root() {
      return Logger.new('');
    },
    get _loggers() {
      return dart.map({}, core.String, Logger);
    }
  });
  const LoggerHandler = dart.typedef('LoggerHandler', () => dart.functionType(dart.void, [dart.dynamic]));
  class LogRecord extends core.Object {
    LogRecord(level, message, loggerName, error, stackTrace, zone) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      this.level = level;
      this.message = message;
      this.loggerName = loggerName;
      this.error = error;
      this.stackTrace = stackTrace;
      this.zone = zone;
      this.time = new core.DateTime.now();
      this.sequenceNumber = (() => {
        let o = LogRecord, x = o._nextNumber;
        o._nextNumber = dart.notNull(x) + 1;
        return x;
      })();
    }
    toString() {
      return `[${this.level.name}] ${this.loggerName}: ${this.message}`;
    }
  }
  dart.setSignature(LogRecord, {
    constructors: () => ({LogRecord: [LogRecord, [Level, core.String, core.String], [core.Object, core.StackTrace, async.Zone]]})
  });
  LogRecord._nextNumber = 0;
  // Exports:
  exports.Level = Level;
  exports.Logger = Logger;
  exports.LoggerHandler = LoggerHandler;
  exports.LogRecord = LogRecord;
});
//# sourceMappingURL=logging.js.map
