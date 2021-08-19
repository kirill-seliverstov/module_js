// 
// Задание №1
// 




// 
// Задание №2 
// 

let folder = document.querySelector('.folder');

folder.addEventListener('dblclick', function (e) {
    folder.classList.remove('opened-folder');
    folder.classList.add('closed-folder');
});


// 
// Задание №3
// 

let wrapper = document.getElementsByClassName('wrapper')[0];

for(let x = 0; x <= 300; x++) {
    let createElement = document.createElement('div');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    createElement.textContent = x;
    createElement.style.backgroundColor = bgColor;

    wrapper.appendChild(createElement);
};

wrapper.addEventListener('click', function(event) {
    let targer = event.target;
    
    if(targer.className == 'wrapper') {
        return;
    }
    
    targer.classList.add('border-radius')
});