dart_library.library('atom/utils/disposable', null, /* Imports */[
  'dart/_runtime',
  'logging/logging',
  'dart/core',
  'dart/async'
], /* Lazy imports */[
], function(exports, dart, logging, core, async) {
  'use strict';
  let dartx = dart.dartx;
  dart.defineLazyProperties(exports, {
    get _logger() {
      return logging.Logger.new('disposable');
    }
  });
  class Disposable extends core.Object {}
  const _disposables = Symbol('_disposables');
  class Disposables extends core.Object {
    Disposables(opts) {
      let catchExceptions = opts && 'catchExceptions' in opts ? opts.catchExceptions : true;
      this[_disposables] = dart.list([], Disposable);
      this.catchExceptions = catchExceptions;
    }
    add(disposable) {
      return this[_disposables][dartx.add](disposable);
    }
    addAll(list) {
      return this[_disposables][dartx.addAll](list);
    }
    remove(disposable) {
      return this[_disposables][dartx.remove](disposable);
    }
    dispose() {
      for (let disposable of this[_disposables]) {
        if (dart.notNull(this.catchExceptions)) {
          try {
            disposable.dispose();
          } catch (e) {
            let st = dart.stackTrace(e);
            exports._logger.severe('exception during dispose', e, st);
          }

        } else {
          disposable.dispose();
        }
      }
      this[_disposables][dartx.clear]();
    }
  }
  Disposables[dart.implements] = () => [Disposable];
  dart.setSignature(Disposables, {
    constructors: () => ({Disposables: [Disposables, [], {catchExceptions: core.bool}]}),
    methods: () => ({
      add: [dart.void, [Disposable]],
      addAll: [dart.void, [core.Iterable$(Disposable)]],
      remove: [core.bool, [Disposable]],
      dispose: [dart.void, []]
    })
  });
  const _subscriptions = Symbol('_subscriptions');
  class StreamSubscriptions extends core.Object {
    StreamSubscriptions(opts) {
      let catchExceptions = opts && 'catchExceptions' in opts ? opts.catchExceptions : true;
      this[_subscriptions] = dart.list([], async.StreamSubscription);
      this.catchExceptions = catchExceptions;
    }
    add(subscription) {
      return this[_subscriptions][dartx.add](subscription);
    }
    remove(subscription) {
      return this[_subscriptions][dartx.remove](subscription);
    }
    cancel() {
      for (let subscription of this[_subscriptions]) {
        if (dart.notNull(this.catchExceptions)) {
          try {
            subscription.cancel();
          } catch (e) {
            let st = dart.stackTrace(e);
            exports._logger.severe('exception during subscription cancel', e, st);
          }

        } else {
          subscription.cancel();
        }
      }
      this[_subscriptions][dartx.clear]();
    }
    dispose() {
      return this.cancel();
    }
  }
  StreamSubscriptions[dart.implements] = () => [Disposable];
  dart.setSignature(StreamSubscriptions, {
    constructors: () => ({StreamSubscriptions: [StreamSubscriptions, [], {catchExceptions: core.bool}]}),
    methods: () => ({
      add: [dart.void, [async.StreamSubscription]],
      remove: [core.bool, [async.StreamSubscription]],
      cancel: [dart.void, []],
      dispose: [dart.void, []]
    })
  });
  class DisposeableSubscription extends core.Object {
    DisposeableSubscription(sub) {
      this.sub = sub;
    }
    dispose() {
      this.sub.cancel();
    }
  }
  DisposeableSubscription[dart.implements] = () => [Disposable];
  dart.setSignature(DisposeableSubscription, {
    constructors: () => ({DisposeableSubscription: [DisposeableSubscription, [async.StreamSubscription]]}),
    methods: () => ({dispose: [dart.void, []]})
  });
  // Exports:
  exports.Disposable = Disposable;
  exports.Disposables = Disposables;
  exports.StreamSubscriptions = StreamSubscriptions;
  exports.DisposeableSubscription = DisposeableSubscription;
});
//# sourceMappingURL=disposable.js.map
