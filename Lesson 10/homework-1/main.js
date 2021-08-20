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

// Почему это не работает с формой? Закомментил form - все стало прекрасно

let inputTaskThree = document.getElementsByClassName('input-task-three')[0];
let enable = document.getElementsByClassName('enable-form')[0];
let disable = document.getElementsByClassName('disable-form')[0];

disable.addEventListener('click', function(event) {
    event.preventDefault();
    inputTaskThree.setAttribute('disabled', 'disabled');
});

enable.addEventListener('click', function(event) {
    event.preventDefault();
    inputTaskThree.removeAttribute('disabled', 'disabled');
});


// 
// Задание №4
// 

let heart = document.querySelector('.heart');

heart.onmousedown = function(event) {
    heart.style.position = 'absolute';
    heart.style.zIndex = 1000;

    document.body.append(heart);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        heart.style.left = pageX - heart.offsetWidth / 2 + 'px';
        heart.style.top = pageY - heart.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    heart.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        heart.onmouseup = null;
    };

    heart.ondragstart = function() {
        return false;
      };

};