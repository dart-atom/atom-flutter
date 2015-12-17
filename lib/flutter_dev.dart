// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/atom.dart';

class FlutterDevPackage extends AtomPackage {
  FlutterDevPackage() : super('flutter');

  void activate([dynamic state]) {
    atom.notifications.addInfo('Flutter plugin installed.');

    new Future.delayed(new Duration(seconds: 4)).then((_) {
      atom.notifications.addSuccess('Plus, futures work!');
    });
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

  }
}
