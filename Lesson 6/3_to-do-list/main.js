let input = document.querySelector('.add-item__input');
let addButton = document.querySelector('.add-item__button');
let toDo = document.querySelector('.to-do'); 

let items = [];


addButton.onclick = function() {
    let value = input.value;
    
    if(value) {
        items.push(input.value);
        input.value = '';
    
        render();
    } else {
        alert("Error!");
    }
}

function render() {
    clearToDo();

    for (let x = 0; x < items.length; x++) {
        toDo.innerHTML += `<li>${items[x]}<button onclick="deleteItem(${x})">X</button></li>`;
    }
}

function clearToDo() {
    toDo.innerHTML = '';
}

function deleteItem(x) {
    items.splice(x, 1);
    render();
}