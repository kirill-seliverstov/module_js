// Объект, как свойство объекта

let person = {
    name: {
        first: "Keqing",
        second: "Cutie"
    },

    birth: {
        year: 1975,
        place: "china"
    }
};

console.log(person.name.first);

person.name.first = "Ayaka";

console.log(person.name.first);


// Функции, как свойства объекта
// *Фукнция внутри объекта - это метод объекта

let machine = {
    type: "Coffee grinder",
    makeSound: function() {
        console.log("Drrrr");
    }
};

machine.sayHello = function() {
    console.log("Hello");
}

machine.makeSound();
machine.sayHello();

console.log(machine);


// ES6: краткое объявление методов

let groot = {
    getUser() {
        console.log("I\'m Groot");
    }
};

groot.getUser();


// Массив - это тоже объект

let arr = [1, 2, 3, 4, 5];

console.log(typeof(arr));


// Функция - это тоже объект(специальный тип объекта)


// Использование this в методах объекта

let user = {
    name: "Keqing",
    introduce: function() {
        console.log("Меня зовут " + this.name);
    }
}

user.introduce();


// this в глобальных функциях

let circleA = {x: 10, y: 12};
let circleB = {x: -4, y: 2};

function coords() {
    console.log("X: " + this.x + " Y: " + this.y);
}

circleA.printXY = coords;
circleB.teelCords = coords;

circleA.printXY();
circleB.teelCords();
