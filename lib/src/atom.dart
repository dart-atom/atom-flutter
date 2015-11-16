// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:js';

void registerPackage(AtomPackage package) {
  Map flutter = {
    'activate': package.activate,
    'deactivate': package.deactivate,
    'config': jsify(package.config()),
    'serialize': package.serialize
  };

  context['flutter'] = jsify(flutter);
}

abstract class AtomPackage {
  final String name;

  AtomPackage(this.name);

  void activate([dynamic state]) { }
  Map config() => {};
  dynamic serialize() => {};
  void deactivate() { }
}

JsObject jsify(obj) {
  if (obj == null) return null;
  if (obj is JsObject) return obj;
  if (obj is List || obj is Map) return new JsObject.jsify(obj);
  //if (obj is ProxyHolder) return obj.obj;
  return obj;
}
