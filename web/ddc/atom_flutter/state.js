dart_library.library('atom_flutter/state', null, /* Imports */[
  'dart/_runtime',
  'atom/utils/dependencies',
  'atom/atom',
  'dart/convert',
  'dart/core',
  'dart/async'
], /* Lazy imports */[
], function(exports, dart, dependencies, atom, convert, core, async) {
  'use strict';
  let dartx = dart.dartx;
  exports.pluginId = 'flutter';
  dart.copyProperties(exports, {
    get atomPackage() {
      return dart.as(dependencies.deps.get(atom.AtomPackage), atom.AtomPackage);
    }
  });
  dart.defineLazyProperties(exports, {
    get state() {
      return new State();
    }
  });
  const _pluginState = Symbol('_pluginState');
  const _storables = Symbol('_storables');
  const _controllers = Symbol('_controllers');
  class State extends core.Object {
    State() {
      this[_pluginState] = dart.map();
      this[_storables] = dart.map();
      this[_controllers] = dart.map();
    }
    get(key) {
      return dart.dindex(this[_pluginState], key);
    }
    set(key, value) {
      dart.dsetindex(this[_pluginState], key, value);
      if (this[_controllers][dartx.get](key) != null) this[_controllers][dartx.get](key).add(value);
      return value;
    }
    registerStorable(key, storable) {
      try {
        this[_storables][dartx.set](key, storable);
        let data = this.get(key);
        storable.initFromStored(typeof data == 'string' ? convert.JSON.decode(data) : null);
      } catch (e) {
        core.print(`Exception restoring state: ${e}`);
      }

    }
    loadFrom(inState) {
      this[_pluginState] = (inState != null ? inState : dart.map());
    }
    onValueChanged(key) {
      if (this[_controllers][dartx.get](key) != null) {
        return this[_controllers][dartx.get](key).stream;
      } else {
        let controller = async.StreamController.broadcast({sync: true, onCancel: dart.fn(() => this[_controllers][dartx.remove](key), async.StreamController, [])});
        this[_controllers][dartx.set](key, controller);
        return controller.stream;
      }
    }
    saveState() {
      this[_storables][dartx.forEach](dart.fn((key, storable) => {
        dart.dsetindex(this[_pluginState], key, convert.JSON.encode(storable.toStorable()));
      }, dart.void, [core.String, StateStorable]));
      return this[_pluginState];
    }
  }
  dart.setSignature(State, {
    constructors: () => ({State: [State, []]}),
    methods: () => ({
      get: [dart.dynamic, [core.String]],
      set: [dart.void, [core.String, dart.dynamic]],
      registerStorable: [dart.void, [core.String, StateStorable]],
      loadFrom: [dart.void, [dart.dynamic]],
      onValueChanged: [async.Stream, [core.String]],
      saveState: [dart.dynamic, []]
    })
  });
  class StateStorable extends core.Object {
    StateStorable() {
    }
  }
  dart.setSignature(StateStorable, {
    constructors: () => ({StateStorable: [StateStorable, []]})
  });
  // Exports:
  exports.State = State;
  exports.StateStorable = StateStorable;
});
//# sourceMappingURL=state.js.map
