// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:atom/atom.dart';
import 'package:atom_flutter/flutter.dart';
import 'package:logging/logging.dart';

main() {
  // Logger.root.level = Level.WARNING;
  Logger.root.level = Level.INFO;
  Logger.root.onRecord.listen((LogRecord r) {
    String tag = '${r.loggerName} - ${r.level.name.toLowerCase()} -';
    print('${tag} ${r.message}');

    if (r.error != null) print('${tag}   ${r.error}');
    if (r.stackTrace != null) print('${tag}   ${r.stackTrace}');
  });

  registerPackage(new FlutterDevPackage());
  // registerPackageDDC(new FlutterDevPackage());
}
