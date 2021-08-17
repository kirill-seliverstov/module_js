// 
// Задание №1
// 

function createArray() {
    let arr = [];
    
    for(let i = 0; i < 20; i++) {
        let x = Math.round( Math.random() * 50 );
        arr.push(x);
    }
    return arr;
}


// 
// Задание №2
// 

function createArrayExtended(length, min, max) {
    let newArr = [];

    for (let i = 0; i < length; i++) {
        let x = Math.round( Math.random() * (max - min) + min );
        newArr.push(x);
    }

    return newArr;
}


// 
// Задание №3
// 

function strCheck() {
    let line = prompt('Введите строку', 'https://cite.html');
    return line.startsWith("https://") && line.endsWith(".html");
}


// 
// Задание №4
// 

function amountOfSybmol(line, symbol) {
    let count = 0;

    for (let i = 0; i < line.length; i++) {
        if (line[i] == symbol) {
            count++;
        } 
    }

    alert(count);
}

// let str = prompt('Введите строку', 'aaaaaasdfaaaaaaafdbsdfgdfaaaa3');
// amountOfSybmol(str, 'a');


// 
// Задание №5
// 

function amountOfSybmolExtended(line, symbol) {
    let count = 0;

    for (let i = 0; i < line.length; i++) {
        if (line[i].toUpperCase() == symbol.toUpperCase()) {
            count++;
        } 
    }

    alert(count);
}

// let str = prompt('Введите строку', 'Aaaaaaasdfaaaaaaafdbsdfgdfaaaa3');
// amountOfSybmolExtended(str, 'a');


// 
// Задание №6
// 

function currentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();

    if (now.getMonth() == 7) {
        month = 'августа';
    }

    console.log(day + ' ' + month + ' ' + year);
}


// 
// Задание №7
// 

let date = new Date();
let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
let result = Math.floor((date.getTime() - now.getTime()) / 1000);
console.log(result);