let btnChangeTheme = document.querySelector('.button--change-theme');
let page = document.querySelector('.page');
let headerIcon = document.querySelector('.header__icon');
let totalTableHead = document.querySelector('.total__head');

btnChangeTheme.addEventListener('click', changeTheme);

function changeTheme() {
    page.classList.toggle('blue-theme');
}