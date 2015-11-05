// Copyright (c) 2015, the Flutter project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:js/js.dart';

@JS('module.exports')
dynamic exports;

void registerPackage(AtomPackage package) {
  print('foo');

  exports['activate'] = package.packageActivated;
  exports['deactivate'] = package.packageDeactivated;
  // exports['config'] = jsify(_package.config());
  // exports['serialize'] = _package.serialize;

  print('bar');
}

abstract class AtomPackage {
  AtomPackage();

  Map config() => {};
  void packageActivated([dynamic state]) { }
  void packageDeactivated() { }
  dynamic serialize() => {};
}
