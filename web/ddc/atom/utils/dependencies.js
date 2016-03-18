'use strict';
let dart = require("dart/_runtime");
let async = require("dart/async");
let core = require("dart/core");
let dartx = dart.dartx;
dart.copyProperties(exports, {
  get deps() {
    return Dependencies.instance;
  }
});
const _instances = Symbol('_instances');
const _calcParent = Symbol('_calcParent');
class Dependencies extends core.Object {
  static setGlobalInstance(deps) {
    Dependencies._global = deps;
  }
  static get instance() {
    let deps = dart.as(async.Zone.current.get('dependencies'), Dependencies);
    return deps != null ? deps : Dependencies._global;
  }
  Dependencies() {
    this[_instances] = dart.map();
  }
  get parent() {
    return this[_calcParent](async.Zone.current);
  }
  getDependency(type) {
    if (dart.notNull(this[_instances][dartx.containsKey](type))) {
      return this[_instances][dartx.get](type);
    }
    let parent = this[_calcParent](async.Zone.current);
    return parent != null ? parent.getDependency(type) : null;
  }
  setDependency(type, instance) {
    this[_instances][dartx.set](type, instance);
  }
  get(type) {
    return this.getDependency(type);
  }
  set(type, instance) {
    (() => {
      return this.setDependency(type, instance);
    })();
    return instance;
  }
  get types() {
    return this[_instances][dartx.keys];
  }
  runInZone(func) {
    let zone = async.Zone.current.fork({zoneValues: dart.map({dependencies: this})});
    zone.run(dart.as(func, dart.functionType(dart.dynamic, [])));
  }
  [_calcParent](zone) {
    if (dart.equals(this, Dependencies._global)) return null;
    let parentZone = zone.parent;
    if (parentZone == null) return Dependencies._global;
    let deps = dart.as(parentZone.get('dependencies'), Dependencies);
    if (dart.equals(deps, this)) {
      return this[_calcParent](parentZone);
    } else {
      return deps != null ? deps : Dependencies._global;
    }
  }
}
dart.setSignature(Dependencies, {
  constructors: () => ({Dependencies: [Dependencies, []]}),
  methods: () => ({
    getDependency: [dart.dynamic, [core.Type]],
    setDependency: [dart.void, [core.Type, dart.dynamic]],
    get: [dart.dynamic, [core.Type]],
    set: [dart.void, [core.Type, dart.dynamic]],
    runInZone: [dart.void, [core.Function]],
    [_calcParent]: [Dependencies, [async.Zone]]
  }),
  statics: () => ({setGlobalInstance: [dart.dynamic, [Dependencies]]}),
  names: ['setGlobalInstance']
});
Dependencies._global = null;
// Exports:
exports.Dependencies = Dependencies;
//# sourceMappingURL=dependencies.js.map
