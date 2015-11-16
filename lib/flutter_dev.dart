// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

//import 'package:atom/node/shell.dart';

import 'src/atom.dart';

export 'src/atom.dart' show registerPackage;

class FlutterDevPackage extends AtomPackage {
  FlutterDevPackage() : super('flutter');

  void activate([dynamic state]) {
    print('flutter package activated');

    //shell.openExternal('http://www.cheese.com/');
  }

  Map config() {
    return {
      'flutterRoot': {
        'title': 'FLUTTER_ROOT',
        'description': 'The location of the Flutter SDK.',
        'type': 'string',
        'default': ''
      }
    };
  }

  void deactivate() {
    print('flutter package deactivated');
  }
}
