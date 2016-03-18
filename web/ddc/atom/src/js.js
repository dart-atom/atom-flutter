'use strict';
let dart = require("dart/_runtime");
let js = require("dart/js");
let logging = require("logging/logging");
let core = require("dart/core");
let convert = require("dart/convert");
let async = require("dart/async");
let disposable = require("atom/utils/disposable");
let dartx = dart.dartx;
dart.export(exports, js, ['context', 'JsObject', 'JsFunction'], []);
dart.defineLazyProperties(exports, {
  get _browserWindow() {
    return js.JsObject.fromBrowserObject(js.context.get('window'));
  }
});
dart.defineLazyProperties(exports, {
  get _browserJson() {
    return dart.as(exports._browserWindow.get('JSON'), js.JsObject);
  }
});
dart.defineLazyProperties(exports, {
  get _logger() {
    return logging.Logger.new("js");
  },
  set _logger(_) {}
});
function jsify(obj) {
  if (obj == null) return null;
  if (dart.is(obj, js.JsObject)) return obj;
  if (dart.is(obj, core.List) || dart.is(obj, core.Map)) return js.JsObject.jsify(obj);
  if (dart.is(obj, ProxyHolder)) return obj.obj;
  return obj;
}
dart.fn(jsify);
function uncrackDart2js(obj) {
  return dart.as(js.context.callMethod('uncrackDart2js', [obj]), js.JsObject);
}
dart.fn(uncrackDart2js, js.JsObject, [dart.dynamic]);
function jsObjectToDart(obj) {
  if (obj == null) return null;
  try {
    let str = dart.as(exports._browserJson.callMethod('stringify', dart.list([obj], js.JsObject)), core.String);
    return convert.JSON.decode(str);
  } catch (e) {
    let st = dart.stackTrace(e);
    exports._logger.severe('jsObjectToDart', e, st);
  }

}
dart.fn(jsObjectToDart, dart.dynamic, [js.JsObject]);
function dartObjectToJS(obj) {
  if (obj == null) return null;
  try {
    let str = convert.JSON.encode(obj);
    return exports._browserJson.callMethod('parse', dart.list([str], core.String));
  } catch (e) {
    let st = dart.stackTrace(e);
    exports._logger.severe('dartObjectToJS', e, st);
  }

}
dart.fn(dartObjectToJS);
function promiseToFuture(promise) {
  if (dart.is(promise, js.JsObject)) promise = new Promise(dart.as(promise, js.JsObject));
  let completer = async.Completer.new();
  dart.dsend(promise, 'then', dart.fn(result => {
    completer.complete(result);
  }), dart.fn(error => {
    completer.completeError(error);
  }));
  return completer.future;
}
dart.fn(promiseToFuture, async.Future, [dart.dynamic]);
class ProxyHolder extends core.Object {
  ProxyHolder(obj) {
    this.obj = obj;
  }
  invoke(method, arg1, arg2, arg3) {
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg1 != null) arg1 = jsify(arg1);
    if (arg2 != null) arg2 = jsify(arg2);
    if (arg3 != null) arg3 = jsify(arg3);
    if (arg3 != null) {
      return this.obj.callMethod(method, [arg1, arg2, arg3]);
    } else if (arg2 != null) {
      return this.obj.callMethod(method, [arg1, arg2]);
    } else if (arg1 != null) {
      return this.obj.callMethod(method, [arg1]);
    } else {
      return this.obj.callMethod(method);
    }
  }
  eventStream(eventName) {
    let disposable = null;
    let controller = async.StreamController.broadcast({onCancel: dart.fn(() => dart.nullSafe(disposable, _ => _.dispose()), dart.void, [])});
    try {
      disposable = new JsDisposable(dart.as(this.invoke(eventName, dart.fn(evt => controller.add(evt), dart.void, [dart.dynamic])), js.JsObject));
    } catch (e) {
      let st = dart.stackTrace(e);
      exports._logger.warning(`error listening to ${eventName}`, e, st);
    }

    return controller.stream;
  }
  get hashCode() {
    return dart.hashCode(this.obj);
  }
  ['=='](other) {
    return dart.is(other, ProxyHolder) && dart.equals(this.obj, other.obj);
  }
}
dart.setSignature(ProxyHolder, {
  constructors: () => ({ProxyHolder: [ProxyHolder, [js.JsObject]]}),
  methods: () => ({
    invoke: [dart.dynamic, [core.String], [dart.dynamic, dart.dynamic, dart.dynamic]],
    eventStream: [async.Stream, [core.String]]
  })
});
class JsDisposable extends ProxyHolder {
  JsDisposable(object) {
    super.ProxyHolder(object);
  }
  dispose() {
    return this.invoke('dispose');
  }
}
JsDisposable[dart.implements] = () => [disposable.Disposable];
dart.setSignature(JsDisposable, {
  constructors: () => ({JsDisposable: [JsDisposable, [js.JsObject]]}),
  methods: () => ({dispose: [dart.void, []]})
});
const Promise$ = dart.generic(function(T) {
  class Promise extends ProxyHolder {
    static _jsObjectFromFuture(future) {
      let callback = dart.fn((resolve, reject) => {
        future.then(dart.fn(result => {
          dart.dsend(resolve, 'apply', [jsify(result)]);
        })).catchError(dart.fn(e => {
          dart.dsend(reject, 'apply', [e]);
        }));
      });
      return js.JsObject.new(dart.as(js.context.get('Promise'), js.JsFunction), dart.list([callback], dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])));
    }
    Promise(object) {
      super.ProxyHolder(object);
    }
    fromFuture(future) {
      super.ProxyHolder(Promise$()._jsObjectFromFuture(future));
    }
    then(thenCallback, errorCallback) {
      dart.as(thenCallback, dart.functionType(dart.void, [T]));
      if (errorCallback === void 0) errorCallback = null;
      dart.as(errorCallback, dart.functionType(dart.void, [dart.dynamic]));
      this.invoke("then", thenCallback, errorCallback);
    }
    error(errorCallback) {
      dart.as(errorCallback, dart.functionType(dart.void, [dart.dynamic]));
      return this.invoke("catch", errorCallback);
    }
  }
  dart.defineNamedConstructor(Promise, 'fromFuture');
  dart.setSignature(Promise, {
    constructors: () => ({
      Promise: [Promise$(T), [js.JsObject]],
      fromFuture: [Promise$(T), [async.Future]]
    }),
    methods: () => ({
      then: [dart.void, [dart.functionType(dart.void, [T])], [dart.functionType(dart.void, [dart.dynamic])]],
      error: [dart.void, [dart.functionType(dart.void, [dart.dynamic])]]
    }),
    statics: () => ({_jsObjectFromFuture: [js.JsObject, [async.Future]]}),
    names: ['_jsObjectFromFuture']
  });
  return Promise;
});
let Promise = Promise$();
// Exports:
exports.jsify = jsify;
exports.uncrackDart2js = uncrackDart2js;
exports.jsObjectToDart = jsObjectToDart;
exports.dartObjectToJS = dartObjectToJS;
exports.promiseToFuture = promiseToFuture;
exports.ProxyHolder = ProxyHolder;
exports.JsDisposable = JsDisposable;
exports.Promise$ = Promise$;
exports.Promise = Promise;
//# sourceMappingURL=js.js.map
