[![Build Status](https://travis-ci.org/dart-atom/atom-flutter.svg?branch=master)](https://travis-ci.org/dart-atom/atom-flutter)

## Status - discontinued

Flutter previously offered two editor plugins - one for Atom and one for IntelliJ. Late
2016 we consolidated our editor engineering teams to work on a single plugin: IntelliJ.

The Atom plugin has survived long with little maintenance, but we’re now starting to make
larger changes to the flutter tools editor protocol and do not expect to be able to keep
Atom updated.

We have moved the flutter-atom plugin out of the flutter repository to a new home, however
without a new owner we intend to de-list the existing plugin from the Atom store.

Note: Dart support in Atom has long been successfully community-maintained, and after this
change you can still use Atom to write Flutter applications. However the `Run` button, device
selector and ability to automatically connect to the debugger on a mobile phone will go away.

All of this functionality is of course still available through the flutter command line tool,
or through IntelliJ.

## atom-flutter

A [Flutter][] development environment for Atom.

![Flutter plugin for Atom screenshot](https://raw.githubusercontent.com/dart-atom/atom-flutter/master/doc/images/screenshot.png)

### Flutter!

Flutter is a new project to help developers build high-performance, high-fidelity,
mobile apps for iOS and Android from a single codebase.

For more information about Flutter see [flutter.io](https://flutter.io) and the
[getting started guide](https://flutter.io/getting-started/).

### Features

Some of the most used features include:

* Cmd-R (mac) or Control-R (windows) to run your app in iOS simulator and Android device
* Create a new Flutter app
* Debug in iOS simulator and Android device
* Code completion

Most features are listed in the Command Palette (Cmd-Shift-P / Control-Shift-P).

### Reporting bugs

Please file bugs at the [issue tracker][tracker].

[tracker]: https://github.com/dart-atom/atom-flutter/issues

### See also

This plugin uses functionality from the
[dartlang](https://github.com/dart-atom/dartlang) plugin.

[Flutter]: http://flutter.io
