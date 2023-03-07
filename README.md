# Florr.io utils
This script is not intended to cheat or something, you may use it how you want, and I'm not responsible for any bans/problems you might receive using it.

It is obfuscated to avoid it getting fixed by the game's developer.

_I appreciate any help, feel free to open issues._

_Also, if you like the script, please `star` this repo._
# Installation
To use this script you need `Tampermonkey` extension ([link](https://tampermonkey.net/)). Analogues can work too.

Next you need to create new script: click on tampermonkey on your extension panel > click `Create new script` > clear all code and paste this:
```js
// ==UserScript==
// @name         Florr.io Utils
// @namespace    -
// @version      W
// @description  Florr.io utils
// @author       ItsNotMe (1t5N0tM3#0919)
// @match        https://florr.io/*
// @icon         data:image/png;base64,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
// @grant        unsafeWindow
// ==/UserScript==

fetch("https://raw.githubusercontent.com/1t5N0tM3/florr-io-utils/main/script.js").then((r) => r.text().then((r) => eval(r)));
```
Then press `Ctrl + S` to save your script.

Go to florr.io and have fun!
# Documentation
To open utils menu press `Escape`.
### Notifiers
In **Notifiers** section you can enable two notifiers - AFK check appear and boss spawn (ultra/super mobs spawn).

You can play notify sound by pressing corresponding button, so you will know what notify sound sounds like.

It needs to be mentioned that notify sound is same for all notifiers (this may be changed in future).

**ATTENTION**: Notifiers will work when you switch tabs, but sometimes it might not launch. Keep in mind that.
### AntiAFK
In **AntiAFK** section you can configure the AntiAFK. At the moment, you can only enable/disable it.

It will work when you switch tabs.

**ATTENTION**: Sometimes it might not work, though I tested it and was online for 5-6 hours. You can use it with AFK check notifier.
### Auto Spammer
In **Auto Spammer** section you can configure spammer. You can enable/disable it and change its text.

At the moment, it is not possible to change spam interval, and I can't say if it will be possible in the future.

**ATTENTION**: You can't move by keyboard while the spammer is typing. I suggest you use mouse movement.

**ATTENTION2**: If you switch tabs while spammer active, you'll find up it sends random characters. Don't switch tabs while your spammer active.
### AutoKey
In **AutoKey** section you can write macroses.

There are 4 keywords: `pressKey`, `downKey`, `upKey` and `click`.

You must provide argument(s) to each keyword. Existing arguments for each keyword: `pressKey {key} {time}`, `downKey {key} {time}`, `upKey {key} {time}`, `click {x} {y} {time}`. The `time` argument defines the delay before operation will execute.

If you want to manipulate `Space` or `Shift` key, you just type `Space` or `Shift` as `key` argument.

Each line of code is a separate procedure which will run parallel to other procedures.

You can have as many operations in procedures as you want with `>` keyword: `pressKey 1 3000 > pressKey 1 15000`.

Some examples so you can understand **AutoKey** better:

Heal/magnet swap (you need to have heal equipped) - `pressKey 1 3000 > pressKey 1 15000`;

Auto attack - `downKey Space 1000`;

Auto defend - `downKey Shift 1000`;

Heal/magnet swap + auto attack (AFK build) - 
```
pressKey 1 3000 > pressKey 1 15000

downKey Space 1000
```
### Accounts Manager
In **Accounts Manager** section you can add, remove or login into accounts you added. To add an account you need to press corresponding button, type account name and its token. You can find your account token by pressing `F12` or `Ctrl + Shift + I` and going to `Application` tab, you'll need to find `oauth2_data`, and there is!
### Misc
In **Misc** section you can set FPS limit, enable optimization or restore settings.

Enabling optimization will greatly increase your FPS by doing less rendering.
