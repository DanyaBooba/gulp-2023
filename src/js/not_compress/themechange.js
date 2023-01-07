let btnicon = document.getElementById('themechangebutton_icon');
let themecolor = document.getElementById('themeColor');
let light = document.getElementById('stylesheetlight');
let dark = document.getElementById('stylesheetdark');

function ThemeChangeButton() {
    let theme = localStorage.getItem('color-theme');
    if (theme === 'light') {
        GetAuto();
    }
    else if (theme === 'dark') {
        GetLight();
    }
    else if (theme !== 'dark' && theme !== 'light') {
        GetDark();
    }
    else {
        GetAuto();
    }
}

function GetDark() {
    if(btnicon !== null) { btnicon.href.baseVal = "/img/icons/themes.svg#dark"; }
    localStorage.setItem('color-theme', 'dark');
    light.media = "not all";
    dark.media = "all";

    console.log(themecolor);
}

function GetLight() {
    if(btnicon !== null) { btnicon.href.baseVal = "/img/icons/themes.svg#light"; }
    localStorage.setItem('color-theme', 'light');
    dark.media = "not all";
    light.media = "all";

    console.log(themecolor);
}

function GetAuto() {
    if(btnicon !== null) { btnicon.href.baseVal = "/img/icons/themes.svg#auto"; }
    localStorage.removeItem('color-theme');
    light.media = "(prefers-color-scheme: light)";
    dark.media = "(prefers-color-scheme: dark)";

    console.log(themecolor);
}

if (localStorage.getItem('color-theme') === 'dark') {
    GetDark();
}
else if (localStorage.getItem('color-theme') === 'light') {
    GetLight();
}
else {
    GetAuto();
}
