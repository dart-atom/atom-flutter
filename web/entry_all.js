// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

global.dart_library = require('./ddc/dev_compiler/runtime/dart_library.js');

require('./ddc/atom/atom.js');
require('./ddc/atom/node/node.js');
require('./ddc/atom/node/process.js');
require('./ddc/atom/node/shell.js');
require('./ddc/atom/src/js.js');
require('./ddc/atom/src/utils.js');
require('./ddc/atom/utils/dependencies.js');
require('./ddc/atom/utils/disposable.js');
require('./ddc/atom/utils/package_deps.js');
require('./ddc/atom/utils/utils.js');
require('./ddc/atom_flutter/flutter.js');
require('./ddc/atom_flutter/menus/getting_started.js');
require('./ddc/atom_flutter/state.js');
require('./ddc/atom_flutter/usage.js');
require('./ddc/dev_compiler/runtime/dart/_debugger.js');
require('./ddc/dev_compiler/runtime/dart/_foreign_helper.js');
require('./ddc/dev_compiler/runtime/dart/_interceptors.js');
require('./ddc/dev_compiler/runtime/dart/_internal.js');
require('./ddc/dev_compiler/runtime/dart/_isolate_helper.js');
require('./ddc/dev_compiler/runtime/dart/_js_embedded_names.js');
require('./ddc/dev_compiler/runtime/dart/_js_helper.js');
require('./ddc/dev_compiler/runtime/dart/_js_mirrors.js');
require('./ddc/dev_compiler/runtime/dart/_js_primitives.js');
require('./ddc/dev_compiler/runtime/dart/_metadata.js');
require('./ddc/dev_compiler/runtime/dart/_native_typed_data.js');
require('./ddc/dev_compiler/runtime/dart/_runtime.js');
require('./ddc/dev_compiler/runtime/dart/async.js');
require('./ddc/dev_compiler/runtime/dart/collection.js');
require('./ddc/dev_compiler/runtime/dart/convert.js');
require('./ddc/dev_compiler/runtime/dart/core.js');
require('./ddc/dev_compiler/runtime/dart/html.js');
require('./ddc/dev_compiler/runtime/dart/html_common.js');
require('./ddc/dev_compiler/runtime/dart/isolate.js');
require('./ddc/dev_compiler/runtime/dart/js.js');
require('./ddc/dev_compiler/runtime/dart/math.js');
require('./ddc/dev_compiler/runtime/dart/mirrors.js');
require('./ddc/dev_compiler/runtime/dart/typed_data.js');
require('./ddc/entry.js');
require('./ddc/logging/logging.js');
require('./ddc/usage/src/usage_impl.js');
require('./ddc/usage/src/uuid.js');
require('./ddc/usage/usage.js');

dart_library.start('entry');

module.exports = {
  activate: function(arg) {
    global.flutter.activate(); // TODO: arg);
  },

  config: global.flutter.config,

  serialize: function(arg) {
    return global.flutter.serialize();
  },

  deactivate: function() {
    global.flutter.deactivate();
  }
};
