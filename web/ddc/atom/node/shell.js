dart_library.library('atom/node/shell', null, /* Imports */[
  'dart/_runtime',
  'atom/node/node',
  'atom/src/js',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, node, js, core) {
  'use strict';
  let dartx = dart.dartx;
  dart.defineLazyProperties(exports, {
    get shell() {
      return new Shell._();
    }
  });
  class Shell extends js.ProxyHolder {
    _() {
      super.ProxyHolder(node.require('shell'));
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
  }
  dart.defineNamedConstructor(Shell, '_');
  dart.setSignature(Shell, {
    constructors: () => ({_: [Shell, []]}),
    methods: () => ({
      openItem: [dart.dynamic, [core.String]],
      showItemInFolder: [dart.dynamic, [core.String]],
      openExternal: [dart.dynamic, [core.String]]
    })
  });
  // Exports:
  exports.Shell = Shell;
});
//# sourceMappingURL=shell.js.map
