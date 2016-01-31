dart_library.library('atom/node/process', null, /* Imports */[
  'dart/_runtime',
  'atom/src/js',
  'atom/node/node',
  'dart/core',
  'dart/async',
  'atom/atom'
], /* Lazy imports */[
], function(exports, dart, js, node, core, async, atom) {
  'use strict';
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
      return dart.as(dart.dindex(this.obj.get('env'), key), core.String);
    }
  }
  dart.defineNamedConstructor(Process, '_');
  dart.setSignature(Process, {
    constructors: () => ({_: [Process, []]}),
    methods: () => ({env: [core.String, [core.String]]})
  });
  function exec(cmd, args) {
    if (args === void 0) args = null;
    let runner = new ProcessRunner(cmd, {args: args});
    return dart.as(runner.execSimple().then(dart.fn(result => {
      if (result.exit == 0) return result.stdout;
      dart.throw(result.exit);
    }, dart.dynamic, [ProcessResult])), async.Future$(core.String));
  }
  dart.fn(exec, async.Future$(core.String), [core.String], [core.List$(core.String)]);
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
      return dart.as(this.execStreaming().then(dart.fn(code => {
        return new ProcessResult(code, dart.toString(stdout), dart.toString(stderr));
      }, dart.dynamic, [core.int])), async.Future$(ProcessResult));
    }
    execStreaming() {
      if (this[_process] != null) dart.throw(new core.StateError('exec can only be called once'));
      try {
        this[_process] = atom.BufferedProcess.create(this.command, {args: this.args, cwd: this.cwd, env: this.env, stdout: dart.fn(s => this[_stdoutController].add(s), dart.void, [core.String]), stderr: dart.fn(s => this[_stderrController].add(s), dart.void, [core.String]), exit: dart.fn(code => {
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
    constructors: () => ({ProcessRunner: [ProcessRunner, [core.String], {args: core.List$(core.String), cwd: core.String, env: core.Map$(core.String, core.String)}]}),
    methods: () => ({
      execSimple: [async.Future$(ProcessResult), []],
      execStreaming: [async.Future$(core.int), []],
      write: [dart.void, [core.String]],
      kill: [async.Future$(core.int), []],
      getDescription: [core.String, []]
    })
  });
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
  // Exports:
  exports.Process = Process;
  exports.exec = exec;
  exports.ProcessRunner = ProcessRunner;
  exports.ProcessResult = ProcessResult;
});
//# sourceMappingURL=process.js.map
