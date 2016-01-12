// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';

import 'package:atom/atom.dart';
import 'package:atom/utils/disposable.dart';
import 'package:logging/logging.dart';
import 'package:usage/usage_html.dart';

import 'state.dart';

final String _UA = 'UA-67589403-3';

Analytics _ga = new AnalyticsMock();

class UsageManager implements Disposable {
  StreamSubscriptions _subs = new StreamSubscriptions();
  Disposable _editorObserve;

  UsageManager() {
    _init().then((_) => trackCommand('auto-startup'));
  }

  Future _init() {
    return atomPackage.getPackageVersion().then((String version) {
      atom.config.observe('flutter.sendUsage', null, (value) {
        if (value == true) {
          _ga = new AnalyticsHtml(_UA, 'flutter', version);
          _ga.optIn = true;
          _ga.sendScreenView('editor');
        } else {
          _ga = new AnalyticsMock();
        }
      });

      _subs.add(Logger.root.onRecord.listen(_handleLogRecord));
      _subs.add(atom.commands.onDidDispatch.listen(trackCommand));
    });
  }

  void dispose() {
    trackCommand('auto-shutdown');
    _subs.cancel();
    if (_editorObserve != null) _editorObserve.dispose();
  }
}

void trackCommand(String command) {
  String category = 'flutter';

  List list = command.split(':');
  if (list.length >= 2) {
    category = list[0];
    command = list[1];
  }

  // Ignore `core:` commands (core:confirm, core:cancel, ...).
  if (category == 'core') return;

  _ga.sendEvent(category, command);
}

void _handleLogRecord(LogRecord log) {
  if (log.level >= Level.WARNING) {
    bool fatal = log.level >= Level.SEVERE;
    String message = log.message;
    if (message.contains('/Users/')) {
      message = message.substring(0, message.indexOf('/Users/'));
    }
    String desc = '${log.loggerName}:${message}';
    if (log.error != null) desc += ',${log.error.runtimeType}';
    if (log.stackTrace != null) desc += ',${sanitizeStacktrace(log.stackTrace)}';
    _ga.sendException(desc, fatal: fatal);
  }
}
