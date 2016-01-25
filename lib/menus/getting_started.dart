// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/atom.dart';
import 'package:atom/node/process.dart';
import 'package:atom/node/shell.dart';
import 'package:atom/utils/disposable.dart';
import 'package:atom/utils/utils.dart';

import '../state.dart';

class GettingStarted implements Disposable {
  Disposables disposables = new Disposables();

  GettingStarted() {
    disposables.add(atom.commands.add(
      'atom-workspace',
      'flutter:getting-started',
      _gettingStarted
    ));
    disposables.add(atom.commands.add(
      'atom-workspace',
      'flutter:send-feedback',
      _handleSendFeedback
    ));
  }

  void dispose() => disposables.dispose();

  void _gettingStarted(AtomEvent _) {
    shell.openExternal('http://flutter.io/getting-started/');
  }

  void _handleSendFeedback(AtomEvent _) {
    getSystemDescription().then((String description) {
      shell.openExternal('https://github.com/flutter/atom-flutter/issues/new?'
          'body=${uriEncodeComponent(description)}');
    });
  }
}

/// Return a description of Atom, the plugin, and the OS.
Future<String> getSystemDescription() {
  // 'Atom 1.0.11, flutter plugin xxx, running on Windows.'
  String atomVer = atom.getVersion();
  String os = isMac ? 'macos' : process.platform;

  return atomPackage.getPackageVersion().then((String pluginVer) {
    bool hasFlutterSdk = atom.config.getValue('flutter.flutterRoot') != null;
    String description = '\n\nAtom ${atomVer}, flutter plugin ${pluginVer}';
    if (!hasFlutterSdk) {
      description += ' (no flutter sdk configured)';
    }
    description += ', running on ${os}.';
    return description;
  }) as Future<String>;
}
