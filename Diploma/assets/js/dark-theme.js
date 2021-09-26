let btnChangeTheme = document.querySelector('.button--change-theme');
let page = document.querySelector('.page');
let inputs = document.getElementsByClassName('input');
let buttons = document.getElementsByClassName('button');
let selects = document.getElementsByClassName('select');
let header = document.querySelector('.header');
let headerIcon = document.querySelector('.header__icon');
let totalTableHead = document.querySelector('.total__head');

btnChangeTheme.addEventListener('click', changeTheme);

function changeTheme() {
    page.classList.toggle('blue-theme');
    header.classList.toggle('header--blue-theme');
    headerIcon.classList.toggle('header__icon--blue-theme');
    totalTableHead.classList.toggle('total__head--blue-theme');
    changeInputsTheme();
    changeButtonsTheme();
    changeSelectsTheme();
}

function changeInputsTheme() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle('input--blue-theme');
    }
};

function changeButtonsTheme() {
    for (let i = 0; i < inputs.length; i++) {
        buttons[i].classList.toggle('button--blue-theme');
    }
};

function changeSelectsTheme() {
    for (let i = 0; i < inputs.length; i++) {
        selects[i].classList.toggle('select--blue-theme');
    }
};