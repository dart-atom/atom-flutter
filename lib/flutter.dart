// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/atom.dart';
import 'package:atom/utils/disposable.dart';
import 'package:atom/utils/package_deps.dart' as package_deps;
import 'package:logging/logging.dart';

import 'menus/getting_started.dart';

final Logger _logger = new Logger('flutter');

class FlutterDevPackage extends AtomPackage {
  Disposables disposables = new Disposables();

  FlutterDevPackage() : super('flutter');

  void activate([dynamic state]) {
    _logger.info('activate');

    new Future.delayed(Duration.ZERO, () {
      package_deps.install('Flutter', this, justNotify: true);
    });

    _init();
  }

  void _init() {
    disposables.add(new GettingStarted());
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
    _logger.info('deactivate');

    disposables.dispose();
  }

  // void _setupLogging() {
  //   disposables.add(atom.config.observe('${pluginId}.logging', null, (val) {
  //     if (val == null) return;
  //
  //     for (Level level in Level.LEVELS) {
  //       if (val.toUpperCase() == level.name) {
  //         Logger.root.level = level;
  //         break;
  //       }
  //     }
  //
  //     _logger.info("logging level: ${Logger.root.level}");
  //   }));
  // }
}
