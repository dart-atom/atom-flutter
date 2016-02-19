dart_library.library('atom/utils/package_deps', null, /* Imports */[
  'dart/_runtime',
  'atom/atom',
  'dart/core',
  'dart/async',
  'atom/node/process'
], /* Lazy imports */[
], function(exports, dart, atom, core, async, process) {
  'use strict';
  let dartx = dart.dartx;
  function install(packageLabel, package$, opts) {
    let justNotify = opts && 'justNotify' in opts ? opts.justNotify : false;
    return package$.loadPackageJson().then(dart.fn(info => {
      let installedPackages = atom.atom.packages.getAvailablePackageNames();
      let requiredPackages = dart.as(info[dartx.get]('required-packages'), core.List$(core.String));
      if (requiredPackages == null || dart.notNull(requiredPackages[dartx.isEmpty])) {
        return null;
      }
      let toInstall = core.Set$(core.String).from(requiredPackages);
      toInstall.removeAll(installedPackages);
      if (dart.notNull(toInstall.isEmpty)) return null;
      if (dart.notNull(justNotify)) {
        toInstall.forEach(dart.fn(name => {
          atom.atom.notifications.addInfo(`${packageLabel} recommends installing the '${name}' plugin for best results.`, {dismissable: true});
        }, dart.void, [core.String]));
      } else {
        return async.Future.forEach(toInstall, _installPackage);
      }
    }, dart.dynamic, [core.Map]));
  }
  dart.fn(install, async.Future, [core.String, atom.AtomPackage], {justNotify: core.bool});
  function _installPackage(name) {
    atom.atom.notifications.addInfo(`Installing ${name}…`);
    let runner = new process.ProcessRunner(atom.atom.packages.getApmPath(), {args: dart.list(['--no-color', 'install', name], core.String)});
    return runner.execSimple().then(dart.fn(result => {
      if (result.exit == 0) {
        atom.atom.packages.activatePackage(name);
      } else {
        if (result.stderr != null && dart.notNull(result.stderr[dartx.isNotEmpty])) {
          dart.throw(result.stderr[dartx.trim]());
        } else {
          dart.throw(`exit code ${result.exit}`);
        }
      }
    }, dart.dynamic, [process.ProcessResult])).then(dart.fn(_ => {
      atom.atom.notifications.addSuccess(`Installed ${name}.`);
    })).catchError(dart.fn(e => {
      atom.atom.notifications.addError(`Error installing ${name}:`, {detail: `${e}`, dismissable: true});
    }));
  }
  dart.fn(_installPackage, async.Future, [core.String]);
  // Exports:
  exports.install = install;
});
//# sourceMappingURL=package_deps.js.map
