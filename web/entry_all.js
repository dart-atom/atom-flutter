// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

global.dart_utils = require('./ddc/dev_compiler/runtime/dart_utils.js');
global.dart_library = require('./ddc/dev_compiler/runtime/dart_library.js');

require('./ddc/atom_flutter_dev/flutter_dev.js');
require('./ddc/atom_flutter_dev/src/atom.js');
require('./ddc/dev_compiler/runtime/dart/_classes.js');
require('./ddc/dev_compiler/runtime/dart/_errors.js');
require('./ddc/dev_compiler/runtime/dart/_foreign_helper.js');
require('./ddc/dev_compiler/runtime/dart/_generators.js');
require('./ddc/dev_compiler/runtime/dart/_interceptors.js');
require('./ddc/dev_compiler/runtime/dart/_internal.js');
require('./ddc/dev_compiler/runtime/dart/_isolate_helper.js');
require('./ddc/dev_compiler/runtime/dart/_js_embedded_names.js');
require('./ddc/dev_compiler/runtime/dart/_js_helper.js');
require('./ddc/dev_compiler/runtime/dart/_js_mirrors.js');
require('./ddc/dev_compiler/runtime/dart/_js_primitives.js');
require('./ddc/dev_compiler/runtime/dart/_native_typed_data.js');
require('./ddc/dev_compiler/runtime/dart/_operations.js');
require('./ddc/dev_compiler/runtime/dart/_rtti.js');
require('./ddc/dev_compiler/runtime/dart/_runtime.js');
require('./ddc/dev_compiler/runtime/dart/_types.js');
require('./ddc/dev_compiler/runtime/dart/async.js');
require('./ddc/dev_compiler/runtime/dart/collection.js');
require('./ddc/dev_compiler/runtime/dart/convert.js');
require('./ddc/dev_compiler/runtime/dart/core.js');
require('./ddc/dev_compiler/runtime/dart/isolate.js');
require('./ddc/dev_compiler/runtime/dart/js.js');
require('./ddc/dev_compiler/runtime/dart/math.js');
require('./ddc/dev_compiler/runtime/dart/mirrors.js');
require('./ddc/dev_compiler/runtime/dart/typed_data.js');
require('./ddc/entry.js');
require('./ddc/js/js.js');
require('./ddc/logging/logging.js');

dart_library.start('entry');
