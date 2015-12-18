import 'package:atom/atom.dart';
import 'package:atom/node/shell.dart';
import 'package:atom/utils/disposable.dart';

class GettingStarted implements Disposable {
  Disposables disposables = new Disposables();

  GettingStarted() {
    disposables.add(atom.commands.add(
      'atom-workspace',
      'flutter:getting-started',
      _gettingStarted
    ));
  }

  void dispose() => disposables.dispose();

  void _gettingStarted(AtomEvent _) {
    shell.openExternal('http://flutter.io/getting-started/');
  }
}
