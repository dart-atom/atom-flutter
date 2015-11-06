// Copyright (c) 2015, the Flutter project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:grinder/grinder.dart';

main(List<String> args) => grind(args);

@Task()
analyze() {
  return new PubApp.global('tuneup').runAsync(['check']);
}

@DefaultTask()
build() async {
  // dart ../../dev_compiler/bin/dev_compiler.dart -oweb/ddc web/entry.dart

  await new DevCompiler().compileAsync(
    getFile('web/entry.dart'), getDir('web/ddc'));

  // TODO: Post-process the output?

}

@Task()
@Depends(analyze, build)
bot() => null;
