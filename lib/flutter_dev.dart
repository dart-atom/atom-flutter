// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:logging/logging.dart';

import 'src/atom.dart';

export 'src/atom.dart' show registerPackage;

final Logger _logger = new Logger('flutter_dev');

class FlutterDevPackage extends AtomPackage {
  void packageActivated([dynamic state]) {
    _logger.info('activated');
  }

  void packageDeactivated() {
    _logger.info('deactivated');
  }
}
