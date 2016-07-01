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
