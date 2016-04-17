// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/node/package.dart';
import 'package:atom/utils/dependencies.dart';
import 'package:atom/utils/disposable.dart';
import 'package:atom/utils/package_deps.dart' as package_deps;
import 'package:logging/logging.dart';

import 'menus/getting_started.dart';
import 'state.dart';
import 'usage.dart';

final Logger _logger = new Logger('flutter');

class FlutterDevPackage extends AtomPackage {
  Disposables disposables = new Disposables();

  FlutterDevPackage() : super('flutter');

  void activate([dynamic pluginState]) {
    _logger.info('activate');

    Dependencies.setGlobalInstance(new Dependencies());
    deps[AtomPackage] = this;

    state.loadFrom(pluginState);

    new Future.delayed(Duration.ZERO, () {
      package_deps.install('Flutter', this);
    });

    _init();
  }

  void _init() {
    disposables.add(new GettingStarted());
    disposables.add(new UsageManager());
  }

  Map config() {
    return {
      'flutterRoot': {
        'title': 'flutter_root',
        'description': 'The location of the Flutter SDK.',
        'type': 'string',
        'default': '',
        'order': 1
      },

      // google analytics
      'sendUsage': {
        'title': 'Report usage information to Google Analytics',
        'description': "Report anonymized usage information to Google Analytics.",
        'type': 'boolean',
        'default': true,
        'order': 9
      },
    };
  }

  dynamic serialize() => state.saveState();

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
