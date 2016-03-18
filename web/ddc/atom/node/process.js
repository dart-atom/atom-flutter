'use strict';
let dart = require("dart/_runtime");
let logging = require("logging/logging");
let node = require("atom/node/node");
let core = require("dart/core");
let js = require("atom/src/js");
let async = require("dart/async");
let atom = require("atom/atom");
let dartx = dart.dartx;
dart.defineLazyProperties(exports, {
  get process() {
    return new Process._();
  }
});
dart.defineLazyProperties(exports, {
  get isWindows() {
    return exports.process.platform[dartx.startsWith]('win');
  }
});
dart.defineLazyProperties(exports, {
  get isMac() {
    return exports.process.platform == 'darwin';
  }
});
dart.defineLazyProperties(exports, {
  get isLinux() {
    return !dart.notNull(exports.isWindows) && !dart.notNull(exports.isMac);
  }
});
dart.defineLazyProperties(exports, {
  get _logger() {
    return logging.Logger.new('process');
  }
});
class Process extends js.ProxyHolder {
  _() {
    super.ProxyHolder(node.require('process'));
  }
  get platform() {
    return dart.as(this.obj.get('platform'), core.String);
  }
  get chromeVersion() {
    return dart.as(dart.dindex(this.obj.get('versions'), 'chrome'), core.String);
  }
  env(key) {
    try {
      return dart.as(dart.dindex(this.obj.get('env'), key), core.String);
    } catch (err) {
      return null;
    }

  }
}
dart.defineNamedConstructor(Process, '_');
dart.setSignature(Process, {
  constructors: () => ({_: [Process, []]}),
  methods: () => ({env: [core.String, [core.String]]})
});
function exec(command, args, env) {
  if (args === void 0) args = null;
  if (env === void 0) env = null;
  let runner = new ProcessRunner(command, {args: args, env: env});
  return runner.execSimple().then(dart.fn(result => {
    if (result.exit == 0) return result.stdout;
    dart.throw(result.exit);
  }, core.String, [ProcessResult]));
}
dart.fn(exec, async.Future$(core.String), [core.String], [core.List$(core.String), core.Map$(core.String, core.String)]);
function execSync(command) {
  try {
    let result = dart.as(node.require('child_process').callMethod('execSync', dart.list([command], core.String)), core.String);
    if (result == null) return null;
    result = `${result}`[dartx.trim]();
    return dart.notNull(result[dartx.isEmpty]) ? null : result;
  } catch (error) {
    dart.throw(`${error}`);
  }

}
dart.fn(execSync, core.String, [core.String]);
const _exitCompleter = Symbol('_exitCompleter');
const _stdoutController = Symbol('_stdoutController');
const _stderrController = Symbol('_stderrController');
const _process = Symbol('_process');
const _exit = Symbol('_exit');
class ProcessRunner extends core.Object {
  ProcessRunner(command, opts) {
    let args = opts && 'args' in opts ? opts.args : null;
    let cwd = opts && 'cwd' in opts ? opts.cwd : null;
    let env = opts && 'env' in opts ? opts.env : null;
    this[_exitCompleter] = async.Completer$(core.int).new();
    this[_stdoutController] = async.StreamController$(core.String).new();
    this[_stderrController] = async.StreamController$(core.String).new();
    this.command = command;
    this.args = args;
    this.cwd = cwd;
    this.env = env;
    this[_process] = null;
    this[_exit] = null;
  }
  static underShell(command, opts) {
    let args = opts && 'args' in opts ? opts.args : null;
    let cwd = opts && 'cwd' in opts ? opts.cwd : null;
    let env = opts && 'env' in opts ? opts.env : null;
    if (dart.notNull(exports.isMac) && ProcessRunner._shellWrangler == null) {
      ProcessRunner._shellWrangler = new MacShellWrangler();
    }
    if (dart.notNull(exports.isMac) && dart.notNull(ProcessRunner._shellWrangler.isNecessary)) {
      return new ProcessRunner(command, {args: args, cwd: cwd, env: ProcessRunner._shellWrangler.env});
    }
    return new ProcessRunner(command, {args: args, cwd: cwd, env: env});
  }
  get started() {
    return this[_process] != null;
  }
  get finished() {
    return this[_exit] != null;
  }
  get exit() {
    return this[_exit];
  }
  get onExit() {
    return this[_exitCompleter].future;
  }
  get onStdout() {
    return this[_stdoutController].stream;
  }
  get onStderr() {
    return this[_stderrController].stream;
  }
  execSimple() {
    if (this[_process] != null) dart.throw(new core.StateError('exec can only be called once'));
    let stdout = new core.StringBuffer();
    let stderr = new core.StringBuffer();
    this.onStdout.listen(dart.fn(str => stdout.write(str), dart.void, [core.String]));
    this.onStderr.listen(dart.fn(str => stderr.write(str), dart.void, [core.String]));
    return this.execStreaming().then(dart.fn(code => new ProcessResult(code, stdout.toString(), stderr.toString()), ProcessResult, [core.int]));
  }
  execStreaming() {
    if (this[_process] != null) dart.throw(new core.StateError('exec can only be called once'));
    exports._logger.fine(`exec: ${this.command} ${this.args == null ? "" : this.args[dartx.join](" ")}` + `${this.cwd == null ? "" : ` (cwd=${this.cwd})`}`);
    try {
      this[_process] = atom.BufferedProcess.create(this.command, {args: this.args, cwd: this.cwd, env: this.env, stdout: dart.fn(s => this[_stdoutController].add(s), dart.void, [core.String]), stderr: dart.fn(s => this[_stderrController].add(s), dart.void, [core.String]), exit: dart.fn(code => {
          exports._logger.fine(`exit code: ${code} (${this.command})`);
          this[_exit] = dart.asInt(code);
          if (!dart.notNull(this[_exitCompleter].isCompleted)) this[_exitCompleter].complete(code);
        }, dart.void, [core.num]), onWillThrowError: dart.fn(e => {
          if (!dart.notNull(this[_exitCompleter].isCompleted)) this[_exitCompleter].completeError(e);
        })});
    } catch (e) {
      return async.Future$(core.int).error(e);
    }

    return this[_exitCompleter].future;
  }
  write(str) {
    return this[_process].write(str);
  }
  kill() {
    if (this[_process] != null) this[_process].kill();
    async.Future.delayed(new core.Duration({milliseconds: 50}), dart.fn(() => {
      if (!dart.notNull(this[_exitCompleter].isCompleted)) this[_exitCompleter].complete(0);
    }));
    return this[_exitCompleter].future;
  }
  getDescription() {
    if (this.args != null) {
      return `${this.command} ${this.args[dartx.join](' ')}`;
    } else {
      return this.command;
    }
  }
}
dart.setSignature(ProcessRunner, {
  constructors: () => ({
    ProcessRunner: [ProcessRunner, [core.String], {args: core.List$(core.String), cwd: core.String, env: core.Map$(core.String, core.String)}],
    underShell: [ProcessRunner, [core.String], {args: core.List$(core.String), cwd: core.String, env: core.Map$(core.String, core.String)}]
  }),
  methods: () => ({
    execSimple: [async.Future$(ProcessResult), []],
    execStreaming: [async.Future$(core.int), []],
    write: [dart.void, [core.String]],
    kill: [async.Future$(core.int), []],
    getDescription: [core.String, []]
  })
});
ProcessRunner._shellWrangler = null;
class ProcessResult extends core.Object {
  ProcessResult(exit, stdout, stderr) {
    this.exit = exit;
    this.stdout = stdout;
    this.stderr = stderr;
  }
  toString() {
    return `${this.exit}`;
  }
}
dart.setSignature(ProcessResult, {
  constructors: () => ({ProcessResult: [ProcessResult, [core.int, core.String, core.String]]})
});
function queryEnv(variable) {
  try {
    return execSync(`echo \$${variable}`);
  } catch (e) {
    return null;
  }

}
dart.fn(queryEnv, core.String, [core.String]);
const _currentShell = Symbol('_currentShell');
const _targetShell = Symbol('_targetShell');
const _env = Symbol('_env');
class MacShellWrangler extends core.Object {
  MacShellWrangler() {
    this[_currentShell] = null;
    this[_targetShell] = null;
    this[_env] = null;
    this[_currentShell] = queryEnv('0');
    this[_targetShell] = queryEnv('SHELL');
    if (dart.notNull(this.isNecessary)) {
      let result = null;
      if (dart.notNull(this[_targetShell][dartx.endsWith]('/csh')) || dart.notNull(this[_targetShell][dartx.endsWith]('/tcsh'))) {
        result = execSync(`${this[_targetShell]} -c 'printenv'`);
      } else {
        result = execSync(`${this[_targetShell]} -l -c 'printenv'`);
      }
      this[_env] = dart.map();
      for (let line of result[dartx.split]('\n')) {
        let index = line[dartx.indexOf]('=');
        if (index != -1) {
          this[_env][dartx.set](line[dartx.substring](0, index), line[dartx.substring](dart.notNull(index) + 1));
        }
      }
    }
  }
  get isNecessary() {
    return this[_currentShell] == '/bin/sh';
  }
  get targetShell() {
    return this[_targetShell];
  }
  getEnv(variable) {
    return this[_env] == null ? null : this[_env][dartx.get](variable);
  }
  get env() {
    return this[_env];
  }
  toString() {
    return `${this[_currentShell]} ${this[_targetShell]} ${this[_env]}`;
  }
}
dart.setSignature(MacShellWrangler, {
  constructors: () => ({MacShellWrangler: [MacShellWrangler, []]}),
  methods: () => ({getEnv: [core.String, [core.String]]})
});
// Exports:
exports.Process = Process;
exports.exec = exec;
exports.execSync = execSync;
exports.ProcessRunner = ProcessRunner;
exports.ProcessResult = ProcessResult;
exports.queryEnv = queryEnv;
exports.MacShellWrangler = MacShellWrangler;
//# sourceMappingURL=process.js.map
