// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:atom/atom.dart';
import 'package:atom/node/shell.dart';
import 'package:atom/utils/disposable.dart';

class GettingStarted implements Disposable {
  Disposables disposables = new Disposables();

  GettingStarted() {
    disposables.add(atom.commands.add(
      'atom-workspace',
      'flutter:getting-started',
      _gettingStarted
    ));
  }

  void dispose() => disposables.dispose();

  void _gettingStarted(AtomEvent _) {
    shell.openExternal('http://flutter.io/getting-started/');
  }
}
