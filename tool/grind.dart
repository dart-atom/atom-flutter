// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:grinder/grinder.dart';

main(List<String> args) => grind(args);

@Task()
analyze() {
  return new PubApp.global('tuneup').runAsync(['check']);
}

@Task()
build() async {
  // dart ../../dev_compiler/bin/dev_compiler.dart -oweb/ddc web/entry.dart
  // PubApp ddc = new PubApp.local('dev_compiler');
  // await ddc.runAsync(['-oweb/ddc', 'web/entry.dart']);

  await new DevCompiler().compileAsync(
      getFile('web/entry.dart'), getDir('web/ddc'));

  // Generate web/entry_all.js by traversing the web/ddc output directory.
  Directory ddcDir = getDir('web/ddc');
  List<File> files = ddcDir.listSync(followLinks: false, recursive: true)
      .where((entity) => entity is File && entity.path.endsWith('.js'))
      .toList();

  files.removeWhere((file) => file.path.endsWith('dart_utils.js'));
  files.removeWhere((file) => file.path.endsWith('dart_library.js'));
  files.removeWhere((file) => file.path.endsWith('harmony_feature_check.js'));

  List<String> paths = files
      .map((file) => file.path)
      .map((path) => path.replaceAll('web/ddc/', './ddc/'))
      .toList();

  File entryJsFile = getFile('web/entry_all.js');
  String contents = '''
// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

global.dart_utils = require('./ddc/dev_compiler/runtime/dart_utils.js');
global.dart_library = require('./ddc/dev_compiler/runtime/dart_library.js');

${paths.map((path) => "require('${path}');").join('\n')}

dart_library.start('entry');

module.exports = {
  activate: function(arg) {
    global.flutter.activate(arg);
  },

  config: global.flutter.config,

  deactivate: function() {
    global.flutter.deactivate();
  }
};
''';

  log('Generated ${entryJsFile.path}.');
  entryJsFile.writeAsStringSync(contents);
}

@DefaultTask()
@Depends(analyze, build)
bot() => null;

@Task('Generate a DDC analysis report')
report() {
  return new DevCompiler().analyzeAsync(
    getFile('web/entry.dart'), htmlReport: true);
}
