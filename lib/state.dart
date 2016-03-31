// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library atom.state;

import 'dart:async';
import 'dart:convert' show JSON;

final String pluginId = 'flutter';

final State state = new State();

class State {
  dynamic _pluginState = {};
  Map<String, StateStorable> _storables = {};

  Map<String, StreamController> _controllers = {};

  State();

  dynamic operator[](String key) => _pluginState[key];

  void operator[]=(String key, dynamic value) {
    _pluginState[key] = value;
    if (_controllers[key] != null) _controllers[key].add(value);
  }

  /// Register the given [StateStorable]. This will call [StateStorable.fromStored]
  /// before it returns.
  void registerStorable(String key, StateStorable storable) {
    try {
      _storables[key] = storable;
      var data = this[key];
      storable.initFromStored(data is String ? JSON.decode(data) : null);
    } catch (e) {
      print('Exception restoring state: ${e}');
    }
  }

  void loadFrom(dynamic inState) {
    _pluginState = inState ?? {};
  }

  Stream onValueChanged(String key) {
    if (_controllers[key] != null) {
      return _controllers[key].stream;
    } else {
      StreamController controller = new StreamController.broadcast(
        sync: true,
        onCancel: () => _controllers.remove(key));
      _controllers[key] = controller;
      return controller.stream;
    }
  }

  dynamic saveState() {
    _storables.forEach((String key, StateStorable storable) {
      _pluginState[key] = JSON.encode(storable.toStorable());
    });
    return _pluginState;
  }
}

abstract class StateStorable {
  StateStorable();

  /// Initialize the state from a previously stored JSON encodable value.
  void initFromStored(dynamic storedData);

  /// Write the current state to a JSON encodable value.
  dynamic toStorable();
}
