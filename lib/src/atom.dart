// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:js';

void registerPackage(AtomPackage package) {
  print('** registerPackage() called **');

  final JsObject exports = context['module']['exports'];

  exports['activate'] = package.activate;
  exports['deactivate'] = package.deactivate;
  exports['config'] = jsify(package.config());
  exports['serialize'] = package.serialize;

  print('** registerPackage() exited **');
}

abstract class AtomPackage {
  AtomPackage();

  Map config() => {};
  void activate([dynamic state]) {
    print('** AtomPackage.activate() **');
  }
  void deactivate() {
    print('** AtomPackage.deactivate() **');
  }
  dynamic serialize() => {};
}

JsObject jsify(obj) {
  if (obj == null) return null;
  if (obj is JsObject) return obj;
  if (obj is List || obj is Map) return new JsObject.jsify(obj);
  //if (obj is ProxyHolder) return obj.obj;
  return obj;
}
