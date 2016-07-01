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
  // return buildDDC();
}

buildDart2JS() async {
  File inputFile = getFile('web/entry.dart');
  File outputFile = getFile('web/entry.dart.js');

  await Dart2js.compileAsync(inputFile, csp: true);
  outputFile.writeAsStringSync(patchDart2JSOutput(outputFile.readAsStringSync()));
}

buildDDC() async {
  // runDartScript(
  //   '../../dev_compiler/bin/dev_compiler.dart',
  //   arguments: [
  //     '-oweb/ddc',
  //     'web/entry.dart']
  // );
  PubApp ddc = new PubApp.global('dev_compiler');
  await ddc.runAsync([
    '-oweb/ddc',
    'web/entry.dart'
  ]);

  // Generate web/entry_all.js by traversing the web/ddc output directory.
  Directory ddcDir = getDir('web/ddc');
  List<File> files = ddcDir.listSync(followLinks: false, recursive: true)
      .where((entity) => entity is File && entity.path.endsWith('.js'))
      .toList();

  files.removeWhere((file) => file.path.endsWith('dart_library.js'));
  files.removeWhere((file) => file.path.endsWith('harmony_feature_check.js'));

  // In dart:convert, change '= JSON.parse(' to '= window.JSON.parse('.
  File convertJs = getFile('web/ddc/dev_compiler/runtime/dart/convert.js');
  convertJs.writeAsStringSync(
    convertJs.readAsStringSync().replaceAll(
      '= JSON.parse(',
      '= window.JSON.parse('
    )
  );

  List<String> paths = new List.from(files
      .map((file) => file.path)
      .map((path) => path.replaceAll('web/ddc/', './ddc/')));

  File entryJsFile = getFile('web/entry_all.js');
  String contents = '''
// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

global.dart_library = require('./ddc/dev_compiler/runtime/dart_library.js');

${paths.map((path) => "require('${path}');").join('\n')}

dart_library.start('entry');

module.exports = {
  activate: function(arg) {
    global.flutter.activate(); // TODO: arg);
  },

  config: global.flutter.config,

  serialize: function(arg) {
    return global.flutter.serialize();
  },

  deactivate: function() {
    global.flutter.deactivate();
  }
};
''';

  log('Generated ${entryJsFile.path}.');
  entryJsFile.writeAsStringSync(contents);
}

@Task()
@Depends(build) //analyze, build, test, runAtomTests)
publish() => publishAtomPlugin();

@DefaultTask()
@Depends(analyze, build)
bot() => null;

/* DDC manual commands:

  dart $DDC_PATH/bin/dartdevc.dart compile --modules node -o web/entry.js -s web/logging.sum -s web/atom.sum -s web/atom_flutter.sum -s web/usage.sum web/entry.dart

  dart $DDC_PATH/bin/dartdevc.dart compile --modules node -o web/logging.js package:logging/logging.dart

  dart $DDC_PATH/bin/dartdevc.dart compile --modules node -o web/usage.js package:usage/usage.dart package:usage/src/uuid.dart package:usage/src/usage_impl.dart

  dart $DDC_PATH/bin/dartdevc.dart compile --modules node -o web/atom.js -s web/logging.sum package:atom/atom.dart package:atom/atom_utils.dart package:atom/node/command.dart package:atom/node/config.dart package:atom/node/fs.dart package:atom/node/node.dart package:atom/node/notification.dart package:atom/node/package.dart package:atom/node/process.dart package:atom/node/shell.dart package:atom/node/workspace.dart package:atom/src/js.dart package:atom/src/utils.dart package:atom/utils/dependencies.dart package:atom/utils/disposable.dart package:atom/utils/package_deps.dart package:atom/utils/utils.dart

  dart $DDC_PATH/bin/dartdevc.dart compile --modules node -o web/atom_flutter.js -s web/logging.sum -s web/atom.sum -s web/usage.sum package:atom_flutter/flutter.dart package:atom_flutter/menus/getting_started.dart package:atom_flutter/state.dart package:atom_flutter/usage.dart

  dart $DDC_PATH/tool/build_sdk.dart --dart-sdk $DDC_PATH/tool/input_sdk/ --modules node -o web/dart_sdk.js

*/
