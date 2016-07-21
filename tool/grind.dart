// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:atom/build/build.dart';
import 'package:atom/build/publish.dart';
import 'package:grinder/grinder.dart';

main(List<String> args) => grind(args);

@Task()
analyze() => new PubApp.global('tuneup').runAsync(['check']);

@Task()
build() async {
  return buildDart2JS();
  // return buildDdc();
}

buildDart2JS() async {
  File inputFile = getFile('web/entry.dart');
  File outputFile = getFile('web/entry.dart.js');

  await Dart2js.compileAsync(inputFile, csp: true);
  outputFile.writeAsStringSync(patchDart2JSOutput(outputFile.readAsStringSync()));
}

@Task()
buildDdc() async {
  // // In dart:convert, change '= JSON.parse(' to '= window.JSON.parse('.
  // File convertJs = getFile('web/ddc/dev_compiler/runtime/dart/convert.js');
  // convertJs.writeAsStringSync(
  //   convertJs.readAsStringSync().replaceAll(
  //     '= JSON.parse(',
  //     '= window.JSON.parse('
  //   )
  // );

  // Manually run './tool/build_sdk.sh --modules=node'.

  _ddc(
    out: 'web/logging.js',
    inputs: ['package:logging/logging.dart']
  );

  _ddc(
    out: 'web/usage.js',
    inputs: [
      'package:usage/usage.dart',
      'package:usage/src/uuid.dart',
      'package:usage/src/usage_impl.dart'
    ],
    summaries: ['web/logging.sum']
  );

  _ddc(
    out: 'web/atom.js',
    inputs: [
      'package:atom/atom.dart',
      'package:atom/atom_utils.dart',
      'package:atom/node/command.dart',
      'package:atom/node/config.dart',
      'package:atom/node/fs.dart',
      'package:atom/node/node.dart',
      'package:atom/node/notification.dart',
      'package:atom/node/package.dart',
      'package:atom/node/process.dart',
      'package:atom/node/shell.dart',
      'package:atom/node/workspace.dart',
      'package:atom/src/js.dart',
      'package:atom/src/utils.dart',
      'package:atom/utils/dependencies.dart',
      'package:atom/utils/disposable.dart',
      'package:atom/utils/package_deps.dart',
      'package:atom/utils/utils.dart'
    ],
    summaries: ['web/logging.sum']
  );

  _ddc(
    out: 'web/atom_flutter.js',
    inputs: [
      'package:atom_flutter/flutter.dart',
      'package:atom_flutter/menus/getting_started.dart',
      'package:atom_flutter/state.dart',
      'package:atom_flutter/usage.dart'
    ],
    summaries: ['web/logging.sum', 'web/atom.sum', 'web/usage.sum']
  );

  _ddc(
    out: 'web/entry.js',
    inputs: [ 'web/entry.dart' ],
    summaries: ['web/logging.sum', 'web/atom.sum', 'web/usage.sum', 'web/atom_flutter.sum']
  );
}

void _ddc({ String out, List<String> inputs, List<String> summaries: const [] }) {
  List<String> args = ['--modules', 'node', '-o', out];

  for (String summary in summaries) {
    args.add('-s');
    args.add(summary);
  }

  args.addAll(inputs);

  Stopwatch stopwatch = new Stopwatch()..start();
  run(sdkBin('dartdevc'), arguments: args, quiet: true);
  stopwatch.stop();

  int inSize = _sizeInKb(inputs.map((String s) => _fileFromRef(s).lengthSync()).reduce((a, b) => a + b));
  int outSize = _sizeInKb(new File(out).lengthSync());
  log('Generated ${out}, ${inSize}k ==> ${outSize}k (${_ms(stopwatch.elapsedMilliseconds)}).');
}

int _sizeInKb(int sizeInBytes) => (sizeInBytes + 1023) ~/ 1024;

String _ms(int milliseconds) {
  String str = milliseconds.toString();
  if (str.length > 3) str = str.substring(0, str.length - 3) + ',' + str.substring(str.length - 3);
  return '${str}ms';
}

File _fileFromRef(String reference) {
  if (reference.startsWith('package:')) {
    return new File('packages/${reference.substring('package:'.length)}');
  } else {
    return new File(reference);
  }
}

@Task()
@Depends(build) //analyze, build, test, runAtomTests)
publish() => publishAtomPlugin();

@DefaultTask()
@Depends(analyze, build)
bot() => null;

@Task()
clean() {
  for (FileSystemEntity entity in webDir.listSync()) {
    if (entity is File && (entity.path.endsWith('.sum') || entity.path.endsWith('.js.map'))) {
      delete(entity);
    }
  }
}
