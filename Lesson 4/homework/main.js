// Задание №1

/* let arr = [];
let i = 2;

for(i; i <= 20; i++) {
    if (i % 2 == 0) {
        arr.push(i);
    }
}

console.log(arr);
let x;


// Задание №2

for (x = 0; x < arr.length; x++) {
    arr[x] = x*5;
}

console.log(arr); */


// Задание №3

let a = prompt('Число №1: ', '');
let b = prompt('Число №2: ', '');
let c = prompt('Число №3: ', '');
let threeNumbers = [+a, +b, +c];
let x = 0;
let biggestNumber = 0;

for (x; x < threeNumbers.length; x++) {
    if (threeNumbers[x] > biggestNumber) {
        biggestNumber = threeNumbers[x];
    }
}

console.log(biggestNumber);

