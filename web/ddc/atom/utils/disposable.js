dart_library.library('atom/utils/disposable', null, /* Imports */[
  "dart/_runtime",
  'logging/logging',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, logging, core) {
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
      let catchExceptions = opts && 'catchExceptions' in opts ? opts.catchExceptions : null;
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
  // Exports:
  exports.Disposable = Disposable;
  exports.Disposables = Disposables;
});
//# sourceMappingURL=disposable.js.map
