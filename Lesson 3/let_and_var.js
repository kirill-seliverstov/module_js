/* for (var x = 0; x < 3; x++) {
    console.log('Цикл ' + x);
}

console.log(x);

var log = "Goodbye!";

console.log(log);

const user = 'Andrey';


console.log(user); */

let x = 0;

function recurs() {
    if (x <= 3) {
        x++;
        console.log('Глубина рекурсии ' + x);
        recurs();
    } 
}

recurs();