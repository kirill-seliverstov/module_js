// Function declaration


function sayHello() {
    console.log('Hello world!');
}

// sayHello();

function calc(n) {
    console.log(n * 3);
}

// calc(3);

function sayHi(firstName, secondName) {
    console.log("Привет, " + firstName + secondName + "!");
}

// sayHi("Аня ", "Иванова");

function cube(x) {
    return x*x*x;
}

// console.log(cube(3));


// Function expression

let car = function(x) {
    return x**x;
}

// console.log(car(3));

function fabric(user = 'Andrey', car = 'Opel', position = 'Manager') {
    console.log("Привет, " + user +
                ' ты - ' + position +
                ' и у тебя ' + car);  
}

fabric('Олег', 'Бочка', 'Членосос');

// Рекурсияы

let x = 0;

function recurs() {
    if (x <= 3) {
        x++;
        console.log('Глубина рекурсии ' + x);
        recurs();
    } 
}

// recurs();

function shop(param) {
    return param + ' был в магазине!';
};

function jobs(param) {
    return shop(param);
};

console.log(jobs('Кирилл'));

