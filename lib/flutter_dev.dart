// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'src/atom.dart';

export 'src/atom.dart' show registerPackage;

class FlutterDevPackage extends AtomPackage {
  void activate([dynamic state]) {
    print('flutter package activated');
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
