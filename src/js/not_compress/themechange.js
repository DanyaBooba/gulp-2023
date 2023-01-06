let button = document.getElementById('themechangebutton');
let btnicon = document.getElementById('themechangebutton_icon');
let btnAuto = document.getElementById('changethemeauto');

let light = document.getElementById('stylesheetlight');
let dark = document.getElementById('stylesheetdark');

function ButtonAuto() {
    MainControl('auto');
}

function ButtonLight() {
    MainControl('light');
}

function ButtonDark() {
    MainControl('dark');
}

function MainControl(theme) {
    if (theme === "light") {
        ChangeStatusButtonLight();
        ChangeStatusLight();
    } else if (theme === "dark") {
        ChangeStatusButtonDark();
        ChangeStatusDark();
    } else {
        ChangeStatusButtonAuto();
        ChangeStatusAuto();
    }
}

function ChangeStatusAuto() {
    localStorage.removeItem('color-theme');
    light.media = "(prefers-color-scheme: light)";
    dark.media = "(prefers-color-scheme: dark)";
}

function ChangeStatusButtonDark() {
    ClearAllClasses();

    if(btnDark !== null) {btnDark.classList.add('btn-dark');}
    if (btnLight !== null) {btnLight.classList.add('btn-light');}
    if (btnAuto !== null) {btnAuto.classList.add('btn-light');}
}

function ChangeStatusLight() {
    localStorage.setItem('color-theme', 'light');
    light.media = "all";
    dark.media = "not all";
}

function ChangeStatusButtonLight() {
    ClearAllClasses();

    if (btnLight !== null) {btnLight.classList.add('btn-dark');}
    if(btnDark !== null) {btnDark.classList.add('btn-light');}
    if(btnAuto !== null) {btnAuto.classList.add('btn-light');}
}

function ChangeStatusDark() {
    localStorage.setItem('color-theme', 'dark');
    light.media = "not all";
    dark.media = "all";
}

function ChangeStatusButtonAuto() {
    ClearAllClasses();

    if(btnAuto !== null) {btnAuto.classList.add('btn-dark');}
    if(btnDark !== null) {btnDark.classList.add('btn-light');}
    if(btnLight !== null) {btnLight.classList.add('btn-light');}
}

function ClearAllClasses() {
    if(btnDark !== null) {btnDark.classList.remove('btn-dark');}
    if(btnDark !== null) {btnDark.classList.remove('btn-light');}
    if(btnLight !== null) {btnLight.classList.remove('btn-dark');}
    if(btnLight !== null) {btnLight.classList.remove('btn-light');}
    if(btnAuto !== null) {btnAuto.classList.remove('btn-dark');}
    if(btnAuto !== null) {btnAuto.classList.remove('btn-light');}
}

if (localStorage.getItem('color-theme')) {
    MainControl(localStorage.getItem('color-theme'));
}
else {
    MainControl('auto');
}
