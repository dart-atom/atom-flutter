(function() {
  'use strict';
  const dart_sdk = require('dart_sdk');
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging = require('logging');
  const logging$ = logging.logging;
  const atom = Object.create(null);
  const atom_utils = Object.create(null);
  const node__command = Object.create(null);
  const node__config = Object.create(null);
  const node__fs = Object.create(null);
  const node__node = Object.create(null);
  const node__notification = Object.create(null);
  const node__package = Object.create(null);
  const node__process = Object.create(null);
  const node__shell = Object.create(null);
  const node__workspace = Object.create(null);
  const src__js = Object.create(null);
  const src__utils = Object.create(null);
  const utils__dependencies = Object.create(null);
  const utils__disposable = Object.create(null);
  const utils__package_deps = Object.create(null);
  const utils__utils = Object.create(null);
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfdynamicAnddynamicTodynamic = () => (JSArrayOfdynamicAnddynamicTodynamic = dart.constFn(_interceptors.JSArray$(dynamicAnddynamicTodynamic())))();
  let Promise = () => (Promise = dart.constFn(src__js.Promise$()))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let ListOfEntry = () => (ListOfEntry = dart.constFn(core.List$(node__fs.Entry)))();
  let ListOfNotification = () => (ListOfNotification = dart.constFn(core.List$(node__notification.Notification)))();
  let ListOfNotificationButton = () => (ListOfNotificationButton = dart.constFn(core.List$(node__notification.NotificationButton)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core.List$(html.Element)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let CompleterOfint = () => (CompleterOfint = dart.constFn(async.Completer$(core.int)))();
  let FutureOfint = () => (FutureOfint = dart.constFn(async.Future$(core.int)))();
  let JSArrayOfJsObject = () => (JSArrayOfJsObject = dart.constFn(_interceptors.JSArray$(js.JsObject)))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.functionType(dart.void, [core.String])))();
  let numTovoid = () => (numTovoid = dart.constFn(dart.functionType(dart.void, [core.num])))();
  let FutureSerializerOfTextEditor = () => (FutureSerializerOfTextEditor = dart.constFn(src__utils.FutureSerializer$(node__workspace.TextEditor)))();
  let ListOfTextEditor = () => (ListOfTextEditor = dart.constFn(core.List$(node__workspace.TextEditor)))();
  let FutureOfTextEditor = () => (FutureOfTextEditor = dart.constFn(async.Future$(node__workspace.TextEditor)))();
  let StreamOfListOfString = () => (StreamOfListOfString = dart.constFn(async.Stream$(ListOfString())))();
  let ListOfDirectory = () => (ListOfDirectory = dart.constFn(core.List$(node__fs.Directory)))();
  let StreamOfbool = () => (StreamOfbool = dart.constFn(async.Stream$(core.bool)))();
  let ListOfGutter = () => (ListOfGutter = dart.constFn(core.List$(node__workspace.Gutter)))();
  let FutureSerializer = () => (FutureSerializer = dart.constFn(src__utils.FutureSerializer$()))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.functionType(dart.dynamic, [])))();
  let JSArrayOfDisposable = () => (JSArrayOfDisposable = dart.constFn(_interceptors.JSArray$(utils__disposable.Disposable)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic])))();
  let dynamicAnddynamicTodynamic$ = () => (dynamicAnddynamicTodynamic$ = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let ContextMenuItemToJsObject = () => (ContextMenuItemToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [node__command.ContextMenuItem])))();
  let StringToString = () => (StringToString = dart.constFn(dart.definiteFunctionType(core.String, [core.String])))();
  let String__ToFutureOfString = () => (String__ToFutureOfString = dart.constFn(dart.definiteFunctionType(FutureOfString(), [core.String], {isBatchScript: core.bool})))();
  let JsObjectToJsObject = () => (JsObjectToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [js.JsObject])))();
  let dynamicToEntry = () => (dynamicToEntry = dart.constFn(dart.definiteFunctionType(node__fs.Entry, [dart.dynamic])))();
  let StringAnddynamic__ToJsObject = () => (StringAnddynamic__ToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [core.String, dart.dynamic], [dart.dynamic])))();
  let StringToJsObject = () => (StringToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [core.String])))();
  let dynamicToNotification = () => (dynamicToNotification = dart.constFn(dart.definiteFunctionType(node__notification.Notification, [dart.dynamic])))();
  let NotificationButtonToJsObject = () => (NotificationButtonToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [node__notification.NotificationButton])))();
  let StringToDivElement = () => (StringToDivElement = dart.constFn(dart.definiteFunctionType(html.DivElement, [core.String])))();
  let StringTovoid$ = () => (StringTovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [core.String])))();
  let intToint = () => (intToint = dart.constFn(dart.definiteFunctionType(core.int, [core.int])))();
  let AtomEventTovoid = () => (AtomEventTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [node__command.AtomEvent])))();
  let VoidTodynamic$ = () => (VoidTodynamic$ = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let String__ToFutureOfString$ = () => (String__ToFutureOfString$ = dart.constFn(dart.definiteFunctionType(FutureOfString(), [core.String], {defaultText: core.String, selectText: core.bool, selectLastWord: core.bool, isDart: core.bool})))();
  let __Todynamic = () => (__Todynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [], [dart.dynamic])))();
  let StringAndFunctionTovoid = () => (StringAndFunctionTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String, core.Function])))();
  let AtomPackageTovoid = () => (AtomPackageTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [node__package.AtomPackage])))();
  let StringToMapOfString$dynamic = () => (StringToMapOfString$dynamic = dart.constFn(dart.definiteFunctionType(MapOfString$dynamic(), [core.String])))();
  let MapToString = () => (MapToString = dart.constFn(dart.definiteFunctionType(core.String, [core.Map])))();
  let ProcessResultToString = () => (ProcessResultToString = dart.constFn(dart.definiteFunctionType(core.String, [node__process.ProcessResult])))();
  let String__ToFutureOfString$0 = () => (String__ToFutureOfString$0 = dart.constFn(dart.definiteFunctionType(FutureOfString(), [core.String], [ListOfString(), MapOfString$String()])))();
  let intToProcessResult = () => (intToProcessResult = dart.constFn(dart.definiteFunctionType(node__process.ProcessResult, [core.int])))();
  let numTovoid$ = () => (numTovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [core.num])))();
  let JsObjectTodynamic = () => (JsObjectTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [js.JsObject])))();
  let dynamicToTextEditor = () => (dynamicToTextEditor = dart.constFn(dart.definiteFunctionType(node__workspace.TextEditor, [dart.dynamic])))();
  let VoidToFutureOfTextEditor = () => (VoidToFutureOfTextEditor = dart.constFn(dart.definiteFunctionType(FutureOfTextEditor(), [])))();
  let dynamicToDirectory = () => (dynamicToDirectory = dart.constFn(dart.definiteFunctionType(node__fs.Directory, [dart.dynamic])))();
  let dynamicToPanel = () => (dynamicToPanel = dart.constFn(dart.definiteFunctionType(node__workspace.Panel, [dart.dynamic])))();
  let RangeToJsObject = () => (RangeToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [node__workspace.Range])))();
  let dynamicToPoint = () => (dynamicToPoint = dart.constFn(dart.definiteFunctionType(node__workspace.Point, [dart.dynamic])))();
  let dynamicToGutter = () => (dynamicToGutter = dart.constFn(dart.definiteFunctionType(node__workspace.Gutter, [dart.dynamic])))();
  let dynamicToJsObject = () => (dynamicToJsObject = dart.constFn(dart.definiteFunctionType(js.JsObject, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.definiteFunctionType(async.Future, [dart.dynamic])))();
  let dynamicAnddynamicTovoid = () => (dynamicAnddynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic])))();
  let MapToFuture = () => (MapToFuture = dart.constFn(dart.definiteFunctionType(async.Future, [core.Map])))();
  let StringAndAtomPackage__ToFuture = () => (StringAndAtomPackage__ToFuture = dart.constFn(dart.definiteFunctionType(async.Future, [core.String, node__package.AtomPackage], {justNotify: core.bool})))();
  let ProcessResultToFuture = () => (ProcessResultToFuture = dart.constFn(dart.definiteFunctionType(async.Future, [node__process.ProcessResult])))();
  let StringToFuture = () => (StringToFuture = dart.constFn(dart.definiteFunctionType(async.Future, [core.String])))();
  dart.defineLazy(atom, {
    get _logger() {
      return logging$.Logger.new('atom');
    }
  });
  dart.defineLazy(atom, {
    get atom() {
      return new atom.Atom();
    }
  });
  const _commands = Symbol('_commands');
  const _config = Symbol('_config');
  const _contextMenu = Symbol('_contextMenu');
  const _grammars = Symbol('_grammars');
  const _notifications = Symbol('_notifications');
  const _packages = Symbol('_packages');
  const _project = Symbol('_project');
  const _views = Symbol('_views');
  const _workspace = Symbol('_workspace');
  src__js.ProxyHolder = class ProxyHolder extends core.Object {
    new(obj) {
      this.obj = obj;
    }
    invoke(method, arg1, arg2, arg3) {
      if (arg1 === void 0) arg1 = null;
      if (arg2 === void 0) arg2 = null;
      if (arg3 === void 0) arg3 = null;
      if (arg1 != null) arg1 = src__js.jsify(arg1);
      if (arg2 != null) arg2 = src__js.jsify(arg2);
      if (arg3 != null) arg3 = src__js.jsify(arg3);
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
      let controller = async.StreamController.broadcast({onCancel: dart.fn(() => dart.nullSafe(disposable, _ => _.dispose()), VoidTovoid())});
      try {
        disposable = new src__js.JsDisposable(js.JsObject._check(this.invoke(eventName, dart.fn(evt => controller.add(evt), dynamicTovoid()))));
      } catch (e) {
        let st = dart.stackTrace(e);
        src__js._logger.warning(dart.str`error listening to ${eventName}`, e, st);
      }

      return controller.stream;
    }
    get hashCode() {
      return dart.hashCode(this.obj);
    }
    ['=='](other) {
      return src__js.ProxyHolder.is(other) && dart.equals(this.obj, other.obj);
    }
  };
  dart.setSignature(src__js.ProxyHolder, {
    constructors: () => ({new: dart.definiteFunctionType(src__js.ProxyHolder, [js.JsObject])}),
    methods: () => ({
      invoke: dart.definiteFunctionType(dart.dynamic, [core.String], [dart.dynamic, dart.dynamic, dart.dynamic]),
      eventStream: dart.definiteFunctionType(async.Stream, [core.String])
    })
  });
  atom.Atom = class Atom extends src__js.ProxyHolder {
    new() {
      this[_commands] = null;
      this[_config] = null;
      this[_contextMenu] = null;
      this[_grammars] = null;
      this[_notifications] = null;
      this[_packages] = null;
      this[_project] = null;
      this[_views] = null;
      this[_workspace] = null;
      super.new(js.JsObject._check(js.context.get('atom')));
      this[_commands] = new node__command.CommandRegistry(js.JsObject._check(this.obj.get('commands')));
      this[_config] = new node__config.Config(js.JsObject._check(this.obj.get('config')));
      this[_contextMenu] = new node__command.ContextMenuManager(js.JsObject._check(this.obj.get('contextMenu')));
      this[_grammars] = new node__config.GrammarRegistry(js.JsObject._check(this.obj.get('grammars')));
      this[_notifications] = new node__notification.NotificationManager(js.JsObject._check(this.obj.get('notifications')));
      this[_packages] = new node__package.PackageManager(js.JsObject._check(this.obj.get('packages')));
      this[_project] = new node__workspace.Project(js.JsObject._check(this.obj.get('project')));
      this[_views] = new node__workspace.ViewRegistry(js.JsObject._check(this.obj.get('views')));
      this[_workspace] = new node__workspace.Workspace(js.JsObject._check(this.obj.get('workspace')));
    }
    get commands() {
      return this[_commands];
    }
    get config() {
      return this[_config];
    }
    get contextMenu() {
      return this[_contextMenu];
    }
    get grammars() {
      return this[_grammars];
    }
    get notifications() {
      return this[_notifications];
    }
    get packages() {
      return this[_packages];
    }
    get project() {
      return this[_project];
    }
    get views() {
      return this[_views];
    }
    get workspace() {
      return this[_workspace];
    }
    getVersion() {
      return core.String._check(this.invoke('getVersion'));
    }
    beep() {
      return this.invoke('beep');
    }
    confirm(message, opts) {
      let detailedMessage = opts && 'detailedMessage' in opts ? opts.detailedMessage : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let m = dart.map({message: message});
      if (detailedMessage != null) m[dartx.set]('detailedMessage', detailedMessage);
      if (buttons != null) m[dartx.set]('buttons', buttons);
      return core.int._check(this.invoke('confirm', m));
    }
    reload() {
      return this.invoke('reload');
    }
    pickFolder() {
      let completer = CompleterOfString().new();
      this.invoke('pickFolder', dart.fn(result => {
        if (core.List.is(result) && dart.test(result[dartx.isNotEmpty])) {
          completer.complete(result[dartx.first]);
        } else {
          completer.complete(null);
        }
      }, dynamicTodynamic()));
      return completer.future;
    }
  };
  dart.setSignature(atom.Atom, {
    constructors: () => ({new: dart.definiteFunctionType(atom.Atom, [])}),
    methods: () => ({
      getVersion: dart.definiteFunctionType(core.String, []),
      beep: dart.definiteFunctionType(dart.void, []),
      confirm: dart.definiteFunctionType(core.int, [core.String], {detailedMessage: core.String, buttons: ListOfString()}),
      reload: dart.definiteFunctionType(dart.void, []),
      pickFolder: dart.definiteFunctionType(async.Future$(core.String), [])
    })
  });
  atom.ProxyHolder = src__js.ProxyHolder;
  src__js.Promise$ = dart.generic(T => {
    class Promise extends src__js.ProxyHolder {
      static _jsObjectFromFuture(future) {
        let callback = dart.fn((resolve, reject) => {
          future.then(dart.dynamic)(dart.fn(result => {
            dart.dsend(resolve, 'apply', [src__js.jsify(result)]);
          }, dynamicTodynamic())).catchError(dart.fn(e => {
            dart.dsend(reject, 'apply', [e]);
          }, dynamicTodynamic()));
        }, dynamicAnddynamicTodynamic$());
        return js.JsObject.new(js.JsFunction._check(js.context.get('Promise')), JSArrayOfdynamicAnddynamicTodynamic().of([callback]));
      }
      new(object) {
        super.new(object);
      }
      fromFuture(future) {
        super.new(src__js.Promise._jsObjectFromFuture(future));
      }
      then(thenCallback, errorCallback) {
        if (errorCallback === void 0) errorCallback = null;
        this.invoke("then", thenCallback, errorCallback);
      }
      error(errorCallback) {
        return this.invoke("catch", errorCallback);
      }
    }
    dart.addTypeTests(Promise);
    dart.defineNamedConstructor(Promise, 'fromFuture');
    dart.setSignature(Promise, {
      constructors: () => ({
        new: dart.definiteFunctionType(src__js.Promise$(T), [js.JsObject]),
        fromFuture: dart.definiteFunctionType(src__js.Promise$(T), [async.Future])
      }),
      methods: () => ({
        then: dart.definiteFunctionType(dart.void, [dart.functionType(dart.void, [T])], [dart.functionType(dart.void, [dart.dynamic])]),
        error: dart.definiteFunctionType(dart.void, [dart.functionType(dart.void, [dart.dynamic])])
      }),
      statics: () => ({_jsObjectFromFuture: dart.definiteFunctionType(js.JsObject, [async.Future])}),
      names: ['_jsObjectFromFuture']
    });
    return Promise;
  });
  src__js.Promise = Promise();
  atom.Promise$ = src__js.Promise$;
  atom.Promise = src__js.Promise;
  node__command.ContextMenuContributor = class ContextMenuContributor extends core.Object {};
  atom.ContextMenuContributor = node__command.ContextMenuContributor;
  const _dispatchedController = Symbol('_dispatchedController');
  node__command.CommandRegistry = class CommandRegistry extends src__js.ProxyHolder {
    new(object) {
      this[_dispatchedController] = StreamControllerOfString().broadcast();
      super.new(object);
    }
    get onDidDispatch() {
      return this[_dispatchedController].stream;
    }
    add(target, commandName, callback) {
      return new src__js.JsDisposable(js.JsObject._check(this.invoke('add', target, commandName, dart.fn(e => {
        this[_dispatchedController].add(commandName);
        callback(node__command.AtomEvent.new(e));
      }, dynamicTodynamic()))));
    }
    dispatch(target, commandName, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this.invoke('dispatch', target, commandName, options);
    }
  };
  dart.setSignature(node__command.CommandRegistry, {
    constructors: () => ({new: dart.definiteFunctionType(node__command.CommandRegistry, [js.JsObject])}),
    methods: () => ({
      add: dart.definiteFunctionType(utils__disposable.Disposable, [dart.dynamic, core.String, dart.functionType(dart.void, [node__command.AtomEvent])]),
      dispatch: dart.definiteFunctionType(dart.void, [html.Element, core.String], {options: core.Map})
    })
  });
  atom.CommandRegistry = node__command.CommandRegistry;
  node__command.AtomEvent = class AtomEvent extends src__js.ProxyHolder {
    static new(object) {
      return new node__command.AtomEvent._fromJsObject(js.JsObject._check(object));
    }
    _fromJsObject(object) {
      super.new(node__command._cvt(object));
    }
    get currentTarget() {
      return this.obj.get('currentTarget');
    }
    get editor() {
      let view = new node__workspace.TextEditorElement(js.JsObject._check(this.currentTarget));
      return view.getModel();
    }
    get targetFilePath() {
      try {
        let target = this.obj.get('target');
        if (html.Element.is(target)) {
          if (target[dartx.getAttribute]('data-path') != null) {
            return target[dartx.getAttribute]('data-path');
          }
          if (dart.test(target[dartx.children][dartx.isEmpty])) return null;
          let child = target[dartx.children][dartx.first];
          return child[dartx.getAttribute]('data-path');
        } else if (js.JsObject.is(target)) {
          let obj = js.JsObject._check(target.callMethod('querySelector', JSArrayOfString().of(['span'])));
          if (obj == null) return null;
          obj = js.JsObject.fromBrowserObject(obj);
          return core.String._check(obj.callMethod('getAttribute', JSArrayOfString().of(['data-path'])));
        } else {
          return null;
        }
      } catch (e) {
        let st = dart.stackTrace(e);
        node__command._logger.info('exception while handling context menu', e, st);
        return null;
      }

    }
    abortKeyBinding() {
      return this.invoke('abortKeyBinding');
    }
    get keyBindingAborted() {
      return core.bool._check(this.obj.get('keyBindingAborted'));
    }
    preventDefault() {
      return this.invoke('preventDefault');
    }
    get defaultPrevented() {
      return core.bool._check(this.obj.get('defaultPrevented'));
    }
    stopPropagation() {
      return this.invoke('stopPropagation');
    }
    stopImmediatePropagation() {
      return this.invoke('stopImmediatePropagation');
    }
    get propagationStopped() {
      return core.bool._check(this.obj.get('propagationStopped'));
    }
  };
  dart.defineNamedConstructor(node__command.AtomEvent, '_fromJsObject');
  dart.setSignature(node__command.AtomEvent, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__command.AtomEvent, [dart.dynamic]),
      _fromJsObject: dart.definiteFunctionType(node__command.AtomEvent, [js.JsObject])
    }),
    methods: () => ({
      abortKeyBinding: dart.definiteFunctionType(dart.void, []),
      preventDefault: dart.definiteFunctionType(dart.void, []),
      stopPropagation: dart.definiteFunctionType(dart.void, []),
      stopImmediatePropagation: dart.definiteFunctionType(dart.void, [])
    })
  });
  atom.AtomEvent = node__command.AtomEvent;
  node__command.ContextMenuItem = class ContextMenuItem extends core.Object {
    new(label, command) {
      this.label = label;
      this.command = command;
    }
    toJs() {
      let m = dart.map({label: this.label, command: this.command, shouldDisplay: dart.fn(e => this.shouldDisplay(node__command.AtomEvent.new(e)), dynamicTobool())});
      return js.JsObject._check(src__js.jsify(m));
    }
  };
  dart.setSignature(node__command.ContextMenuItem, {
    constructors: () => ({new: dart.definiteFunctionType(node__command.ContextMenuItem, [core.String, core.String])}),
    methods: () => ({toJs: dart.definiteFunctionType(js.JsObject, [])})
  });
  dart.defineLazy(node__command.ContextMenuItem, {
    get separator() {
      return new node__command._SeparatorMenuItem();
    }
  });
  atom.ContextMenuItem = node__command.ContextMenuItem;
  node__command.ContextMenuManager = class ContextMenuManager extends src__js.ProxyHolder {
    new(obj) {
      super.new(obj);
    }
    add(selector, items) {
      let m = dart.map([selector, items[dartx.map](js.JsObject)(dart.fn(item => item.toJs(), ContextMenuItemToJsObject()))[dartx.toList]()]);
      return new src__js.JsDisposable(js.JsObject._check(this.invoke('add', m)));
    }
  };
  dart.setSignature(node__command.ContextMenuManager, {
    constructors: () => ({new: dart.definiteFunctionType(node__command.ContextMenuManager, [js.JsObject])}),
    methods: () => ({add: dart.definiteFunctionType(utils__disposable.Disposable, [core.String, core.List$(node__command.ContextMenuItem)])})
  });
  atom.ContextMenuManager = node__command.ContextMenuManager;
  dart.defineLazy(atom_utils, {
    get _logger() {
      return logging$.Logger.new('atom_utils');
    }
  });
  atom_utils.TrustedHtmlTreeSanitizer = class TrustedHtmlTreeSanitizer extends core.Object {
    new() {
    }
    sanitizeTree(node) {}
  };
  atom_utils.TrustedHtmlTreeSanitizer[dart.implements] = () => [html.NodeTreeSanitizer];
  dart.setSignature(atom_utils.TrustedHtmlTreeSanitizer, {
    constructors: () => ({new: dart.definiteFunctionType(atom_utils.TrustedHtmlTreeSanitizer, [])}),
    methods: () => ({sanitizeTree: dart.definiteFunctionType(dart.void, [html.Node])})
  });
  atom_utils._shellWrangler = null;
  atom_utils.which = function(execName, opts) {
    let isBatchScript = opts && 'isBatchScript' in opts ? opts.isBatchScript : false;
    if (dart.test(node__process.isWindows)) {
      let ext = dart.test(isBatchScript) ? 'bat' : 'exe';
      return node__process.exec('where', JSArrayOfString().of([dart.str`${execName}.${ext}`])).then(core.String)(dart.fn(result => {
        result = result[dartx.trim]();
        if (dart.test(result[dartx.contains]('\n'))) result = result[dartx.split]('\n')[dartx.first];
        return result;
      }, StringToString()));
    } else {
      if (atom_utils._shellWrangler == null) atom_utils._shellWrangler = new node__process.ShellWrangler();
      return node__process.exec('which', JSArrayOfString().of([execName]), atom_utils._shellWrangler.env).then(core.String)(dart.fn(result => {
        result = result[dartx.trim]();
        if (dart.test(result[dartx.contains]('\n'))) result = result[dartx.split]('\n')[dartx.first];
        return result;
      }, StringToString()));
    }
  };
  dart.fn(atom_utils.which, String__ToFutureOfString());
  dart.defineLazy(node__command, {
    get _logger() {
      return logging$.Logger.new('command');
    }
  });
  node__command._SeparatorMenuItem = class _SeparatorMenuItem extends node__command.ContextMenuItem {
    new() {
      super.new('', '');
    }
    shouldDisplay(event) {
      return true;
    }
    toJs() {
      return js.JsObject._check(src__js.jsify(dart.map({type: 'separator'})));
    }
  };
  dart.setSignature(node__command._SeparatorMenuItem, {
    constructors: () => ({new: dart.definiteFunctionType(node__command._SeparatorMenuItem, [])}),
    methods: () => ({shouldDisplay: dart.definiteFunctionType(core.bool, [node__command.AtomEvent])})
  });
  node__command._cvt = function(object) {
    if (object == null) return null;
    if (js.JsObject.is(object)) return object;
    return js.JsObject.fromBrowserObject(object);
  };
  dart.fn(node__command._cvt, JsObjectToJsObject());
  node__config.Config = class Config extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    getValue(keyPath, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      let options = null;
      if (scope != null) options = dart.map({scope: scope});
      return this.invoke('get', keyPath, options);
    }
    getBoolValue(keyPath, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      return dart.equals(this.getValue(keyPath, {scope: scope}), true);
    }
    setValue(keyPath, value) {
      return this.invoke('set', keyPath, value);
    }
    observe(keyPath, options, callback) {
      if (options == null) options = dart.map();
      return new src__js.JsDisposable(js.JsObject._check(this.invoke('observe', keyPath, options, callback)));
    }
    onDidChange(keyPath, options) {
      if (options === void 0) options = null;
      let disposable = null;
      let controller = async.StreamController.broadcast({onCancel: dart.fn(() => {
          if (disposable != null) disposable.dispose();
        }, VoidTovoid())});
      disposable = this.observe(keyPath, options, dart.fn(e => controller.add(e), dynamicTovoid()));
      return controller.stream;
    }
  };
  dart.setSignature(node__config.Config, {
    constructors: () => ({new: dart.definiteFunctionType(node__config.Config, [js.JsObject])}),
    methods: () => ({
      getValue: dart.definiteFunctionType(dart.dynamic, [core.String], {scope: dart.dynamic}),
      getBoolValue: dart.definiteFunctionType(core.bool, [core.String], {scope: dart.dynamic}),
      setValue: dart.definiteFunctionType(dart.void, [core.String, dart.dynamic]),
      observe: dart.definiteFunctionType(utils__disposable.Disposable, [core.String, core.Map, dart.functionType(dart.void, [dart.dynamic])]),
      onDidChange: dart.definiteFunctionType(async.Stream, [core.String], [core.Map])
    })
  });
  node__config.Grammar = class Grammar extends src__js.ProxyHolder {
    static new(object) {
      return object == null ? null : new node__config.Grammar._(object);
    }
    _(object) {
      super.new(node__config._cvt(object));
    }
  };
  dart.defineNamedConstructor(node__config.Grammar, '_');
  dart.setSignature(node__config.Grammar, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__config.Grammar, [js.JsObject]),
      _: dart.definiteFunctionType(node__config.Grammar, [js.JsObject])
    })
  });
  node__config.GrammarRegistry = class GrammarRegistry extends src__js.ProxyHolder {
    new(object) {
      super.new(node__config._cvt(object));
    }
    grammarForScopeName(scopeName) {
      return node__config.Grammar.new(js.JsObject._check(this.invoke('grammarForScopeName', scopeName)));
    }
  };
  dart.setSignature(node__config.GrammarRegistry, {
    constructors: () => ({new: dart.definiteFunctionType(node__config.GrammarRegistry, [js.JsObject])}),
    methods: () => ({grammarForScopeName: dart.definiteFunctionType(node__config.Grammar, [core.String])})
  });
  node__config.ScopeDescriptor = class ScopeDescriptor extends src__js.ProxyHolder {
    static new(object) {
      return object == null ? null : new node__config.ScopeDescriptor._(object);
    }
    _(object) {
      super.new(object);
    }
    get scopes() {
      return ListOfString().from(core.Iterable._check(this.obj.get('scopes')));
    }
    getScopesArray() {
      return ListOfString().from(core.Iterable._check(this.invoke('getScopesArray')));
    }
  };
  dart.defineNamedConstructor(node__config.ScopeDescriptor, '_');
  dart.setSignature(node__config.ScopeDescriptor, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__config.ScopeDescriptor, [js.JsObject]),
      _: dart.definiteFunctionType(node__config.ScopeDescriptor, [js.JsObject])
    }),
    methods: () => ({getScopesArray: dart.definiteFunctionType(core.List$(core.String), [])})
  });
  node__config._cvt = function(object) {
    if (object == null) return null;
    if (js.JsObject.is(object)) return object;
    return js.JsObject.fromBrowserObject(object);
  };
  dart.fn(node__config._cvt, JsObjectToJsObject());
  dart.defineLazy(node__fs, {
    get fs() {
      return new node__fs.FS._();
    }
  });
  const _os = Symbol('_os');
  node__fs.FS = class FS extends src__js.ProxyHolder {
    _() {
      this[_os] = node__node.require('os');
      this.separator = dart.test(node__process.isWindows) ? '\\' : '/';
      super.new(node__node.require('fs'));
    }
    get homedir() {
      return core.String._check(this[_os].callMethod('homedir'));
    }
    get tmpdir() {
      return core.String._check(this[_os].callMethod('tmpdir'));
    }
    basename(path) {
      if (dart.test(path[dartx.endsWith](this.separator))) path = path[dartx.substring](0, dart.notNull(path[dartx.length]) - 1);
      let index = path[dartx.lastIndexOf](this.separator);
      return index == -1 ? path : path[dartx.substring](dart.notNull(index) + 1);
    }
    dirname(entry) {
      if (node__fs.Entry.is(entry)) return entry.getParent().path;
      let index = core.int._check(dart.dsend(entry, 'lastIndexOf', this.separator));
      return core.String._check(index == -1 ? null : dart.dsend(entry, 'substring', 0, index));
    }
    join(dir, arg1, arg2, arg3) {
      if (arg2 === void 0) arg2 = null;
      if (arg3 === void 0) arg3 = null;
      let path = dart.str`${dir}${this.separator}${arg1}`;
      if (arg2 != null) {
        path = dart.str`${path}${this.separator}${arg2}`;
        if (arg3 != null) path = dart.str`${path}${this.separator}${arg3}`;
      }
      return path;
    }
    relativize(root, path) {
      if (dart.test(path[dartx.startsWith](root))) {
        path = path[dartx.substring](root[dartx.length]);
        if (dart.test(path[dartx.startsWith](this.separator))) path = path[dartx.substring](1);
      }
      return path;
    }
    resolveTilde(path) {
      if (path == null) return null;
      if (!dart.test(path[dartx.startsWith]('~/'))) return path;
      let home = null;
      try {
        home = node__fs.fs.homedir;
      } catch (_) {
        return path;
      }

      if (!dart.test(home[dartx.endsWith]('/'))) {
        home = dart.notNull(home) + '/';
      }
      return dart.notNull(home) + dart.notNull(path[dartx.substring](2));
    }
    realpathSync(path) {
      return core.String._check(this.invoke('realpathSync', path));
    }
    statSync(path) {
      return new node__fs.Stats._(js.JsObject._check(this.invoke('statSync', path)));
    }
    existsSync(path) {
      return core.bool._check(this.invoke('existsSync', path));
    }
    readFileSync(path) {
      return core.String._check(this.invoke('readFileSync', path, dart.map({encoding: 'utf8'})));
    }
    writeFileSync(path, data) {
      return this.invoke('writeFileSync', path, data);
    }
  };
  dart.defineNamedConstructor(node__fs.FS, '_');
  dart.setSignature(node__fs.FS, {
    constructors: () => ({_: dart.definiteFunctionType(node__fs.FS, [])}),
    methods: () => ({
      basename: dart.definiteFunctionType(core.String, [core.String]),
      dirname: dart.definiteFunctionType(core.String, [dart.dynamic]),
      join: dart.definiteFunctionType(core.String, [dart.dynamic, core.String], [core.String, core.String]),
      relativize: dart.definiteFunctionType(core.String, [core.String, core.String]),
      resolveTilde: dart.definiteFunctionType(core.String, [core.String]),
      realpathSync: dart.definiteFunctionType(core.String, [core.String]),
      statSync: dart.definiteFunctionType(node__fs.Stats, [core.String]),
      existsSync: dart.definiteFunctionType(core.bool, [core.String]),
      readFileSync: dart.definiteFunctionType(core.String, [core.String]),
      writeFileSync: dart.definiteFunctionType(dart.void, [core.String, core.String])
    })
  });
  node__fs.Stats = class Stats extends src__js.ProxyHolder {
    _(obj) {
      super.new(obj);
    }
    isFile() {
      return core.bool._check(this.invoke('isFile'));
    }
    isDirectory() {
      return core.bool._check(this.invoke('isDirectory'));
    }
    get mtime() {
      return core.String._check(this.obj.get('mtime'));
    }
  };
  dart.defineNamedConstructor(node__fs.Stats, '_');
  dart.setSignature(node__fs.Stats, {
    constructors: () => ({_: dart.definiteFunctionType(node__fs.Stats, [js.JsObject])}),
    methods: () => ({
      isFile: dart.definiteFunctionType(core.bool, []),
      isDirectory: dart.definiteFunctionType(core.bool, [])
    })
  });
  node__fs.Entry = class Entry extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    get onDidChange() {
      return this.eventStream('onDidChange');
    }
    get path() {
      return core.String._check(this.obj.get('path'));
    }
    isFile() {
      return core.bool._check(this.invoke('isFile'));
    }
    isDirectory() {
      return core.bool._check(this.invoke('isDirectory'));
    }
    existsSync() {
      return core.bool._check(this.invoke('existsSync'));
    }
    getBaseName() {
      return core.String._check(this.invoke('getBaseName'));
    }
    getPath() {
      return core.String._check(this.invoke('getPath'));
    }
    getRealPathSync() {
      return core.String._check(this.invoke('getRealPathSync'));
    }
    getParent() {
      return new node__fs.Directory(js.JsObject._check(this.invoke('getParent')));
    }
    toString() {
      return this.path;
    }
  };
  dart.setSignature(node__fs.Entry, {
    constructors: () => ({new: dart.definiteFunctionType(node__fs.Entry, [js.JsObject])}),
    methods: () => ({
      isFile: dart.definiteFunctionType(core.bool, []),
      isDirectory: dart.definiteFunctionType(core.bool, []),
      existsSync: dart.definiteFunctionType(core.bool, []),
      getBaseName: dart.definiteFunctionType(core.String, []),
      getPath: dart.definiteFunctionType(core.String, []),
      getRealPathSync: dart.definiteFunctionType(core.String, []),
      getParent: dart.definiteFunctionType(node__fs.Directory, [])
    })
  });
  node__fs.Directory = class Directory extends node__fs.Entry {
    new(object) {
      super.new(object);
    }
    fromPath(path, symlink) {
      if (symlink === void 0) symlink = null;
      super.new(node__fs._create('Directory', path, symlink));
    }
    create(mode) {
      if (mode === void 0) mode = null;
      return src__js.promiseToFuture(this.invoke('create', mode));
    }
    isRoot() {
      return core.bool._check(this.invoke('isRoot'));
    }
    getFile(filename) {
      return new node__fs.File(node__fs._cvt(js.JsObject._check(this.invoke('getFile', filename))));
    }
    getSubdirectory(dirname) {
      return new node__fs.Directory(js.JsObject._check(this.invoke('getSubdirectory', dirname)));
    }
    getEntriesSync() {
      return ListOfEntry().as(dart.dsend(dart.dsend(this.invoke('getEntriesSync'), 'map', dart.fn(entry => {
        entry = node__fs._cvt(js.JsObject._check(entry));
        return dart.test(dart.dsend(entry, 'callMethod', 'isFile')) ? new node__fs.File(js.JsObject._check(entry)) : new node__fs.Directory(js.JsObject._check(entry));
      }, dynamicToEntry())), 'toList'));
    }
    contains(p) {
      return core.bool._check(this.invoke('contains', p));
    }
    get hashCode() {
      return dart.hashCode(this.path);
    }
    ['=='](other) {
      return node__fs.Directory.is(other) && this.path == other.path;
    }
  };
  dart.defineNamedConstructor(node__fs.Directory, 'fromPath');
  dart.setSignature(node__fs.Directory, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__fs.Directory, [js.JsObject]),
      fromPath: dart.definiteFunctionType(node__fs.Directory, [core.String], [core.bool])
    }),
    methods: () => ({
      create: dart.definiteFunctionType(async.Future, [], [core.int]),
      isRoot: dart.definiteFunctionType(core.bool, []),
      getFile: dart.definiteFunctionType(node__fs.File, [dart.dynamic]),
      getSubdirectory: dart.definiteFunctionType(node__fs.Directory, [core.String]),
      getEntriesSync: dart.definiteFunctionType(core.List$(node__fs.Entry), []),
      contains: dart.definiteFunctionType(core.bool, [core.String])
    })
  });
  node__fs.File = class File extends node__fs.Entry {
    new(object) {
      super.new(object);
    }
    fromPath(path, symlink) {
      if (symlink === void 0) symlink = null;
      super.new(node__fs._create('File', path, symlink));
    }
    create() {
      return src__js.promiseToFuture(this.invoke('create'));
    }
    get onDidRename() {
      return this.eventStream('onDidRename');
    }
    get onDidDelete() {
      return this.eventStream('onDidDelete');
    }
    getDigestSync() {
      return core.String._check(this.invoke('getDigestSync'));
    }
    getEncoding() {
      return core.String._check(this.invoke('getEncoding'));
    }
    read(flushCache) {
      if (flushCache === void 0) flushCache = null;
      return FutureOfString().as(src__js.promiseToFuture(this.invoke('read', flushCache)));
    }
    readSync(flushCache) {
      if (flushCache === void 0) flushCache = null;
      return core.String._check(this.invoke('readSync', flushCache));
    }
    writeSync(text) {
      return this.invoke('writeSync', text);
    }
    get hashCode() {
      return dart.hashCode(this.path);
    }
    ['=='](other) {
      return node__fs.File.is(other) && this.path == other.path;
    }
  };
  dart.defineNamedConstructor(node__fs.File, 'fromPath');
  dart.setSignature(node__fs.File, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__fs.File, [js.JsObject]),
      fromPath: dart.definiteFunctionType(node__fs.File, [core.String], [core.bool])
    }),
    methods: () => ({
      create: dart.definiteFunctionType(async.Future, []),
      getDigestSync: dart.definiteFunctionType(core.String, []),
      getEncoding: dart.definiteFunctionType(core.String, []),
      read: dart.definiteFunctionType(async.Future$(core.String), [], [core.bool]),
      readSync: dart.definiteFunctionType(core.String, [], [core.bool]),
      writeSync: dart.definiteFunctionType(dart.void, [core.String])
    })
  });
  node__fs._create = function(className, arg1, arg2) {
    if (arg2 === void 0) arg2 = null;
    if (arg2 != null) {
      return js.JsObject.new(js.JsFunction._check(node__node.require('atom').get(className)), [arg1, arg2]);
    } else {
      return js.JsObject.new(js.JsFunction._check(node__node.require('atom').get(className)), [arg1]);
    }
  };
  dart.fn(node__fs._create, StringAnddynamic__ToJsObject());
  node__fs._cvt = function(object) {
    if (object == null) return null;
    return js.JsObject.fromBrowserObject(object);
  };
  dart.fn(node__fs._cvt, JsObjectToJsObject());
  node__node.require = function(input) {
    return js.JsObject._check(js.context.callMethod('require', JSArrayOfString().of([input])));
  };
  dart.fn(node__node.require, StringToJsObject());
  dart.defineLazy(node__notification, {
    get _logger() {
      return logging$.Logger.new('notification');
    }
  });
  const _options = Symbol('_options');
  node__notification.NotificationManager = class NotificationManager extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    addSuccess(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new node__notification.Notification(js.JsObject._check(this.invoke('addSuccess', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons}))));
    }
    addInfo(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new node__notification.Notification(js.JsObject._check(this.invoke('addInfo', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons}))));
    }
    addWarning(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new node__notification.Notification(js.JsObject._check(this.invoke('addWarning', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons}))));
    }
    addError(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new node__notification.Notification(js.JsObject._check(this.invoke('addError', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons}))));
    }
    addFatalError(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new node__notification.Notification(js.JsObject._check(this.invoke('addFatalError', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons}))));
    }
    getNotifications() {
      return ListOfNotification().from(core.Iterable._check(dart.dsend(this.invoke('getNotifications'), 'map', dart.fn(n => new node__notification.Notification(js.JsObject._check(n)), dynamicToNotification()))));
    }
    [_options](opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      if (detail == null && description == null && dismissable == null && icon == null && buttons == null) {
        return null;
      }
      let m = dart.map();
      if (detail != null) m[dartx.set]('detail', detail);
      if (description != null) m[dartx.set]('description', description);
      if (dismissable != null) m[dartx.set]('dismissable', dismissable);
      if (icon != null) m[dartx.set]('icon', icon);
      if (buttons != null) {
        m[dartx.set]('buttons', src__js.jsify(buttons[dartx.map](js.JsObject)(dart.fn(nb => nb.toProxy(), NotificationButtonToJsObject()))[dartx.toList]()));
      }
      return m;
    }
  };
  dart.setSignature(node__notification.NotificationManager, {
    constructors: () => ({new: dart.definiteFunctionType(node__notification.NotificationManager, [js.JsObject])}),
    methods: () => ({
      addSuccess: dart.definiteFunctionType(node__notification.Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()}),
      addInfo: dart.definiteFunctionType(node__notification.Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()}),
      addWarning: dart.definiteFunctionType(node__notification.Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()}),
      addError: dart.definiteFunctionType(node__notification.Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()}),
      addFatalError: dart.definiteFunctionType(node__notification.Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()}),
      getNotifications: dart.definiteFunctionType(core.List$(node__notification.Notification), []),
      [_options]: dart.definiteFunctionType(core.Map, [], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: ListOfNotificationButton()})
    })
  });
  node__notification.Notification = class Notification extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    get view() {
      return atom.atom.views.getView(this.obj);
    }
    get onDidDismiss() {
      return this.eventStream('onDidDismiss');
    }
    get dismissed() {
      return core.bool._check(this.obj.get('dismissed'));
    }
    get displayed() {
      return core.bool._check(this.obj.get('displayed'));
    }
    getType() {
      return core.String._check(this.invoke('getType'));
    }
    getMessage() {
      return core.String._check(this.invoke('getMessage'));
    }
    dismiss() {
      return this.invoke('dismiss');
    }
  };
  dart.setSignature(node__notification.Notification, {
    constructors: () => ({new: dart.definiteFunctionType(node__notification.Notification, [js.JsObject])}),
    methods: () => ({
      getType: dart.definiteFunctionType(core.String, []),
      getMessage: dart.definiteFunctionType(core.String, []),
      dismiss: dart.definiteFunctionType(dart.void, [])
    })
  });
  node__notification.NotificationButton = class NotificationButton extends core.Object {
    new(text, onDidClick) {
      this.text = text;
      this.onDidClick = onDidClick;
    }
    toProxy() {
      return js.JsObject._check(src__js.jsify(dart.map({text: this.text, onDidClick: dart.fn(_ => dart.dcall(this.onDidClick), dynamicTodynamic())})));
    }
  };
  dart.setSignature(node__notification.NotificationButton, {
    constructors: () => ({new: dart.definiteFunctionType(node__notification.NotificationButton, [core.String, core.Function])}),
    methods: () => ({toProxy: dart.definiteFunctionType(js.JsObject, [])})
  });
  const _view = Symbol('_view');
  const _classList = Symbol('_classList');
  const _content = Symbol('_content');
  const _titleElement = Symbol('_titleElement');
  const _detailContent = Symbol('_detailContent');
  const _description = Symbol('_description');
  node__notification.NotificationHelper = class NotificationHelper extends core.Object {
    new(view) {
      this[_view] = view;
      this[_classList] = null;
      this[_content] = null;
      this[_titleElement] = null;
      this[_detailContent] = null;
      this[_description] = null;
      this[_classList] = this[_view].get('classList');
      this[_content] = html.Element._check(this[_view].callMethod('querySelector', JSArrayOfString().of(['div.content'])));
      this[_titleElement] = this[_content][dartx.querySelector]('div.message p');
      this[_detailContent] = this[_content][dartx.querySelector]('div.detail-content');
      this[_description] = this[_content][dartx.querySelector]('div.meta div.description');
    }
    setNoWrap() {
      this[_detailContent][dartx.classes].toggle('detail-content-no-wrap');
    }
    setRunning() {
      try {
        dart.dsend(this[_classList], 'callMethod', 'remove', JSArrayOfString().of(['icon-info']));
        dart.dsend(this[_classList], 'callMethod', 'add', JSArrayOfString().of(['icon-running']));
      } catch (e) {
        core.print(e);
      }

    }
    get titleElement() {
      return this[_titleElement];
    }
    get detailContent() {
      return this[_detailContent];
    }
    get title() {
      return this[_titleElement][dartx.text];
    }
    set title(value) {
      this[_titleElement][dartx.text] = value;
    }
    appendText(text, opts) {
      let stderr = opts && 'stderr' in opts ? opts.stderr : false;
      dart.dsend(this[_classList], 'callMethod', 'toggle', JSArrayOfObject().of(['has-detail', true]));
      let elements = ListOfElement().from(convert.LineSplitter.split(text)[dartx.map](html.DivElement)(dart.fn(line => {
        let div = html.DivElement.new();
        div[dartx.text] = line[dartx.trimRight]();
        div[dartx.classes].toggle('line', true);
        if (dart.test(stderr)) div[dartx.classes].toggle('text-error', true);
        return div;
      }, StringToDivElement())));
      this[_detailContent][dartx.children][dartx.addAll](elements);
      if (dart.test(elements[dartx.isNotEmpty])) elements[dartx.last][dartx.scrollIntoView](html.ScrollAlignment.BOTTOM);
    }
    setSummary(text) {
      this[_description][dartx.text] = text;
    }
    showSuccess() {
      try {
        dart.dsend(this[_classList], 'callMethod', 'remove', JSArrayOfString().of(['info', 'icon-info', 'icon-running']));
        dart.dsend(this[_classList], 'callMethod', 'add', JSArrayOfString().of(['success', 'icon-check']));
      } catch (e) {
        core.print(e);
      }

    }
    showError() {
      try {
        dart.dsend(this[_classList], 'callMethod', 'remove', JSArrayOfString().of(['info', 'icon-info', 'icon-running']));
        dart.dsend(this[_classList], 'callMethod', 'add', JSArrayOfString().of(['error', 'icon-flame']));
      } catch (e) {
        core.print(e);
      }

    }
  };
  dart.setSignature(node__notification.NotificationHelper, {
    constructors: () => ({new: dart.definiteFunctionType(node__notification.NotificationHelper, [js.JsObject])}),
    methods: () => ({
      setNoWrap: dart.definiteFunctionType(dart.void, []),
      setRunning: dart.definiteFunctionType(dart.void, []),
      appendText: dart.definiteFunctionType(dart.void, [core.String], {stderr: core.bool}),
      setSummary: dart.definiteFunctionType(dart.void, [core.String]),
      showSuccess: dart.definiteFunctionType(dart.void, []),
      showError: dart.definiteFunctionType(dart.void, [])
    })
  });
  const _notification = Symbol('_notification');
  const _helper = Symbol('_helper');
  node__notification.ProcessNotifier = class ProcessNotifier extends core.Object {
    new(title) {
      this.title = title;
      this[_notification] = null;
      this[_helper] = null;
      this[_notification] = atom.atom.notifications.addInfo(this.title, {detail: '', description: 'Running…', dismissable: true});
      this[_helper] = new node__notification.NotificationHelper(js.JsObject._check(this[_notification].view));
      this[_helper].setNoWrap();
      this[_helper].setRunning();
    }
    watch(runner) {
      runner.onStdout.listen(dart.fn(str => this[_helper].appendText(str), StringTovoid$()));
      runner.onStderr.listen(dart.fn(str => this[_helper].appendText(str, {stderr: true}), StringTovoid$()));
      this[_notification].onDidDismiss.listen(dart.fn(_ => {
        if (runner.exit == null) runner.kill();
      }, dynamicTovoid()));
      return runner.onExit.then(core.int)(dart.fn(result => {
        if (result == 0) {
          this[_helper].showSuccess();
          this[_helper].setSummary('Finished.');
        } else {
          this[_helper].showError();
          this[_helper].setSummary(dart.str`Finished with exit code ${result}.`);
        }
        return result;
      }, intToint()));
    }
  };
  dart.setSignature(node__notification.ProcessNotifier, {
    constructors: () => ({new: dart.definiteFunctionType(node__notification.ProcessNotifier, [core.String])}),
    methods: () => ({watch: dart.definiteFunctionType(async.Future$(core.int), [node__process.ProcessRunner])})
  });
  node__notification.promptUser = function(prompt, opts) {
    let defaultText = opts && 'defaultText' in opts ? opts.defaultText : null;
    let selectText = opts && 'selectText' in opts ? opts.selectText : false;
    let selectLastWord = opts && 'selectLastWord' in opts ? opts.selectLastWord : false;
    let isDart = opts && 'isDart' in opts ? opts.isDart : false;
    if (defaultText == null) defaultText = '';
    let completer = CompleterOfString().new();
    let disposables = new utils__disposable.Disposables();
    let element = html.DivElement.new();
    element[dartx.setInnerHtml](dart.str`    <label>${prompt}</label>\n    <atom-text-editor mini>${defaultText}</atom-text-editor>\n`, {treeSanitizer: new atom_utils.TrustedHtmlTreeSanitizer()});
    let editorElement = element[dartx.querySelector]('atom-text-editor');
    let editorConverter = js.JsFunction._check(js.context.get('getTextEditorForElement'));
    let editor = new node__workspace.TextEditor(js.JsObject._check(editorConverter.apply(JSArrayOfElement().of([editorElement]))));
    if (dart.test(selectText)) {
      editor.selectAll();
    } else if (dart.test(selectLastWord)) {
      editor.moveToEndOfLine();
      editor.selectToBeginningOfWord();
    }
    if (dart.test(isDart)) {
      editor.setGrammar(atom.atom.grammars.grammarForScopeName('source.dart'));
    }
    async.Timer.run(dart.fn(() => {
      let obj = js.JsObject.fromBrowserObject(src__js.uncrackDart2js(editorElement));
      new node__workspace.TextEditorElement(obj).focused();
    }, VoidTovoid()));
    disposables.add(atom.atom.commands.add('atom-workspace', 'core:confirm', dart.fn(_ => {
      if (!dart.test(completer.isCompleted)) completer.complete(editor.getText());
    }, AtomEventTovoid())));
    disposables.add(atom.atom.commands.add('atom-workspace', 'core:cancel', dart.fn(_ => {
      if (!dart.test(completer.isCompleted)) completer.complete(null);
    }, AtomEventTovoid())));
    let panel = atom.atom.workspace.addModalPanel({item: element, visible: true});
    completer.future.whenComplete(dart.fn(() => {
      disposables.dispose();
      panel.destroy();
    }, VoidTodynamic$()));
    return completer.future;
  };
  dart.fn(node__notification.promptUser, String__ToFutureOfString$());
  node__package._package = null;
  dart.copyProperties(node__package, {
    get atomPackage() {
      return node__package._package;
    }
  });
  const _registeredMethods = Symbol('_registeredMethods');
  node__package.registerPackage = function(package$) {
    if (node__package._package != null) {
      dart.throw(new core.StateError('can only register one package'));
    }
    node__package._package = package$;
    let exports = js.JsObject._check(dart.dindex(js.context.get('module'), 'exports'));
    exports.set('activate', dart.fn(state => {
      if (state === void 0) state = null;
      try {
        node__package._package.activate(state);
      } catch (e) {
        let st = dart.stackTrace(e);
        core.print(dart.str`${e}`);
        core.print(dart.str`${st}`);
      }

    }, __Todynamic()));
    exports.set('deactivate', dart.fn(() => {
      try {
        node__package._package.deactivate();
      } catch (e) {
        let st = dart.stackTrace(e);
        core.print(dart.str`${e}`);
        core.print(dart.str`${st}`);
      }

    }, VoidTodynamic$()));
    exports.set('config', src__js.jsify(node__package._package.config()));
    exports.set('serialize', dart.bind(node__package._package, 'serialize'));
    package$[_registeredMethods][dartx.forEach](dart.fn((methodName, f) => {
      exports.set(methodName, dart.fn(arg => {
        let result = dart.dcall(f, arg);
        if (utils__disposable.Disposable.is(result)) {
          let m = dart.map({dispose: dart.bind(result, 'dispose')});
          return src__js.jsify(m);
        } else if (core.List.is(result) || core.Map.is(result)) {
          return src__js.jsify(result);
        } else if (js.JsObject.is(result)) {
          return result;
        } else {
          return null;
        }
      }, dynamicTodynamic()));
    }, StringAndFunctionTovoid()));
    package$[_registeredMethods] = null;
  };
  dart.lazyFn(node__package.registerPackage, () => AtomPackageTovoid());
  node__package.registerPackageDDC = function(package$) {
    let packageInfo = dart.map({activate: dart.fn(state => {
        if (state === void 0) state = null;
        try {
          package$.activate(state);
        } catch (e) {
          let st = dart.stackTrace(e);
          core.print(dart.str`${e}`);
          core.print(dart.str`${st}`);
        }

      }, __Todynamic()), deactivate: dart.fn(() => {
        try {
          package$.deactivate();
        } catch (e) {
          let st = dart.stackTrace(e);
          core.print(dart.str`${e}`);
          core.print(dart.str`${st}`);
        }

      }, VoidTodynamic$()), config: package$.config(), serialize: dart.bind(package$, 'serialize')});
    js.context.set(package$.id, src__js.jsify(packageInfo));
  };
  dart.lazyFn(node__package.registerPackageDDC, () => AtomPackageTovoid());
  node__package.AtomPackage = class AtomPackage extends core.Object {
    new(id) {
      this[_registeredMethods] = dart.map();
      this.id = id;
    }
    config() {
      return dart.map();
    }
    serialize() {
      return dart.map();
    }
    deactivate() {}
    loadPackageJson() {
      let url = dart.str`atom://${this.id}/package.json`;
      return html.HttpRequest.getString(url).then(MapOfString$dynamic())(dart.fn(str => MapOfString$dynamic().as(convert.JSON.decode(str)), StringToMapOfString$dynamic()));
    }
    getPackageVersion() {
      return this.loadPackageJson().then(core.String)(dart.fn(map => core.String._check(map[dartx.get]('version')), MapToString()));
    }
    registerServiceConsumer(methodName, callback) {
      if (this[_registeredMethods] == null) {
        dart.throw(new core.StateError('method must be registered in the package ctor'));
      }
      this[_registeredMethods][dartx.set](methodName, callback);
      return null;
    }
    registerServiceProvider(methodName, callback) {
      if (this[_registeredMethods] == null) {
        dart.throw(new core.StateError('method must be registered in the package ctor'));
      }
      this[_registeredMethods][dartx.set](methodName, callback);
      return null;
    }
  };
  dart.setSignature(node__package.AtomPackage, {
    constructors: () => ({new: dart.definiteFunctionType(node__package.AtomPackage, [core.String])}),
    methods: () => ({
      config: dart.definiteFunctionType(core.Map, []),
      serialize: dart.definiteFunctionType(dart.dynamic, []),
      deactivate: dart.definiteFunctionType(dart.void, []),
      loadPackageJson: dart.definiteFunctionType(async.Future$(core.Map$(core.String, dart.dynamic)), []),
      getPackageVersion: dart.definiteFunctionType(async.Future$(core.String), []),
      registerServiceConsumer: dart.definiteFunctionType(dart.void, [core.String, dart.functionType(utils__disposable.Disposable, [js.JsObject])]),
      registerServiceProvider: dart.definiteFunctionType(dart.void, [core.String, dart.functionType(js.JsObject, [])])
    })
  });
  node__package.PackageManager = class PackageManager extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    getApmPath() {
      return core.String._check(this.invoke('getApmPath'));
    }
    getPackageDirPaths() {
      return ListOfString().from(core.Iterable._check(this.invoke('getPackageDirPaths')));
    }
    isBundledPackage(name) {
      return core.bool._check(this.invoke('isBundledPackage', name));
    }
    isPackageLoaded(name) {
      return core.bool._check(this.invoke('isPackageLoaded', name));
    }
    isPackageDisabled(name) {
      return core.bool._check(this.invoke('isPackageDisabled', name));
    }
    isPackageActive(name) {
      return core.bool._check(this.invoke('isPackageActive', name));
    }
    getAvailablePackageNames() {
      return ListOfString().from(core.Iterable._check(this.invoke('getAvailablePackageNames')));
    }
    activatePackage(name) {
      return src__js.promiseToFuture(this.invoke('activatePackage', name));
    }
  };
  dart.setSignature(node__package.PackageManager, {
    constructors: () => ({new: dart.definiteFunctionType(node__package.PackageManager, [js.JsObject])}),
    methods: () => ({
      getApmPath: dart.definiteFunctionType(core.String, []),
      getPackageDirPaths: dart.definiteFunctionType(core.List$(core.String), []),
      isBundledPackage: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      isPackageLoaded: dart.definiteFunctionType(core.bool, [core.String]),
      isPackageDisabled: dart.definiteFunctionType(core.bool, [core.String]),
      isPackageActive: dart.definiteFunctionType(core.bool, [core.String]),
      getAvailablePackageNames: dart.definiteFunctionType(core.List$(core.String), []),
      activatePackage: dart.definiteFunctionType(async.Future, [core.String])
    })
  });
  dart.defineLazy(node__process, {
    get process() {
      return new node__process.Process._();
    }
  });
  dart.defineLazy(node__process, {
    get isWindows() {
      return node__process.process.platform[dartx.startsWith]('win');
    }
  });
  dart.defineLazy(node__process, {
    get isMac() {
      return node__process.process.platform == 'darwin';
    }
  });
  dart.defineLazy(node__process, {
    get isLinux() {
      return !dart.test(node__process.isWindows) && !dart.test(node__process.isMac);
    }
  });
  dart.defineLazy(node__process, {
    get isPosix() {
      return !dart.test(node__process.isWindows);
    }
  });
  dart.defineLazy(node__process, {
    get _logger() {
      return logging$.Logger.new('process');
    }
  });
  node__process.Process = class Process extends src__js.ProxyHolder {
    _() {
      super.new(node__node.require('process'));
    }
    get platform() {
      return core.String._check(this.obj.get('platform'));
    }
    get chromeVersion() {
      return core.String._check(dart.dindex(this.obj.get('versions'), 'chrome'));
    }
    env(key) {
      try {
        return core.String._check(dart.dindex(this.obj.get('env'), key));
      } catch (err) {
        return null;
      }

    }
  };
  dart.defineNamedConstructor(node__process.Process, '_');
  dart.setSignature(node__process.Process, {
    constructors: () => ({_: dart.definiteFunctionType(node__process.Process, [])}),
    methods: () => ({env: dart.definiteFunctionType(core.String, [core.String])})
  });
  node__process.exec = function(command, args, env) {
    if (args === void 0) args = null;
    if (env === void 0) env = null;
    let runner = new node__process.ProcessRunner(command, {args: args, env: env});
    return runner.execSimple().then(core.String)(dart.fn(result => {
      if (result.exit == 0) return result.stdout;
      dart.throw(result.exit);
    }, ProcessResultToString()));
  };
  dart.fn(node__process.exec, String__ToFutureOfString$0());
  node__process.execSync = function(command) {
    try {
      let result = core.String._check(node__node.require('child_process').callMethod('execSync', JSArrayOfString().of([command])));
      if (result == null) return null;
      result = dart.str`${result}`[dartx.trim]();
      return dart.test(result[dartx.isEmpty]) ? null : result;
    } catch (error) {
      dart.throw(dart.str`${error}`);
    }

  };
  dart.fn(node__process.execSync, StringToString());
  const _exitCompleter = Symbol('_exitCompleter');
  const _stdoutController = Symbol('_stdoutController');
  const _stderrController = Symbol('_stderrController');
  const _process = Symbol('_process');
  const _exit = Symbol('_exit');
  node__process.ProcessRunner = class ProcessRunner extends core.Object {
    new(command, opts) {
      let args = opts && 'args' in opts ? opts.args : null;
      let cwd = opts && 'cwd' in opts ? opts.cwd : null;
      let env = opts && 'env' in opts ? opts.env : null;
      this[_exitCompleter] = CompleterOfint().new();
      this[_stdoutController] = StreamControllerOfString().new();
      this[_stderrController] = StreamControllerOfString().new();
      this.command = command;
      this.args = args;
      this.cwd = cwd;
      this.env = env;
      this[_process] = null;
      this[_exit] = null;
    }
    static underShell(command, opts) {
      let args = opts && 'args' in opts ? opts.args : null;
      let cwd = opts && 'cwd' in opts ? opts.cwd : null;
      let env = opts && 'env' in opts ? opts.env : null;
      if (dart.test(node__process.isPosix)) {
        let t = node__process.ProcessRunner._shellWrangler;
        t == null ? node__process.ProcessRunner._shellWrangler = new node__process.ShellWrangler() : t;
        if (dart.test(node__process.ProcessRunner._shellWrangler.isNecessary)) {
          return new node__process.ProcessRunner(command, {args: args, cwd: cwd, env: node__process.ProcessRunner._shellWrangler.env});
        }
      }
      return new node__process.ProcessRunner(command, {args: args, cwd: cwd, env: env});
    }
    get started() {
      return this[_process] != null;
    }
    get finished() {
      return this[_exit] != null;
    }
    get exit() {
      return this[_exit];
    }
    get onExit() {
      return this[_exitCompleter].future;
    }
    get onStdout() {
      return this[_stdoutController].stream;
    }
    get onStderr() {
      return this[_stderrController].stream;
    }
    execSimple() {
      if (this[_process] != null) dart.throw(new core.StateError('exec can only be called once'));
      let stdout = new core.StringBuffer();
      let stderr = new core.StringBuffer();
      this.onStdout.listen(dart.fn(str => stdout.write(str), StringTovoid$()));
      this.onStderr.listen(dart.fn(str => stderr.write(str), StringTovoid$()));
      return this.execStreaming().then(node__process.ProcessResult)(dart.fn(code => new node__process.ProcessResult(code, stdout.toString(), stderr.toString()), intToProcessResult()));
    }
    execStreaming() {
      if (this[_process] != null) dart.throw(new core.StateError('exec can only be called once'));
      node__process._logger.fine(dart.str`exec: ${this.command} ${this.args == null ? "" : this.args[dartx.join](" ")}` + dart.str`${this.cwd == null ? "" : dart.str` (cwd=${this.cwd})`}`);
      try {
        this[_process] = node__process.BufferedProcess.create(this.command, {args: this.args, cwd: this.cwd, env: this.env, stdout: dart.fn(s => this[_stdoutController].add(s), StringTovoid$()), stderr: dart.fn(s => this[_stderrController].add(s), StringTovoid$()), exit: dart.fn(code => {
            node__process._logger.fine(dart.str`exit code: ${code} (${this.command})`);
            this[_exit] = dart.asInt(code);
            if (!dart.test(this[_exitCompleter].isCompleted)) this[_exitCompleter].complete(code);
          }, numTovoid$()), onWillThrowError: dart.fn(e => {
            if (!dart.test(this[_exitCompleter].isCompleted)) this[_exitCompleter].completeError(e);
          }, dynamicTodynamic())});
      } catch (e) {
        return FutureOfint().error(e);
      }

      return this[_exitCompleter].future;
    }
    write(str) {
      return this[_process].write(str);
    }
    kill() {
      if (this[_process] != null) this[_process].kill();
      async.Future.delayed(new core.Duration({milliseconds: 100}), dart.fn(() => {
        if (!dart.test(this[_exitCompleter].isCompleted)) this[_exitCompleter].complete(0);
      }, VoidTodynamic$()));
      return this[_exitCompleter].future;
    }
    getDescription() {
      if (this.args != null) {
        return dart.str`${this.command} ${this.args[dartx.join](' ')}`;
      } else {
        return this.command;
      }
    }
  };
  dart.setSignature(node__process.ProcessRunner, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__process.ProcessRunner, [core.String], {args: ListOfString(), cwd: core.String, env: MapOfString$String()}),
      underShell: dart.definiteFunctionType(node__process.ProcessRunner, [core.String], {args: ListOfString(), cwd: core.String, env: MapOfString$String()})
    }),
    methods: () => ({
      execSimple: dart.definiteFunctionType(async.Future$(node__process.ProcessResult), []),
      execStreaming: dart.definiteFunctionType(async.Future$(core.int), []),
      write: dart.definiteFunctionType(core.bool, [core.String]),
      kill: dart.definiteFunctionType(async.Future$(core.int), []),
      getDescription: dart.definiteFunctionType(core.String, [])
    })
  });
  node__process.ProcessRunner._shellWrangler = null;
  node__process.ProcessResult = class ProcessResult extends core.Object {
    new(exit, stdout, stderr) {
      this.exit = exit;
      this.stdout = stdout;
      this.stderr = stderr;
    }
    toString() {
      return dart.str`${this.exit}`;
    }
  };
  dart.setSignature(node__process.ProcessResult, {
    constructors: () => ({new: dart.definiteFunctionType(node__process.ProcessResult, [core.int, core.String, core.String])})
  });
  node__process.queryEnv = function(variable) {
    try {
      return node__process.execSync(dart.str`echo \$${variable}`);
    } catch (e) {
      return null;
    }

  };
  dart.fn(node__process.queryEnv, StringToString());
  const _currentShell = Symbol('_currentShell');
  const _targetShell = Symbol('_targetShell');
  const _env = Symbol('_env');
  node__process.ShellWrangler = class ShellWrangler extends core.Object {
    new() {
      this[_currentShell] = null;
      this[_targetShell] = null;
      this[_env] = null;
      this[_currentShell] = node__process.queryEnv('0');
      this[_targetShell] = node__process.queryEnv('SHELL');
      if (dart.test(this.isNecessary)) {
        let result = null;
        if (dart.test(this[_targetShell][dartx.endsWith]('/csh')) || dart.test(this[_targetShell][dartx.endsWith]('/tcsh'))) {
          result = node__process.execSync(dart.str`${this[_targetShell]} -c 'printenv'`);
        } else {
          result = node__process.execSync(dart.str`${this[_targetShell]} -l -c 'printenv'`);
        }
        this[_env] = dart.map();
        for (let line of result[dartx.split]('\n')) {
          let index = line[dartx.indexOf]('=');
          if (index != -1) {
            let key = line[dartx.substring](0, index);
            let value = line[dartx.substring](dart.notNull(index) + 1);
            if (key != 'TERM') this[_env][dartx.set](key, value);
          }
        }
      }
    }
    get isNecessary() {
      if (dart.test(node__process.isMac)) {
        return this[_currentShell] == '/bin/sh';
      } else {
        return this[_currentShell] != this[_targetShell];
      }
    }
    get targetShell() {
      return this[_targetShell];
    }
    getEnv(variable) {
      return this[_env] == null ? null : this[_env][dartx.get](variable);
    }
    get env() {
      return this[_env];
    }
    toString() {
      return dart.str`${this[_currentShell]} ${this[_targetShell]} ${this[_env]}`;
    }
  };
  dart.setSignature(node__process.ShellWrangler, {
    constructors: () => ({new: dart.definiteFunctionType(node__process.ShellWrangler, [])}),
    methods: () => ({getEnv: dart.definiteFunctionType(core.String, [core.String])})
  });
  const _stdin = Symbol('_stdin');
  node__process.BufferedProcess = class BufferedProcess extends src__js.ProxyHolder {
    static create(command, opts) {
      let args = opts && 'args' in opts ? opts.args : null;
      let stdout = opts && 'stdout' in opts ? opts.stdout : null;
      let stderr = opts && 'stderr' in opts ? opts.stderr : null;
      let exit = opts && 'exit' in opts ? opts.exit : null;
      let cwd = opts && 'cwd' in opts ? opts.cwd : null;
      let env = opts && 'env' in opts ? opts.env : null;
      let onWillThrowError = opts && 'onWillThrowError' in opts ? opts.onWillThrowError : null;
      let options = dart.map({command: command});
      if (args != null) options[dartx.set]('args', args);
      if (stdout != null) options[dartx.set]('stdout', stdout);
      if (stderr != null) options[dartx.set]('stderr', stderr);
      if (exit != null) options[dartx.set]('exit', exit);
      if (onWillThrowError != null) options[dartx.set]('onWillThrowError', dart.fn(e => {
        e.callMethod('handle');
        dart.dcall(onWillThrowError, e.get('error'));
      }, JsObjectTodynamic()));
      if (cwd != null || env != null) {
        let nodeOptions = dart.map();
        if (cwd != null) nodeOptions[dartx.set]('cwd', cwd);
        if (env != null) nodeOptions[dartx.set]('env', src__js.jsify(env));
        options[dartx.set]('options', nodeOptions);
      }
      let ctor = js.JsFunction._check(node__node.require('atom').get('BufferedProcess'));
      return new node__process.BufferedProcess._(js.JsObject.new(ctor, JSArrayOfJsObject().of([js.JsObject.jsify(options)])));
    }
    _(object) {
      this[_stdin] = null;
      super.new(object);
    }
    write(str) {
      if (this[_stdin] == null) this[_stdin] = js.JsObject._check(dart.dindex(this.obj.get('process'), 'stdin'));
      return core.bool._check(this[_stdin].callMethod('write', JSArrayOfString().of([str, 'utf8'])));
    }
    kill() {
      return this.invoke('kill');
    }
  };
  dart.defineNamedConstructor(node__process.BufferedProcess, '_');
  dart.setSignature(node__process.BufferedProcess, {
    constructors: () => ({_: dart.definiteFunctionType(node__process.BufferedProcess, [js.JsObject])}),
    methods: () => ({
      write: dart.definiteFunctionType(core.bool, [core.String]),
      kill: dart.definiteFunctionType(dart.void, [])
    }),
    statics: () => ({create: dart.definiteFunctionType(node__process.BufferedProcess, [core.String], {args: ListOfString(), stdout: StringTovoid(), stderr: StringTovoid(), exit: numTovoid(), cwd: core.String, env: MapOfString$String(), onWillThrowError: core.Function})}),
    names: ['create']
  });
  dart.defineLazy(node__shell, {
    get shell() {
      return new node__shell.Shell._();
    }
  });
  node__shell.Shell = class Shell extends src__js.ProxyHolder {
    _() {
      super.new(node__node.require('shell'));
    }
    openItem(path) {
      return this.invoke('openItem', path);
    }
    showItemInFolder(path) {
      return this.invoke('showItemInFolder', path);
    }
    openExternal(url) {
      return this.invoke('openExternal', url);
    }
  };
  dart.defineNamedConstructor(node__shell.Shell, '_');
  dart.setSignature(node__shell.Shell, {
    constructors: () => ({_: dart.definiteFunctionType(node__shell.Shell, [])}),
    methods: () => ({
      openItem: dart.definiteFunctionType(dart.dynamic, [core.String]),
      showItemInFolder: dart.definiteFunctionType(dart.dynamic, [core.String]),
      openExternal: dart.definiteFunctionType(dart.dynamic, [core.String])
    })
  });
  dart.defineLazy(node__workspace, {
    get _logger() {
      return logging$.Logger.new('workspace');
    }
  });
  node__workspace.ViewRegistry = class ViewRegistry extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
      node__workspace.ViewRegistry._instance = this;
    }
    getView(object) {
      return this.invoke('getView', object);
    }
  };
  dart.setSignature(node__workspace.ViewRegistry, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.ViewRegistry, [js.JsObject])}),
    methods: () => ({getView: dart.definiteFunctionType(dart.dynamic, [dart.dynamic])})
  });
  node__workspace.ViewRegistry._instance = null;
  const _openSerializer = Symbol('_openSerializer');
  const _panelOptions = Symbol('_panelOptions');
  node__workspace.Workspace = class Workspace extends src__js.ProxyHolder {
    new(object) {
      this[_openSerializer] = new (FutureSerializerOfTextEditor())();
      super.new(object);
    }
    getTextEditors() {
      return ListOfTextEditor().from(core.Iterable._check(dart.dsend(this.invoke('getTextEditors'), 'map', dart.fn(e => new node__workspace.TextEditor(js.JsObject._check(e)), dynamicToTextEditor()))));
    }
    getActiveTextEditor() {
      let result = this.invoke('getActiveTextEditor');
      return result == null ? null : new node__workspace.TextEditor(js.JsObject._check(result));
    }
    observeTextEditors(callback) {
      let disposable = this.invoke('observeTextEditors', dart.fn(ed => callback(new node__workspace.TextEditor(js.JsObject._check(ed))), dynamicTovoid()));
      return new src__js.JsDisposable(js.JsObject._check(disposable));
    }
    observeActivePaneItem(callback) {
      let disposable = this.invoke('observeActivePaneItem', dart.fn(item => dart.dcall(callback, item), dynamicTovoid()));
      return new src__js.JsDisposable(js.JsObject._check(disposable));
    }
    addModalPanel(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let priority = opts && 'priority' in opts ? opts.priority : null;
      return new node__workspace.Panel(js.JsObject._check(this.invoke('addModalPanel', this[_panelOptions](item, visible, priority))));
    }
    addTopPanel(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let priority = opts && 'priority' in opts ? opts.priority : null;
      return new node__workspace.Panel(js.JsObject._check(this.invoke('addTopPanel', this[_panelOptions](item, visible, priority))));
    }
    addBottomPanel(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let priority = opts && 'priority' in opts ? opts.priority : null;
      return new node__workspace.Panel(js.JsObject._check(this.invoke('addBottomPanel', this[_panelOptions](item, visible, priority))));
    }
    addLeftPanel(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let priority = opts && 'priority' in opts ? opts.priority : null;
      return new node__workspace.Panel(js.JsObject._check(this.invoke('addLeftPanel', this[_panelOptions](item, visible, priority))));
    }
    addRightPanel(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let priority = opts && 'priority' in opts ? opts.priority : null;
      return new node__workspace.Panel(js.JsObject._check(this.invoke('addRightPanel', this[_panelOptions](item, visible, priority))));
    }
    paneForItem(item) {
      return node__workspace.Pane.new(js.JsObject._check(this.invoke('paneForItem', item)));
    }
    open(url, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this[_openSerializer].perform(dart.fn(() => {
        let future = src__js.promiseToFuture(this.invoke('open', url, options));
        return future.then(node__workspace.TextEditor)(dart.fn(result => {
          if (result == null) dart.throw(dart.str`unable to open ${url}`);
          let editor = new node__workspace.TextEditor(js.JsObject._check(result));
          return dart.test(editor.isValid()) ? editor : null;
        }, dynamicToTextEditor()));
      }, VoidToFutureOfTextEditor()));
    }
    openPending(url, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      if (options == null) {
        options = dart.map({pending: true});
      } else {
        options[dartx.set]('pending', true);
      }
      return this.open(url, {options: options});
    }
    openConfigPage(opts) {
      let packageID = opts && 'packageID' in opts ? opts.packageID : null;
      if (packageID == null) {
        return this.open('atom://config');
      } else {
        return this.open(dart.str`atom://config/packages/${packageID}`);
      }
    }
    addOpener(opener) {
      return new src__js.JsDisposable(js.JsObject._check(this.invoke('addOpener', dart.fn((url, options) => {
        let m = core.Map._check(options == null ? dart.map() : src__js.jsObjectToDart(js.JsObject._check(options)));
        return opener(core.String._check(url), m);
      }, dynamicAnddynamicTodynamic$()))));
    }
    saveAll() {
      try {
        this.invoke('saveAll');
      } catch (e) {
        node__workspace._logger.info('exception calling saveAll', e);
      }

    }
    [_panelOptions](item, visible, priority) {
      let options = dart.map({item: item});
      if (visible != null) options[dartx.set]('visible', visible);
      if (priority != null) options[dartx.set]('priority', priority);
      return options;
    }
  };
  dart.setSignature(node__workspace.Workspace, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Workspace, [js.JsObject])}),
    methods: () => ({
      getTextEditors: dart.definiteFunctionType(core.List$(node__workspace.TextEditor), []),
      getActiveTextEditor: dart.definiteFunctionType(node__workspace.TextEditor, []),
      observeTextEditors: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.void, [node__workspace.TextEditor])]),
      observeActivePaneItem: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.void, [dart.dynamic])]),
      addModalPanel: dart.definiteFunctionType(node__workspace.Panel, [], {item: dart.dynamic, visible: core.bool, priority: core.int}),
      addTopPanel: dart.definiteFunctionType(node__workspace.Panel, [], {item: dart.dynamic, visible: core.bool, priority: core.int}),
      addBottomPanel: dart.definiteFunctionType(node__workspace.Panel, [], {item: dart.dynamic, visible: core.bool, priority: core.int}),
      addLeftPanel: dart.definiteFunctionType(node__workspace.Panel, [], {item: dart.dynamic, visible: core.bool, priority: core.int}),
      addRightPanel: dart.definiteFunctionType(node__workspace.Panel, [], {item: dart.dynamic, visible: core.bool, priority: core.int}),
      paneForItem: dart.definiteFunctionType(node__workspace.Pane, [dart.dynamic]),
      open: dart.definiteFunctionType(async.Future$(node__workspace.TextEditor), [core.String], {options: core.Map}),
      openPending: dart.definiteFunctionType(async.Future$(node__workspace.TextEditor), [core.String], {options: core.Map}),
      openConfigPage: dart.definiteFunctionType(async.Future$(node__workspace.TextEditor), [], {packageID: core.String}),
      addOpener: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.dynamic, [core.String, core.Map])]),
      saveAll: dart.definiteFunctionType(dart.void, []),
      [_panelOptions]: dart.definiteFunctionType(core.Map, [dart.dynamic, core.bool, core.int])
    })
  });
  node__workspace.Project = class Project extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    get onDidChangePaths() {
      return StreamOfListOfString().as(this.eventStream('onDidChangePaths'));
    }
    getPaths() {
      return ListOfString().from(core.Iterable._check(this.invoke('getPaths')));
    }
    getDirectories() {
      return ListOfDirectory().from(core.Iterable._check(dart.dsend(this.invoke('getDirectories'), 'map', dart.fn(dir => new node__fs.Directory(js.JsObject._check(dir)), dynamicToDirectory()))));
    }
    addPath(path) {
      return this.invoke('addPath', path);
    }
    removePath(path) {
      return this.invoke('removePath', path);
    }
    relativizePath(fullPath) {
      return ListOfString().from(core.Iterable._check(this.invoke('relativizePath', fullPath)));
    }
    contains(pathToCheck) {
      return core.bool._check(this.invoke('contains', pathToCheck));
    }
  };
  dart.setSignature(node__workspace.Project, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Project, [js.JsObject])}),
    methods: () => ({
      getPaths: dart.definiteFunctionType(core.List$(core.String), []),
      getDirectories: dart.definiteFunctionType(core.List$(node__fs.Directory), []),
      addPath: dart.definiteFunctionType(dart.void, [core.String]),
      removePath: dart.definiteFunctionType(dart.void, [core.String]),
      relativizePath: dart.definiteFunctionType(core.List$(core.String), [core.String]),
      contains: dart.definiteFunctionType(core.bool, [core.String])
    })
  });
  node__workspace.Panel = class Panel extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    get onDidChangeVisible() {
      return StreamOfbool().as(this.eventStream('onDidChangeVisible'));
    }
    get onDidDestroy() {
      return this.eventStream('onDidDestroy').map(node__workspace.Panel)(dart.fn(obj => new node__workspace.Panel(js.JsObject._check(obj)), dynamicToPanel()));
    }
    isVisible() {
      return core.bool._check(this.invoke('isVisible'));
    }
    show() {
      return this.invoke('show');
    }
    hide() {
      return this.invoke('hide');
    }
    destroy() {
      return this.invoke('destroy');
    }
  };
  dart.setSignature(node__workspace.Panel, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Panel, [js.JsObject])}),
    methods: () => ({
      isVisible: dart.definiteFunctionType(core.bool, []),
      show: dart.definiteFunctionType(dart.void, []),
      hide: dart.definiteFunctionType(dart.void, []),
      destroy: dart.definiteFunctionType(dart.void, [])
    })
  });
  node__workspace.Pane = class Pane extends src__js.ProxyHolder {
    static new(object) {
      return object == null ? null : new node__workspace.Pane._(object);
    }
    _(object) {
      super.new(object);
    }
    activateItem(item) {
      return this.invoke('activateItem', item);
    }
  };
  dart.defineNamedConstructor(node__workspace.Pane, '_');
  dart.setSignature(node__workspace.Pane, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__workspace.Pane, [js.JsObject]),
      _: dart.definiteFunctionType(node__workspace.Pane, [js.JsObject])
    }),
    methods: () => ({activateItem: dart.definiteFunctionType(dart.void, [dart.dynamic])})
  });
  node__workspace.Gutter = class Gutter extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    get name() {
      return core.String._check(this.obj.get('name'));
    }
    hide() {
      return this.invoke('hide');
    }
    show() {
      return this.invoke('show');
    }
    isVisible() {
      return core.bool._check(this.invoke('isVisible'));
    }
    onDidDestroy(callback) {
      return new src__js.JsDisposable(js.JsObject._check(this.invoke('onDidDestroy', callback)));
    }
    toString() {
      return dart.str`[Gutter ${this.name}]`;
    }
  };
  dart.setSignature(node__workspace.Gutter, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Gutter, [js.JsObject])}),
    methods: () => ({
      hide: dart.definiteFunctionType(dart.void, []),
      show: dart.definiteFunctionType(dart.void, []),
      isVisible: dart.definiteFunctionType(core.bool, []),
      onDidDestroy: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.void, [])])
    })
  });
  node__workspace.Marker = class Marker extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    get onDidChange() {
      return this.eventStream('onDidChange');
    }
    get onDidDestroy() {
      return this.eventStream('onDidDestroy');
    }
    isValid() {
      return core.bool._check(this.invoke('isValid'));
    }
    isDestroyed() {
      return this.invoke('isDestroyed');
    }
    getProperties() {
      return MapOfString$dynamic().as(this.invoke('getProperties'));
    }
    getBufferRange() {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('getBufferRange')));
    }
    destroy() {
      return this.invoke('destroy');
    }
  };
  dart.setSignature(node__workspace.Marker, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Marker, [js.JsObject])}),
    methods: () => ({
      isValid: dart.definiteFunctionType(core.bool, []),
      isDestroyed: dart.definiteFunctionType(dart.void, []),
      getProperties: dart.definiteFunctionType(core.Map$(core.String, dart.dynamic), []),
      getBufferRange: dart.definiteFunctionType(node__workspace.Range, []),
      destroy: dart.definiteFunctionType(dart.void, [])
    })
  });
  node__workspace.Decoration = class Decoration extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    getId() {
      return core.num._check(this.invoke('getId'));
    }
    getProperties() {
      return MapOfString$dynamic().as(this.invoke('getProperties'));
    }
    setProperties(properties) {
      return this.invoke('setProperties', properties);
    }
  };
  dart.setSignature(node__workspace.Decoration, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.Decoration, [js.JsObject])}),
    methods: () => ({
      getId: dart.definiteFunctionType(core.num, []),
      getProperties: dart.definiteFunctionType(core.Map$(core.String, dart.dynamic), []),
      setProperties: dart.definiteFunctionType(dart.void, [core.Map$(core.String, dart.dynamic)])
    })
  });
  node__workspace.Point = class Point extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    coords(row, column) {
      super.new(node__workspace._create('Point', row, column));
    }
    get row() {
      return core.int._check(this.obj.get('row'));
    }
    get column() {
      return core.int._check(this.obj.get('column'));
    }
    ['=='](other) {
      return node__workspace.Point.is(other) && this.row == other.row && this.column == other.column;
    }
    get hashCode() {
      return (dart.notNull(this.row) << 4 ^ dart.notNull(this.column)) >>> 0;
    }
    toString() {
      return core.String._check(this.invoke('toString'));
    }
  };
  dart.defineNamedConstructor(node__workspace.Point, 'coords');
  dart.setSignature(node__workspace.Point, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__workspace.Point, [js.JsObject]),
      coords: dart.definiteFunctionType(node__workspace.Point, [core.int, core.int])
    })
  });
  node__workspace.Range = class Range extends src__js.ProxyHolder {
    static new(object) {
      return object == null ? null : new node__workspace.Range._(object);
    }
    fromPoints(start, end) {
      super.new(node__workspace._create('Range', start.obj, end.obj));
    }
    _(object) {
      super.new(node__workspace._cvt(object));
    }
    isEmpty() {
      return core.bool._check(this.invoke('isEmpty'));
    }
    isNotEmpty() {
      return !dart.test(this.isEmpty());
    }
    isSingleLine() {
      return core.bool._check(this.invoke('isSingleLine'));
    }
    getRowCount() {
      return core.int._check(this.invoke('getRowCount'));
    }
    get start() {
      return new node__workspace.Point(js.JsObject._check(this.obj.get('start')));
    }
    get end() {
      return new node__workspace.Point(js.JsObject._check(this.obj.get('end')));
    }
    ['=='](other) {
      return node__workspace.Range.is(other) && dart.equals(this.start, other.start) && dart.equals(this.end, other.end);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.start)) ^ dart.notNull(dart.hashCode(this.end))) >>> 0;
    }
    toString() {
      return core.String._check(this.invoke('toString'));
    }
  };
  dart.defineNamedConstructor(node__workspace.Range, 'fromPoints');
  dart.defineNamedConstructor(node__workspace.Range, '_');
  dart.setSignature(node__workspace.Range, {
    constructors: () => ({
      new: dart.definiteFunctionType(node__workspace.Range, [js.JsObject]),
      fromPoints: dart.definiteFunctionType(node__workspace.Range, [node__workspace.Point, node__workspace.Point]),
      _: dart.definiteFunctionType(node__workspace.Range, [js.JsObject])
    }),
    methods: () => ({
      isEmpty: dart.definiteFunctionType(core.bool, []),
      isNotEmpty: dart.definiteFunctionType(core.bool, []),
      isSingleLine: dart.definiteFunctionType(core.bool, []),
      getRowCount: dart.definiteFunctionType(core.int, [])
    })
  });
  node__workspace.TextBuffer = class TextBuffer extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    getPath() {
      return core.String._check(this.invoke('getPath'));
    }
    characterIndexForPosition(position) {
      return core.int._check(this.invoke('characterIndexForPosition', position));
    }
    positionForCharacterIndex(offset) {
      return new node__workspace.Point(js.JsObject._check(this.invoke('positionForCharacterIndex', offset)));
    }
    setTextInRange(range, text) {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('setTextInRange', range, text)));
    }
    createCheckpoint() {
      return this.invoke('createCheckpoint');
    }
    groupChangesSinceCheckpoint(checkpoint) {
      return core.bool._check(this.invoke('groupChangesSinceCheckpoint', checkpoint));
    }
    revertToCheckpoint(checkpoint) {
      return core.bool._check(this.invoke('revertToCheckpoint', checkpoint));
    }
    atomic(fn) {
      let checkpoint = this.createCheckpoint();
      try {
        fn();
        this.groupChangesSinceCheckpoint(checkpoint);
      } catch (e) {
        this.revertToCheckpoint(checkpoint);
        node__workspace._logger.warning(dart.str`transaction failed: ${e}`);
      }

    }
    rangeForRow(row, includeNewline) {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('rangeForRow', row, includeNewline)));
    }
    get onWillSave() {
      return this.eventStream('onWillSave');
    }
  };
  dart.setSignature(node__workspace.TextBuffer, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.TextBuffer, [js.JsObject])}),
    methods: () => ({
      getPath: dart.definiteFunctionType(core.String, []),
      characterIndexForPosition: dart.definiteFunctionType(core.int, [node__workspace.Point]),
      positionForCharacterIndex: dart.definiteFunctionType(node__workspace.Point, [core.int]),
      setTextInRange: dart.definiteFunctionType(node__workspace.Range, [node__workspace.Range, core.String]),
      createCheckpoint: dart.definiteFunctionType(dart.dynamic, []),
      groupChangesSinceCheckpoint: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      revertToCheckpoint: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      atomic: dart.definiteFunctionType(dart.void, [dart.functionType(dart.void, [])]),
      rangeForRow: dart.definiteFunctionType(node__workspace.Range, [core.int, core.bool])
    })
  });
  node__workspace.TextEditorElement = class TextEditorElement extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    getModel() {
      return new node__workspace.TextEditor(js.JsObject._check(this.invoke('getModel')));
    }
    get focusOnAttach() {
      return core.bool._check(this.obj.get('focusOnAttach'));
    }
    set focusOnAttach(value) {
      this.obj.set('focusOnAttach', value);
    }
    focused() {
      return this.invoke('focused');
    }
  };
  dart.setSignature(node__workspace.TextEditorElement, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.TextEditorElement, [js.JsObject])}),
    methods: () => ({
      getModel: dart.definiteFunctionType(node__workspace.TextEditor, []),
      focused: dart.definiteFunctionType(dart.void, [])
    })
  });
  node__workspace.TextEditor = class TextEditor extends src__js.ProxyHolder {
    new(object) {
      super.new(node__workspace._cvt(object));
    }
    getElement() {
      return new node__workspace.TextEditorElement(js.JsObject._check(this.invoke('getElement')));
    }
    isValid() {
      try {
        this.getTitle();
        this.getLongTitle();
        this.getPath();
        return true;
      } catch (e) {
        return false;
      }

    }
    getBuffer() {
      return new node__workspace.TextBuffer(js.JsObject._check(this.invoke('getBuffer')));
    }
    getTitle() {
      return core.String._check(this.invoke('getTitle'));
    }
    getLongTitle() {
      return core.String._check(this.invoke('getLongTitle'));
    }
    getPath() {
      return core.String._check(this.invoke('getPath'));
    }
    isModified() {
      return core.bool._check(this.invoke('isModified'));
    }
    isEmpty() {
      return core.bool._check(this.invoke('isEmpty'));
    }
    isNotEmpty() {
      return !dart.test(this.isEmpty());
    }
    insertNewline() {
      return this.invoke('insertNewline');
    }
    backspace() {
      return this.invoke('backspace');
    }
    setText(text) {
      return this.invoke('setText', text);
    }
    insertText(text, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let result = this.invoke('insertText', text, options);
      return typeof result == 'boolean' ? result : node__workspace.Range.new(js.JsObject._check(result));
    }
    selectAll() {
      return core.String._check(this.invoke('selectAll'));
    }
    getRootScopeDescriptor() {
      return this.invoke('getRootScopeDescriptor');
    }
    scopeDescriptorForBufferPosition(bufferPosition) {
      return node__config.ScopeDescriptor.new(js.JsObject._check(this.invoke('scopeDescriptorForBufferPosition', bufferPosition)));
    }
    getText() {
      return core.String._check(this.invoke('getText'));
    }
    getSelectedText() {
      return core.String._check(this.invoke('getSelectedText'));
    }
    getTextInBufferRange(range) {
      return core.String._check(this.invoke('getTextInBufferRange', range));
    }
    getSelectedBufferRange() {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('getSelectedBufferRange')));
    }
    setSelectedBufferRange(bufferRange) {
      return this.invoke('setSelectedBufferRange', bufferRange);
    }
    setSelectedBufferRanges(ranges) {
      return this.invoke('setSelectedBufferRanges', ranges[dartx.map](js.JsObject)(dart.fn(r => r.obj, RangeToJsObject()))[dartx.toList]());
    }
    getCurrentParagraphBufferRange() {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('getCurrentParagraphBufferRange')));
    }
    setTextInBufferRange(range, text) {
      return node__workspace.Range.new(js.JsObject._check(this.invoke('setTextInBufferRange', range, text)));
    }
    setCursorBufferPosition(point) {
      return this.invoke('setCursorBufferPosition', point);
    }
    selectRight(columnCount) {
      return this.invoke('selectRight', columnCount);
    }
    moveUp(lineCount) {
      return this.invoke('moveUp', lineCount);
    }
    moveDown(lineCount) {
      return this.invoke('moveDown', lineCount);
    }
    moveLeft(rowCount) {
      return this.invoke('moveLeft', rowCount);
    }
    moveRight(rowCount) {
      return this.invoke('moveRight', rowCount);
    }
    moveToBeginningOfLine() {
      return this.invoke('moveToBeginningOfLine');
    }
    moveToBeginningOfScreenLine() {
      return this.invoke('moveToBeginningOfScreenLine');
    }
    moveToFirstCharacterOfLine() {
      return this.invoke('moveToFirstCharacterOfLine');
    }
    moveToEndOfLine() {
      return this.invoke('moveToEndOfLine');
    }
    moveToEndOfScreenLine() {
      return this.invoke('moveToEndOfScreenLine');
    }
    moveToBeginningOfWord() {
      return this.invoke('moveToBeginningOfWord');
    }
    moveToEndOfWord() {
      return this.invoke('moveToEndOfWord');
    }
    lineTextForBufferRow(bufferRow) {
      return core.String._check(this.invoke('lineTextForBufferRow', bufferRow));
    }
    markBufferRange(range, opts) {
      let properties = opts && 'properties' in opts ? opts.properties : null;
      let persistent = opts && 'persistent' in opts ? opts.persistent : null;
      if (properties == null && persistent != null) {
        properties = dart.map({persistent: persistent});
      } else if (persistent != null) {
        properties[dartx.set]('persistent', persistent);
      }
      return new node__workspace.Marker(js.JsObject._check(this.invoke('markBufferRange', range, properties)));
    }
    decorateMarker(marker, decorationParams) {
      return new node__workspace.Decoration(js.JsObject._check(this.invoke('decorateMarker', marker, decorationParams)));
    }
    getGrammar() {
      return node__config.Grammar.new(js.JsObject._check(this.invoke('getGrammar')));
    }
    setGrammar(grammar) {
      this.invoke('setGrammar', grammar);
    }
    undo() {
      return this.invoke('undo');
    }
    redo() {
      return this.invoke('redo');
    }
    createCheckpoint() {
      return this.invoke('createCheckpoint');
    }
    groupChangesSinceCheckpoint(checkpoint) {
      return core.bool._check(this.invoke('groupChangesSinceCheckpoint', checkpoint));
    }
    revertToCheckpoint(checkpoint) {
      return core.bool._check(this.invoke('revertToCheckpoint', checkpoint));
    }
    atomic(fn) {
      let checkpoint = this.createCheckpoint();
      try {
        fn();
        this.groupChangesSinceCheckpoint(checkpoint);
      } catch (e) {
        this.revertToCheckpoint(checkpoint);
        node__workspace._logger.warning(dart.str`transaction failed: ${e}`);
      }

    }
    save() {
      return this.invoke('save');
    }
    observeGrammar(callback) {
      let disposable = this.invoke('observeGrammar', dart.fn(g => callback(node__config.Grammar.new(js.JsObject._check(g))), dynamicTovoid()));
      return new src__js.JsDisposable(js.JsObject._check(disposable));
    }
    isBufferRowCommented(bufferRow) {
      return core.bool._check(this.invoke('isBufferRowCommented', bufferRow));
    }
    screenPositionForPixelPosition(position) {
      return node__workspace.Point._check(this.invoke('screenPositionForPixelPosition', position));
    }
    pixelPositionForScreenPosition(position) {
      return node__workspace.Point._check(this.invoke('pixelPositionForScreenPosition', position));
    }
    screenPositionForBufferPosition(position) {
      return node__workspace.Point._check(this.invoke('screenPositionForBufferPosition', position));
    }
    bufferPositionForScreenPosition(position) {
      return node__workspace.Point._check(this.invoke('bufferPositionForScreenPosition', position));
    }
    scrollToBufferPosition(bufferPosition, opts) {
      let center = opts && 'center' in opts ? opts.center : null;
      let options = null;
      if (center != null) options = dart.map({center: center});
      this.invoke('scrollToBufferPosition', bufferPosition, options);
    }
    selectLinesContainingCursors() {
      return this.invoke('selectLinesContainingCursors');
    }
    get onDidChange() {
      return this.eventStream('onDidChange');
    }
    get onDidStopChanging() {
      return this.eventStream('onDidStopChanging');
    }
    get onDidChangeTitle() {
      return this.eventStream('onDidChangeTitle');
    }
    get onDidDestroy() {
      return this.eventStream('onDidDestroy');
    }
    get onDidSave() {
      return this.eventStream('onDidSave');
    }
    get onDidChangeCursorPosition() {
      return this.eventStream('onDidChangeCursorPosition').map(node__workspace.Point)(dart.fn(e => new node__workspace.Point(js.JsObject._check(dart.dindex(e, 'newBufferPosition'))), dynamicToPoint()));
    }
    get view() {
      return node__workspace.ViewRegistry._instance.getView(this.obj);
    }
    selectToBeginningOfWord() {
      return this.invoke('selectToBeginningOfWord');
    }
    getCursorBufferPosition() {
      return new node__workspace.Point(js.JsObject._check(this.invoke('getCursorBufferPosition')));
    }
    setPlaceholderText(placeholderText) {
      return this.invoke('setPlaceholderText', placeholderText);
    }
    getGutters() {
      return ListOfGutter().from(core.Iterable._check(dart.dsend(this.invoke('getGutters'), 'map', dart.fn(g => new node__workspace.Gutter(js.JsObject._check(g)), dynamicToGutter()))));
    }
    gutterWithName(name) {
      let result = this.invoke('gutterWithName', name);
      return result == null ? null : new node__workspace.Gutter(js.JsObject._check(result));
    }
    observeGutters(callback) {
      let disposable = this.invoke('observeGutters', dart.fn(obj => {
        callback(new node__workspace.Gutter(js.JsObject._check(obj)));
      }, dynamicTodynamic()));
      return new src__js.JsDisposable(js.JsObject._check(disposable));
    }
    get onDidAddGutter() {
      return this.eventStream('onDidAddGutter').map(node__workspace.Gutter)(dart.fn(g => new node__workspace.Gutter(js.JsObject._check(g)), dynamicToGutter()));
    }
    get onDidRemoveGutter() {
      return this.eventStream('onDidRemoveGutter').map(node__workspace.Gutter)(dart.fn(g => new node__workspace.Gutter(js.JsObject._check(g)), dynamicToGutter()));
    }
    get hashCode() {
      return dart.hashCode(this.obj);
    }
    ['=='](other) {
      return node__workspace.TextEditor.is(other) && dart.equals(this.obj, other.obj);
    }
    toString() {
      return this.getTitle();
    }
  };
  dart.setSignature(node__workspace.TextEditor, {
    constructors: () => ({new: dart.definiteFunctionType(node__workspace.TextEditor, [js.JsObject])}),
    methods: () => ({
      getElement: dart.definiteFunctionType(node__workspace.TextEditorElement, []),
      isValid: dart.definiteFunctionType(core.bool, []),
      getBuffer: dart.definiteFunctionType(node__workspace.TextBuffer, []),
      getTitle: dart.definiteFunctionType(core.String, []),
      getLongTitle: dart.definiteFunctionType(core.String, []),
      getPath: dart.definiteFunctionType(core.String, []),
      isModified: dart.definiteFunctionType(core.bool, []),
      isEmpty: dart.definiteFunctionType(core.bool, []),
      isNotEmpty: dart.definiteFunctionType(core.bool, []),
      insertNewline: dart.definiteFunctionType(dart.void, []),
      backspace: dart.definiteFunctionType(dart.void, []),
      setText: dart.definiteFunctionType(dart.void, [core.String]),
      insertText: dart.definiteFunctionType(dart.dynamic, [core.String], {options: core.Map}),
      selectAll: dart.definiteFunctionType(core.String, []),
      getRootScopeDescriptor: dart.definiteFunctionType(dart.dynamic, []),
      scopeDescriptorForBufferPosition: dart.definiteFunctionType(node__config.ScopeDescriptor, [node__workspace.Point]),
      getText: dart.definiteFunctionType(core.String, []),
      getSelectedText: dart.definiteFunctionType(core.String, []),
      getTextInBufferRange: dart.definiteFunctionType(core.String, [node__workspace.Range]),
      getSelectedBufferRange: dart.definiteFunctionType(node__workspace.Range, []),
      setSelectedBufferRange: dart.definiteFunctionType(dart.void, [node__workspace.Range]),
      setSelectedBufferRanges: dart.definiteFunctionType(dart.void, [core.List$(node__workspace.Range)]),
      getCurrentParagraphBufferRange: dart.definiteFunctionType(node__workspace.Range, []),
      setTextInBufferRange: dart.definiteFunctionType(node__workspace.Range, [node__workspace.Range, core.String]),
      setCursorBufferPosition: dart.definiteFunctionType(dart.void, [node__workspace.Point]),
      selectRight: dart.definiteFunctionType(dart.void, [dart.dynamic]),
      moveUp: dart.definiteFunctionType(dart.void, [core.int]),
      moveDown: dart.definiteFunctionType(dart.void, [core.int]),
      moveLeft: dart.definiteFunctionType(dart.void, [core.int]),
      moveRight: dart.definiteFunctionType(dart.void, [core.int]),
      moveToBeginningOfLine: dart.definiteFunctionType(dart.void, []),
      moveToBeginningOfScreenLine: dart.definiteFunctionType(dart.void, []),
      moveToFirstCharacterOfLine: dart.definiteFunctionType(dart.void, []),
      moveToEndOfLine: dart.definiteFunctionType(dart.void, []),
      moveToEndOfScreenLine: dart.definiteFunctionType(dart.void, []),
      moveToBeginningOfWord: dart.definiteFunctionType(dart.void, []),
      moveToEndOfWord: dart.definiteFunctionType(dart.void, []),
      lineTextForBufferRow: dart.definiteFunctionType(core.String, [core.int]),
      markBufferRange: dart.definiteFunctionType(node__workspace.Marker, [node__workspace.Range], {properties: MapOfString$dynamic(), persistent: core.bool}),
      decorateMarker: dart.definiteFunctionType(node__workspace.Decoration, [node__workspace.Marker, core.Map$(core.String, dart.dynamic)]),
      getGrammar: dart.definiteFunctionType(node__config.Grammar, []),
      setGrammar: dart.definiteFunctionType(dart.void, [node__config.Grammar]),
      undo: dart.definiteFunctionType(dart.void, []),
      redo: dart.definiteFunctionType(dart.void, []),
      createCheckpoint: dart.definiteFunctionType(dart.dynamic, []),
      groupChangesSinceCheckpoint: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      revertToCheckpoint: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      atomic: dart.definiteFunctionType(dart.void, [dart.functionType(dart.void, [])]),
      save: dart.definiteFunctionType(dart.void, []),
      observeGrammar: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.void, [node__config.Grammar])]),
      isBufferRowCommented: dart.definiteFunctionType(core.bool, [core.int]),
      screenPositionForPixelPosition: dart.definiteFunctionType(node__workspace.Point, [node__workspace.Point]),
      pixelPositionForScreenPosition: dart.definiteFunctionType(node__workspace.Point, [node__workspace.Point]),
      screenPositionForBufferPosition: dart.definiteFunctionType(node__workspace.Point, [node__workspace.Point]),
      bufferPositionForScreenPosition: dart.definiteFunctionType(node__workspace.Point, [dart.dynamic]),
      scrollToBufferPosition: dart.definiteFunctionType(dart.void, [node__workspace.Point], {center: core.bool}),
      selectLinesContainingCursors: dart.definiteFunctionType(dart.void, []),
      selectToBeginningOfWord: dart.definiteFunctionType(dart.void, []),
      getCursorBufferPosition: dart.definiteFunctionType(node__workspace.Point, []),
      setPlaceholderText: dart.definiteFunctionType(dart.void, [core.String]),
      getGutters: dart.definiteFunctionType(core.List$(node__workspace.Gutter), []),
      gutterWithName: dart.definiteFunctionType(node__workspace.Gutter, [core.String]),
      observeGutters: dart.definiteFunctionType(utils__disposable.Disposable, [dart.functionType(dart.void, [node__workspace.Gutter])])
    })
  });
  node__workspace._create = function(className, arg1, arg2) {
    if (arg2 === void 0) arg2 = null;
    if (arg2 != null) {
      return js.JsObject.new(js.JsFunction._check(node__node.require('atom').get(className)), [arg1, arg2]);
    } else {
      return js.JsObject.new(js.JsFunction._check(node__node.require('atom').get(className)), [arg1]);
    }
  };
  dart.fn(node__workspace._create, StringAnddynamic__ToJsObject());
  node__workspace._cvt = function(object) {
    if (object == null) return null;
    if (js.JsObject.is(object)) return object;
    return js.JsObject.fromBrowserObject(object);
  };
  dart.fn(node__workspace._cvt, JsObjectToJsObject());
  dart.defineLazy(src__js, {
    get _browserWindow() {
      return js.JsObject.fromBrowserObject(js.context.get('window'));
    }
  });
  dart.defineLazy(src__js, {
    get _browserJson() {
      return js.JsObject._check(src__js._browserWindow.get('JSON'));
    }
  });
  dart.defineLazy(src__js, {
    get _logger() {
      return logging$.Logger.new("js");
    },
    set _logger(_) {}
  });
  src__js.jsify = function(obj) {
    if (obj == null) return null;
    if (js.JsObject.is(obj)) return obj;
    if (core.List.is(obj) || core.Map.is(obj)) return js.JsObject.jsify(obj);
    if (src__js.ProxyHolder.is(obj)) return obj.obj;
    return obj;
  };
  dart.fn(src__js.jsify, dynamicTodynamic());
  src__js.uncrackDart2js = function(obj) {
    return js.JsObject._check(js.context.callMethod('uncrackDart2js', [obj]));
  };
  dart.fn(src__js.uncrackDart2js, dynamicToJsObject());
  src__js.jsObjectToDart = function(obj) {
    if (obj == null) return null;
    try {
      return convert.JSON.decode(core.String._check(src__js._browserJson.callMethod('stringify', JSArrayOfJsObject().of([obj]))));
    } catch (e) {
      let st = dart.stackTrace(e);
      src__js._logger.severe('jsObjectToDart', e, st);
      return null;
    }

  };
  dart.fn(src__js.jsObjectToDart, JsObjectTodynamic());
  src__js.dartObjectToJS = function(obj) {
    if (obj == null) return null;
    try {
      return src__js._browserJson.callMethod('parse', JSArrayOfString().of([convert.JSON.encode(obj)]));
    } catch (e) {
      let st = dart.stackTrace(e);
      src__js._logger.severe('dartObjectToJS', e, st);
      return null;
    }

  };
  dart.fn(src__js.dartObjectToJS, dynamicTodynamic());
  src__js.promiseToFuture = function(promise) {
    if (js.JsObject.is(promise)) promise = new src__js.Promise(js.JsObject._check(promise));
    let completer = async.Completer.new();
    dart.dsend(promise, 'then', dart.fn(result => {
      completer.complete(result);
    }, dynamicTodynamic()), dart.fn(error => {
      completer.completeError(error);
    }, dynamicTodynamic()));
    return completer.future;
  };
  dart.fn(src__js.promiseToFuture, dynamicToFuture());
  src__js.JsDisposable = class JsDisposable extends src__js.ProxyHolder {
    new(object) {
      super.new(object);
    }
    dispose() {
      return this.invoke('dispose');
    }
  };
  src__js.JsDisposable[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(src__js.JsDisposable, {
    constructors: () => ({new: dart.definiteFunctionType(src__js.JsDisposable, [js.JsObject])}),
    methods: () => ({dispose: dart.definiteFunctionType(dart.void, [])})
  });
  src__js.JsFunction = js.JsFunction;
  src__js.JsObject = js.JsObject;
  dart.export(src__js, js, 'context');
  const _operations = Symbol('_operations');
  const _completers = Symbol('_completers');
  const _serviceQueue = Symbol('_serviceQueue');
  src__utils.FutureSerializer$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let JSArrayOfCompleterOfT = () => (JSArrayOfCompleterOfT = dart.constFn(_interceptors.JSArray$(CompleterOfT())))();
    class FutureSerializer extends core.Object {
      new() {
        this[_operations] = [];
        this[_completers] = JSArrayOfCompleterOfT().of([]);
      }
      perform(operation) {
        let completer = CompleterOfT().new();
        this[_operations][dartx.add](operation);
        this[_completers][dartx.add](completer);
        if (this[_operations][dartx.length] == 1) {
          this[_serviceQueue]();
        }
        return completer.future;
      }
      [_serviceQueue]() {
        let operation = core.Function._check(this[_operations][dartx.first]);
        let completer = this[_completers][dartx.first];
        let future = async.Future._check(dart.dcall(operation));
        future.then(dart.dynamic)(dart.fn(value => {
          completer.complete(value);
        }, dynamicTodynamic())).catchError(dart.fn(e => {
          completer.completeError(e);
        }, dynamicTodynamic())).whenComplete(dart.fn(() => {
          this[_operations][dartx.removeAt](0);
          this[_completers][dartx.removeAt](0);
          if (dart.test(this[_operations][dartx.isNotEmpty])) this[_serviceQueue]();
        }, VoidTodynamic$()));
      }
    }
    dart.addTypeTests(FutureSerializer);
    dart.setSignature(FutureSerializer, {
      methods: () => ({
        perform: dart.definiteFunctionType(async.Future$(T), [core.Function]),
        [_serviceQueue]: dart.definiteFunctionType(dart.void, [])
      })
    });
    return FutureSerializer;
  });
  src__utils.FutureSerializer = FutureSerializer();
  dart.copyProperties(utils__dependencies, {
    get deps() {
      return utils__dependencies.Dependencies.instance;
    }
  });
  const _instances = Symbol('_instances');
  const _calcParent = Symbol('_calcParent');
  utils__dependencies.Dependencies = class Dependencies extends core.Object {
    static setGlobalInstance(deps) {
      utils__dependencies.Dependencies._global = deps;
    }
    static get instance() {
      let deps = utils__dependencies.Dependencies._check(async.Zone.current.get('dependencies'));
      return deps != null ? deps : utils__dependencies.Dependencies._global;
    }
    new() {
      this[_instances] = dart.map();
    }
    get parent() {
      return this[_calcParent](async.Zone.current);
    }
    getDependency(type) {
      if (dart.test(this[_instances][dartx.containsKey](type))) {
        return this[_instances][dartx.get](type);
      }
      let parent = this[_calcParent](async.Zone.current);
      return parent != null ? parent.getDependency(type) : null;
    }
    setDependency(type, instance) {
      this[_instances][dartx.set](type, instance);
    }
    get(type) {
      return this.getDependency(type);
    }
    set(type, instance) {
      (() => {
        return this.setDependency(type, instance);
      })();
      return instance;
    }
    get types() {
      return this[_instances][dartx.keys];
    }
    runInZone(func) {
      let zone = async.Zone.current.fork({zoneValues: dart.map({dependencies: this})});
      zone.run(dart.dynamic)(VoidTodynamic()._check(func));
    }
    [_calcParent](zone) {
      if (dart.equals(this, utils__dependencies.Dependencies._global)) return null;
      let parentZone = zone.parent;
      if (parentZone == null) return utils__dependencies.Dependencies._global;
      let deps = utils__dependencies.Dependencies._check(parentZone.get('dependencies'));
      if (dart.equals(deps, this)) {
        return this[_calcParent](parentZone);
      } else {
        return deps != null ? deps : utils__dependencies.Dependencies._global;
      }
    }
  };
  dart.setSignature(utils__dependencies.Dependencies, {
    constructors: () => ({new: dart.definiteFunctionType(utils__dependencies.Dependencies, [])}),
    methods: () => ({
      getDependency: dart.definiteFunctionType(dart.dynamic, [core.Type]),
      setDependency: dart.definiteFunctionType(dart.void, [core.Type, dart.dynamic]),
      get: dart.definiteFunctionType(dart.dynamic, [core.Type]),
      set: dart.definiteFunctionType(dart.void, [core.Type, dart.dynamic]),
      runInZone: dart.definiteFunctionType(dart.void, [core.Function]),
      [_calcParent]: dart.definiteFunctionType(utils__dependencies.Dependencies, [async.Zone])
    }),
    statics: () => ({setGlobalInstance: dart.definiteFunctionType(dart.dynamic, [utils__dependencies.Dependencies])}),
    names: ['setGlobalInstance']
  });
  utils__dependencies.Dependencies._global = null;
  dart.defineLazy(utils__disposable, {
    get _logger() {
      return logging$.Logger.new('disposable');
    }
  });
  utils__disposable.Disposable = class Disposable extends core.Object {};
  const _disposables = Symbol('_disposables');
  utils__disposable.Disposables = class Disposables extends core.Object {
    new(opts) {
      let catchExceptions = opts && 'catchExceptions' in opts ? opts.catchExceptions : true;
      this[_disposables] = JSArrayOfDisposable().of([]);
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
        if (dart.test(this.catchExceptions)) {
          try {
            disposable.dispose();
          } catch (e) {
            let st = dart.stackTrace(e);
            utils__disposable._logger.severe('exception during dispose', e, st);
          }

        } else {
          disposable.dispose();
        }
      }
      this[_disposables][dartx.clear]();
    }
  };
  utils__disposable.Disposables[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(utils__disposable.Disposables, {
    constructors: () => ({new: dart.definiteFunctionType(utils__disposable.Disposables, [], {catchExceptions: core.bool})}),
    methods: () => ({
      add: dart.definiteFunctionType(dart.void, [utils__disposable.Disposable]),
      addAll: dart.definiteFunctionType(dart.void, [core.Iterable$(utils__disposable.Disposable)]),
      remove: dart.definiteFunctionType(core.bool, [utils__disposable.Disposable]),
      dispose: dart.definiteFunctionType(dart.void, [])
    })
  });
  const _callback = Symbol('_callback');
  utils__disposable.EventListener = class EventListener extends core.Object {
    new(obj, eventName, fn) {
      this.obj = obj;
      this.eventName = eventName;
      this[_callback] = null;
      this[_callback] = js.JsFunction.withThis(dart.fn((_this, e) => fn(js.JsObject.fromBrowserObject(e)), dynamicAnddynamicTovoid()));
      this.obj.callMethod('addEventListener', [this.eventName, this[_callback]]);
    }
    dispose() {
      if (this[_callback] != null) {
        this.obj.callMethod('removeEventListener', [this.eventName, this[_callback]]);
      }
      this[_callback] = null;
    }
  };
  utils__disposable.EventListener[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(utils__disposable.EventListener, {
    constructors: () => ({new: dart.definiteFunctionType(utils__disposable.EventListener, [js.JsObject, core.String, dart.functionType(dart.void, [js.JsObject])])}),
    methods: () => ({dispose: dart.definiteFunctionType(dart.void, [])})
  });
  const _subscriptions = Symbol('_subscriptions');
  utils__disposable.StreamSubscriptions = class StreamSubscriptions extends core.Object {
    new(opts) {
      let catchExceptions = opts && 'catchExceptions' in opts ? opts.catchExceptions : true;
      this[_subscriptions] = JSArrayOfStreamSubscription().of([]);
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
        if (dart.test(this.catchExceptions)) {
          try {
            subscription.cancel();
          } catch (e) {
            let st = dart.stackTrace(e);
            utils__disposable._logger.severe('exception during subscription cancel', e, st);
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
  };
  utils__disposable.StreamSubscriptions[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(utils__disposable.StreamSubscriptions, {
    constructors: () => ({new: dart.definiteFunctionType(utils__disposable.StreamSubscriptions, [], {catchExceptions: core.bool})}),
    methods: () => ({
      add: dart.definiteFunctionType(dart.void, [async.StreamSubscription]),
      remove: dart.definiteFunctionType(core.bool, [async.StreamSubscription]),
      cancel: dart.definiteFunctionType(dart.void, []),
      dispose: dart.definiteFunctionType(dart.void, [])
    })
  });
  utils__disposable.DisposeableSubscription = class DisposeableSubscription extends core.Object {
    new(sub) {
      this.sub = sub;
    }
    dispose() {
      this.sub.cancel();
    }
  };
  utils__disposable.DisposeableSubscription[dart.implements] = () => [utils__disposable.Disposable];
  dart.setSignature(utils__disposable.DisposeableSubscription, {
    constructors: () => ({new: dart.definiteFunctionType(utils__disposable.DisposeableSubscription, [async.StreamSubscription])}),
    methods: () => ({dispose: dart.definiteFunctionType(dart.void, [])})
  });
  utils__package_deps.install = function(packageLabel, package$, opts) {
    let justNotify = opts && 'justNotify' in opts ? opts.justNotify : false;
    return package$.loadPackageJson().then(async.Future)(dart.fn(info => {
      let installedPackages = atom.atom.packages.getAvailablePackageNames();
      let requiredPackages = ListOfString().as(info[dartx.get]('required-packages'));
      if (requiredPackages == null || dart.test(requiredPackages[dartx.isEmpty])) {
        return null;
      }
      let toInstall = SetOfString().from(requiredPackages);
      toInstall.removeAll(installedPackages);
      if (dart.test(toInstall.isEmpty)) return null;
      if (dart.test(justNotify)) {
        toInstall.forEach(dart.fn(name => {
          atom.atom.notifications.addInfo(dart.str`${packageLabel} recommends installing the '${name}' plugin for best results.`, {dismissable: true});
        }, StringTovoid$()));
      } else {
        return async.Future.forEach(toInstall, utils__package_deps._installPackage);
      }
    }, MapToFuture()));
  };
  dart.fn(utils__package_deps.install, StringAndAtomPackage__ToFuture());
  utils__package_deps._installPackage = function(name) {
    atom.atom.notifications.addInfo(dart.str`Installing ${name}…`);
    let runner = new node__process.ProcessRunner(atom.atom.packages.getApmPath(), {args: JSArrayOfString().of(['--no-color', 'install', name])});
    return runner.execSimple().then(async.Future)(dart.fn(result => {
      if (result.exit == 0) {
        return atom.atom.packages.activatePackage(name);
      } else {
        if (result.stderr != null && dart.test(result.stderr[dartx.isNotEmpty])) {
          dart.throw(result.stderr[dartx.trim]());
        } else {
          dart.throw(dart.str`exit code ${result.exit}`);
        }
      }
    }, ProcessResultToFuture())).then(dart.dynamic)(dart.fn(_ => {
      atom.atom.notifications.addSuccess(dart.str`Installed ${name}.`);
    }, dynamicTodynamic())).catchError(dart.fn(e => {
      atom.atom.notifications.addError(dart.str`Error installing ${name}:`, {detail: dart.str`${e}`, dismissable: true});
    }, dynamicTodynamic()));
  };
  dart.fn(utils__package_deps._installPackage, StringToFuture());
  utils__utils.uriEncodeComponent = function(str) {
    return str[dartx.replaceAll](' ', '%20');
  };
  dart.fn(utils__utils.uriEncodeComponent, StringToString());
  // Exports:
  exports.atom = atom;
  exports.atom_utils = atom_utils;
  exports.node__command = node__command;
  exports.node__config = node__config;
  exports.node__fs = node__fs;
  exports.node__node = node__node;
  exports.node__notification = node__notification;
  exports.node__package = node__package;
  exports.node__process = node__process;
  exports.node__shell = node__shell;
  exports.node__workspace = node__workspace;
  exports.src__js = src__js;
  exports.src__utils = src__utils;
  exports.utils__dependencies = utils__dependencies;
  exports.utils__disposable = utils__disposable;
  exports.utils__package_deps = utils__package_deps;
  exports.utils__utils = utils__utils;
})();

//# sourceMappingURL=atom.js.map
