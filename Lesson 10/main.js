let el = document.querySelector('.eventListener');
let eventButton = document.querySelector('.eventButton');

window.addEventListener('DOMContentLoaded', function() {
    console.log('HUI');
});

document.querySelector('.eventDOM').onclick = function() {
    handler('Cock');
};

el.addEventListener('click', function () {
    alert('Hello, I am eventListener!');
    el.removeEventListener('click', function() {
        alert('Goodbye!');
    })
});

function handler(str) {
    alert(`Hello, I am ${str}`);
};

eventButton.addEventListener('click', function (event) {
    console.log(event);
});


// 
// События мыши
// 

let red = document.querySelector('.red');

red.addEventListener('mouseover', handleMouseOver);
red.addEventListener('mouseout', handleMouseOut);
red.addEventListener('mousemove', handeMouseMove);

function handleMouseOver() {
    red.classList.add('borderRadius');
    console.log('Mouse over');
};

function handleMouseOut() {
    red.classList.remove('borderRadius');
    console.log('Mouse out');
};

function handeMouseMove(event) {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
};

document.addEventListener('keydown', function(event) {
    let code = event.keyCode;

    if (code == 13) {
        handleMouseOver();
    }
})

document.addEventListener('keyup', function(event) {
    let code = event.keyCode;

    if (code == 13) {
        handleMouseOut();
    }
});

// 
// Действия браузера по умолчанию
// 

let link = document.getElementsByClassName('adukar')[0];
link.onclick = function (event) {
    event.preventDefault();
}

// 
// Делегирование событий
// 

let wrapper = document.getElementsByClassName('wrapper')[0];

for(let x = 0; x < 100; x++) {
    let createElement = document.createElement('div');
    createElement.textContent = x;

    wrapper.appendChild(createElement);
};

wrapper.addEventListener('click', function(event) {
    let targer = event.target;
    
    if(targer.className == 'wrapper') {
        return;
    }
    
    targer.classList.add('borderRadius')
});