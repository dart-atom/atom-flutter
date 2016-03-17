dart_library.library('atom/src/utils', null, /* Imports */[
  'dart/_runtime',
  'dart/async',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, async, core) {
  'use strict';
  let dartx = dart.dartx;
  const _operations = Symbol('_operations');
  const _completers = Symbol('_completers');
  const _serviceQueue = Symbol('_serviceQueue');
  const FutureSerializer$ = dart.generic(function(T) {
    class FutureSerializer extends core.Object {
      FutureSerializer() {
        this[_operations] = [];
        this[_completers] = dart.list([], async.Completer$(T));
      }
      perform(operation) {
        let completer = async.Completer$(T).new();
        this[_operations][dartx.add](operation);
        this[_completers][dartx.add](completer);
        if (this[_operations][dartx.length] == 1) {
          this[_serviceQueue]();
        }
        return completer.future;
      }
      [_serviceQueue]() {
        let operation = dart.as(this[_operations][dartx.first], core.Function);
        let completer = this[_completers][dartx.first];
        let future = dart.as(dart.dcall(operation), async.Future);
        future.then(dart.fn(value => {
          completer.complete(value);
        })).catchError(dart.fn(e => {
          completer.completeError(e);
        })).whenComplete(dart.fn(() => {
          this[_operations][dartx.removeAt](0);
          this[_completers][dartx.removeAt](0);
          if (dart.notNull(this[_operations][dartx.isNotEmpty])) this[_serviceQueue]();
        }));
      }
    }
    dart.setSignature(FutureSerializer, {
      methods: () => ({
        perform: [async.Future$(T), [core.Function]],
        [_serviceQueue]: [dart.void, []]
      })
    });
    return FutureSerializer;
  });
  let FutureSerializer = FutureSerializer$();
  // Exports:
  exports.FutureSerializer$ = FutureSerializer$;
  exports.FutureSerializer = FutureSerializer;
});
//# sourceMappingURL=utils.js.map
