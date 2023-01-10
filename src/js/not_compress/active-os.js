let MACOS = navigator.appVersion.indexOf('OS X');
let WINDOWS = navigator.appVersion.indexOf('Windows');
let ANDROID = navigator.appVersion.indexOf('Android');
let LINUX = navigator.appVersion.indexOf('Linux');

if (MACOS > -1) { GetMacOS(); }
if (WINDOWS > -1) { GetWindows(); }
if (ANDROID > -1) { GetAndroid(); }
if (LINUX > -1) { GetLinux(); }

function GetMacOS() {
    console.log('macos');
}

function GetWindows() {
    console.log('windows');
}

function GetAndroid() {
    console.log('android');
}

function GetLinux() {
    console.log('linux');
}
