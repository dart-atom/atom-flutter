// Copyright (c) 2015, the Flutter project authors. Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';
import 'dart:html' show document, HttpRequest, window;

import 'package:atom/atom.dart';
import 'package:atom/node/package.dart';
import 'package:atom/utils/disposable.dart';
import 'package:logging/logging.dart';
import 'package:usage/src/usage_impl.dart';
import 'package:usage/usage.dart';

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
          _ga = new _AnalyticsAtom(_UA, 'flutter', version);
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

class _AnalyticsAtom extends AnalyticsImpl {
  _AnalyticsAtom(String trackingId, String applicationName, String applicationVersion) : super(
    trackingId,
    new _AtomUsagePersistentProperties(applicationName),
    new _AtomUsagePostHandler(),
    applicationName: applicationName,
    applicationVersion: applicationVersion
  ) {
    int screenWidth = window.screen.width;
    int screenHeight = window.screen.height;
    setSessionValue('sr', '${screenWidth}x$screenHeight');
    setSessionValue('sd', '${window.screen.pixelDepth}-bits');

    setSessionValue('ul', window.navigator.language);
  }
}

class _AtomUsagePersistentProperties extends PersistentProperties {
  _AtomUsagePersistentProperties(String name) : super(name);

  dynamic operator[](String key) => atom.config.getValue('_flutterAnalytics.${key}');

  void operator[]=(String key, dynamic value) {
    atom.config.setValue('_flutterAnalytics.${key}', value);
  }
}

class _AtomUsagePostHandler extends PostHandler {
  Future sendPost(String url, Map<String, dynamic> parameters) {
    int viewportWidth = document.documentElement.clientWidth;
    int viewportHeight = document.documentElement.clientHeight;
    parameters['vp'] = '${viewportWidth}x$viewportHeight';

    String data = _postEncode(parameters);
    return HttpRequest.request(url, method: 'POST', sendData: data).catchError((e) {
      // Catch errors that can happen during a request, but that we can't do
      // anything about, e.g. a missing internet conenction.
    });
  }
}

String _postEncode(Map<String, dynamic> map) {
  // &foo=bar
  return map.keys.map((String key) {
    String value = '${map[key]}';
    String result = Uri.encodeComponent(value);
    return "${key}=${result}";
  }).join('&');
}
