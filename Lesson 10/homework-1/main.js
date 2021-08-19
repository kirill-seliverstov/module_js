// 
// Задание №1
// 

let alertButton = document.querySelector('.alert-button')

alertButton.addEventListener('click', function () {
    alert('Alert!');
});


// 
// Задание №2
// 

let changeText = document.querySelector('.change-text');

changeText.addEventListener('click', function () {
    changeText.textContent = 'New text';
});


// 
// Задание №3
// 

let inputTaskThree = document.getElementsByClassName('input-task-three')[0];
let enable = document.getElementsByClassName('enable-form')[0];
let disable = document.getElementsByClassName('disable-form')[0];

disable.addEventListener('click', function(event) {
    inputTaskThree.setAttribute('disabled', 'disabled')
});

enable.addEventListener('click', function(event) {
    inputTaskThree.removeAttribute('disabled', 'disabled')
});

