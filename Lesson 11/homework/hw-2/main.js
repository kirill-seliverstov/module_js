// 
// Task #1
// 

console.log('Ищем многоточие...'.match(/\.{3}/g));

// 
// Task #2
// 

// ожидает решения


// 
// Task #3
// 

let color = new RegExp(/[#][a-z0-9]{3,6}/g);


// 
// Task #4
// 

// Предлагаю строку str = ''


// 
// Task #4
// 

let form = document.getElementById('registration-form');
let password = document.getElementById('pwd');
let validationExp = new RegExp(/^(?=\D*\d*\W)\S{6,}$/g);
let error = document.getElementById('error');
let asd = document.getElementById('asd');

form.addEventListener('submit', formValidation);

function formValidation (event) {
    let messages = [];
    if (validationExp.test(password.value) != true) {
        messages.push('Пароль должен включать в себя хотя бы одну цифру, один спецсимвол и одну букву, а так же быть длиннее 6 знаков');
    } else {
        alert('Введенный пароль: ' + password.value);
    }

    if (messages.length > 0) {
        event.preventDefault();
        error.textContent = messages.join(', ');
    }
};
