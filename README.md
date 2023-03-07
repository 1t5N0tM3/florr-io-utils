# Florr.io utils
This script is not intended to cheat or something, you may use it how you want, and I'm not responsible for any bans/problems you might receive using it.

It is obfuscated to avoid it getting fixed by the game's developer.

_I appreciate any help, feel free to open issues._

_Also, if you like the script, please `star` this repo._
# Documentation
### Notifiers
In **Notifiers** section you can enable two notifiers - AFK check appear and boss spawn (ultra/super mobs spawn).

You can play notify sound by pressing corresponding button, so you will know what notify sound sounds like.

It needs to be mentioned that notify sound is same for all notifiers (this may be changed in future).

**ATTENTION**: Notifiers will work when you switch tabs, but sometimes it might not launch. Keep in mind that.
### AntiAFK
In **AntiAFK** section you can configure the AntiAFK. At the moment, you can only enable/disable it.

**ATTENTION**: Sometimes it might not work, though I tested it and was online for 5-6 hours. You can use it with AFK check notifier.
### Auto Spammer
In **Auto Spammer** section you can configure spammer. You can enable/disable it and change its text.

At the moment, it is not possible to change spam interval, and I can't say if it will be even added in the future.

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
