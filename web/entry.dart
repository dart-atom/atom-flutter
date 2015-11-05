// Copyright (c) 2015, the Flutter project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:atom_flutter_dev/flutter_dev.dart';
import 'package:logging/logging.dart';

main() {
  print('*** hello from flutter ***');

  // TODO: Default to warning.
  Logger.root.level = Level.INFO;
  Logger.root.onRecord.listen((LogRecord r) {
    String tag = '${r.level.name.toLowerCase()} • ${r.loggerName}:';
    print('${tag} ${r.message}');
    if (r.error != null) print('${tag}   ${r.error}');
  });

  registerPackage(new FlutterDevPackage());
}
