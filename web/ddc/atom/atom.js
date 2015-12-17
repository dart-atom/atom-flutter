dart_library.library('atom/atom', null, /* Imports */[
  "dart/_runtime",
  'dart/js',
  'atom/src/js',
  'dart/core',
  'dart/async'
], /* Lazy imports */[
], function(exports, dart, js, js$, core, async) {
  'use strict';
  let dartx = dart.dartx;
  dart.defineLazyProperties(exports, {
    get atom() {
      return new Atom();
    }
  });
  function registerPackage(package$) {
    let packageInfo = dart.map({activate: dart.bind(package$, 'activate'), deactivate: dart.bind(package$, 'deactivate'), config: package$.config(), serialize: dart.bind(package$, 'serialize')});
    js.context.set(package$.id, js$.jsify(packageInfo));
  }
  dart.fn(registerPackage, () => dart.definiteFunctionType(dart.void, [AtomPackage]));
  class AtomPackage extends core.Object {
    AtomPackage(id) {
      this.id = id;
    }
    config() {
      return dart.map();
    }
    serialize() {
      return dart.map();
    }
    deactivate() {}
  }
  dart.setSignature(AtomPackage, {
    constructors: () => ({AtomPackage: [AtomPackage, [core.String]]}),
    methods: () => ({
      config: [core.Map, []],
      serialize: [dart.dynamic, []],
      deactivate: [dart.void, []]
    })
  });
  const _notifications = Symbol('_notifications');
  const _packages = Symbol('_packages');
  const _views = Symbol('_views');
  class Atom extends js$.ProxyHolder {
    Atom() {
      this[_notifications] = null;
      this[_packages] = null;
      this[_views] = null;
      super.ProxyHolder(dart.as(js.context.get('atom'), js.JsObject));
      this[_notifications] = new NotificationManager(dart.as(this.obj.get('notifications'), js.JsObject));
      this[_packages] = new PackageManager(dart.as(this.obj.get('packages'), js.JsObject));
      this[_views] = new ViewRegistry(dart.as(this.obj.get('views'), js.JsObject));
    }
    get notifications() {
      return this[_notifications];
    }
    get packages() {
      return this[_packages];
    }
    get views() {
      return this[_views];
    }
    getVersion() {
      return dart.as(this.invoke('getVersion'), core.String);
    }
    beep() {
      return this.invoke('beep');
    }
    confirm(message, opts) {
      let detailedMessage = opts && 'detailedMessage' in opts ? opts.detailedMessage : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let m = dart.map({message: message});
      if (detailedMessage != null)
        m.set('detailedMessage', detailedMessage);
      if (buttons != null)
        m.set('buttons', buttons);
      return dart.as(this.invoke('confirm', m), core.int);
    }
    reload() {
      return this.invoke('reload');
    }
    pickFolder() {
      let completer = async.Completer$(core.String).new();
      this.invoke('pickFolder', dart.fn(result => {
        if (dart.is(result, core.List) && dart.notNull(dart.as(dart.dload(result, 'isNotEmpty'), core.bool))) {
          completer.complete(dart.dload(result, 'first'));
        } else {
          completer.complete(null);
        }
      }));
      return completer.future;
    }
  }
  dart.setSignature(Atom, {
    constructors: () => ({Atom: [Atom, []]}),
    methods: () => ({
      getVersion: [core.String, []],
      beep: [dart.void, []],
      confirm: [core.int, [core.String], {detailedMessage: core.String, buttons: core.List$(core.String)}],
      reload: [dart.void, []],
      pickFolder: [async.Future$(core.String), []]
    })
  });
  const _options = Symbol('_options');
  class NotificationManager extends js$.ProxyHolder {
    NotificationManager(object) {
      super.ProxyHolder(object);
    }
    addSuccess(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new Notification(dart.as(this.invoke('addSuccess', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons})), js.JsObject));
    }
    addInfo(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new Notification(dart.as(this.invoke('addInfo', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons})), js.JsObject));
    }
    addWarning(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new Notification(dart.as(this.invoke('addWarning', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons})), js.JsObject));
    }
    addError(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new Notification(dart.as(this.invoke('addError', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons})), js.JsObject));
    }
    addFatalError(message, opts) {
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let dismissable = opts && 'dismissable' in opts ? opts.dismissable : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      return new Notification(dart.as(this.invoke('addFatalError', message, this[_options]({detail: detail, description: description, dismissable: dismissable, icon: icon, buttons: buttons})), js.JsObject));
    }
    getNotifications() {
      return core.List$(Notification).from(dart.as(dart.dsend(this.invoke('getNotifications'), 'map', dart.fn(n => new Notification(dart.as(n, js.JsObject)), Notification, [dart.dynamic])), core.Iterable));
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
      if (detail != null)
        m.set('detail', detail);
      if (description != null)
        m.set('description', description);
      if (dismissable != null)
        m.set('dismissable', dismissable);
      if (icon != null)
        m.set('icon', icon);
      if (buttons != null) {
        m.set('buttons', js$.jsify(buttons[dartx.map](dart.fn(nb => nb.toProxy(), js.JsObject, [NotificationButton]))[dartx.toList]()));
      }
      return m;
    }
  }
  dart.setSignature(NotificationManager, {
    constructors: () => ({NotificationManager: [NotificationManager, [js.JsObject]]}),
    methods: () => ({
      addSuccess: [Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}],
      addInfo: [Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}],
      addWarning: [Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}],
      addError: [Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}],
      addFatalError: [Notification, [core.String], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}],
      getNotifications: [core.List$(Notification), []],
      [_options]: [core.Map, [], {detail: core.String, description: core.String, dismissable: core.bool, icon: core.String, buttons: core.List$(NotificationButton)}]
    })
  });
  class Notification extends js$.ProxyHolder {
    Notification(object) {
      super.ProxyHolder(object);
    }
    get view() {
      return exports.atom.views.getView(this.obj);
    }
    get onDidDismiss() {
      return this.eventStream('onDidDismiss');
    }
    get dismissed() {
      return dart.as(this.obj.get('dismissed'), core.bool);
    }
    get displayed() {
      return dart.as(this.obj.get('displayed'), core.bool);
    }
    getType() {
      return dart.as(this.invoke('getType'), core.String);
    }
    getMessage() {
      return dart.as(this.invoke('getMessage'), core.String);
    }
    dismiss() {
      return this.invoke('dismiss');
    }
  }
  dart.setSignature(Notification, {
    constructors: () => ({Notification: [Notification, [js.JsObject]]}),
    methods: () => ({
      getType: [core.String, []],
      getMessage: [core.String, []],
      dismiss: [dart.void, []]
    })
  });
  class NotificationButton extends core.Object {
    NotificationButton(text, onDidClick) {
      this.text = text;
      this.onDidClick = onDidClick;
    }
    toProxy() {
      return dart.as(js$.jsify(dart.map({text: this.text, onDidClick: dart.fn(_ => dart.dcall(this.onDidClick))})), js.JsObject);
    }
  }
  dart.setSignature(NotificationButton, {
    constructors: () => ({NotificationButton: [NotificationButton, [core.String, core.Function]]}),
    methods: () => ({toProxy: [js.JsObject, []]})
  });
  class ViewRegistry extends js$.ProxyHolder {
    ViewRegistry(object) {
      super.ProxyHolder(object);
    }
    getView(object) {
      return this.invoke('getView', object);
    }
  }
  dart.setSignature(ViewRegistry, {
    constructors: () => ({ViewRegistry: [ViewRegistry, [js.JsObject]]}),
    methods: () => ({getView: [dart.dynamic, [dart.dynamic]]})
  });
  class PackageManager extends js$.ProxyHolder {
    PackageManager(object) {
      super.ProxyHolder(object);
    }
    getApmPath() {
      return dart.as(this.invoke('getApmPath'), core.String);
    }
    getPackageDirPaths() {
      return core.List$(core.String).from(dart.as(this.invoke('getPackageDirPaths'), core.Iterable));
    }
    isBundledPackage(name) {
      return dart.as(this.invoke('isBundledPackage', name), core.bool);
    }
    isPackageLoaded(name) {
      return dart.as(this.invoke('isPackageLoaded', name), core.bool);
    }
    isPackageDisabled(name) {
      return dart.as(this.invoke('isPackageDisabled', name), core.bool);
    }
    isPackageActive(name) {
      return dart.as(this.invoke('isPackageActive', name), core.bool);
    }
    getAvailablePackageNames() {
      return core.List$(core.String).from(dart.as(this.invoke('getAvailablePackageNames'), core.Iterable));
    }
    activatePackage(name) {
      return js$.promiseToFuture(this.invoke('activatePackage', name));
    }
  }
  dart.setSignature(PackageManager, {
    constructors: () => ({PackageManager: [PackageManager, [js.JsObject]]}),
    methods: () => ({
      getApmPath: [core.String, []],
      getPackageDirPaths: [core.List$(core.String), []],
      isBundledPackage: [core.bool, [dart.dynamic]],
      isPackageLoaded: [core.bool, [core.String]],
      isPackageDisabled: [core.bool, [core.String]],
      isPackageActive: [core.bool, [core.String]],
      getAvailablePackageNames: [core.List$(core.String), []],
      activatePackage: [async.Future, [core.String]]
    })
  });
  // Exports:
  exports.registerPackage = registerPackage;
  exports.AtomPackage = AtomPackage;
  exports.Atom = Atom;
  exports.NotificationManager = NotificationManager;
  exports.Notification = Notification;
  exports.NotificationButton = NotificationButton;
  exports.ViewRegistry = ViewRegistry;
  exports.PackageManager = PackageManager;
});
//# sourceMappingURL=atom.js.map
