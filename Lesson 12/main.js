// import sayHello from "./module";
// 
// this в функциях
// 


function lengthToConsole () {
    console.log(this.length);
};

lengthToConsole();

lengthToConsole.call('I want to learn JavaScript!');
lengthToConsole.call([0, 1, 2, 3]);

function summToConsole(a, b) {
    console.log(this.num + a + b);
};

summToConsole.call({num: 10}, 13, 25);


// 
// Псевдомассив arguments
// 

function consoleToArguments() {
    console.log(arguments);
};

consoleToArguments(1, false, {num: 10}, ['Hello', 'print'], 'Cat');


// 
// Одалживание методов
// 

function test() {
    let args = [].slice.call(arguments);

    console.log(args);
};

test('Hello', 'Cat', 'Dog');


// 
// Rest-параметры
// 

function argumentsNewStyle(hi, ...arg) {
    console.log(hi, arg);
};

argumentsNewStyle('Hello', 'world', '!');


// 
// Стрелочные функции
// 

const f1 = () => {
    console.log('It is an arrow function');
};

f1();

const f2 = (x, y) => console.log(`Summ: ${x} + ${y} = ${x + y}`);

f2(23, 345);


// 
// Деструктуризация в ES6
// 

let person = {
    name: 'Baal',
    age: 18,
    gender: 'female',
    simpable: 'absolutely',
    position: 'shogun and a fucking god',
};

let { name, age, gender, position } = person;

console.log(name, age, position);

let personArr = ['Ben', 35, 'Male', 'Google'];

let [ namePerson, agePerson, genderPerson ] = personArr;

console.log(namePerson, agePerson, genderPerson);


// 
// Spread оператор
// 

let arr = ['p', 'l'];

let comp = ['A', 'p', ...arr, 'e'];

console.log(comp.join(''));


// 
// Symbol
// 

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 == sym2);


// 
// Модули 
// 

// sayHello('Baal');

