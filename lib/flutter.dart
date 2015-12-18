// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/atom.dart';
import 'package:atom/utils/disposable.dart';
import 'package:atom/utils/package_deps.dart' as package_deps;

// import 'menus/getting_started.dart';

class FlutterDevPackage extends AtomPackage {
  Disposables disposables = new Disposables();

  FlutterDevPackage() : super('flutter');

  void activate([dynamic state]) {
    new Future.delayed(Duration.ZERO, () {
      package_deps.install('Flutter', this, justNotify: true);
    });

    _init();
  }

  void _init() {
    // disposables.add(new GettingStarted());
  }

  // Map config() {
  //   return {
  //     'flutterRoot': {
  //       'title': 'FLUTTER_ROOT',
  //       'description': 'The location of the Flutter SDK.',
  //       'type': 'string',
  //       'default': ''
  //     }
  //   };
  // }

  void deactivate() {
    disposables.dispose();
  }
}
