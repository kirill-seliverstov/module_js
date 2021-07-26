/*         Часть 1
-----------------------------------------------------------------
*/


// Задание №1 и №2

/* let x = prompt('X?', '');
let y = prompt('Y?', '');

if (x > y) {
    console.log(x);
} else {
    console.log(y);
}

(x > y) ? console.log(x) : console.log(y); */


// Задание №3

/* let x = prompt('X?', '');

switch(+x) {
    case 1:
        alert('1');
        break;
    case 2:
        alert('2');
        break;
    case 3:
        alert('3');
        break;
    default:
        alert('Not 1, 2 or 3');
        break;
} */



/*         Часть 2
-----------------------------------------------------------------
*/



// Задание №1

/* 
let x = prompt('Введите число', '');
let sum = 0;

for (let i = 1; i <= x; i++) {
    sum += i;
} */

/* Через while

let i = 1;

while (i <= x) {
    sum += i;
    i++;
} */

// alert(sum);


// Задание №2
let x = prompt('X?', '')

for (x; x > 0; x--) {
    if (x % 2 == 0) {
        console.log(+x);
    }
}

/* let x = prompt('X?', '');

while (x > 0) {
    if (x % 2 == 0) {
        console.log(+x);
    }
    x--;
}
 */

