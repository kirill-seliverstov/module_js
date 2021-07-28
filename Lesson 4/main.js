// Создание массива 
let arr = [];
let arrNumbers = [1, 2, 3, 4, 5];
let arrWord = ['Coffee', 'Tea', 'Milk'];
let arrCombined = [1, 'Tea', true, 1+1];

console.log(arrNumbers);
console.log(arrCombined);

// Доступ к элементам массива
// имяМассива[индекс_элемента]

console.log(arrNumbers[2]);

// Изменение массива
console.log(arrWord);

arrWord[0] = "Water";

console.log(arrWord);

// Длина массива

let summer = ['June', 'July', 'August'];

console.log(summer.length);
summer[3] = "September";
console.log(summer.length);
summer.length = 2;
console.log(summer);

// Методы массивов

// pop/push

let names = ['Bill', 'Bob', 'Joe', 'Lukas'];
console.log(names.pop()); // Удаляет последний элемент массива и возвращает его значение
console.log(names);

names.push('Alex'); // Добавляет элемент в конец массива
console.log(names);

// shift/unshift

let firstElementArr = names.shift(); // Удаляет первый элемент массива и возвращает его
console.log(firstElementArr, names);

names.unshift('Duke'); // Добавляет элемент в начало массива
console.log(names);

// Перебор элементов массива

let autos = ['Audi', 'BMW', 'Honda', 'Toyota', 'Tesla', 'Mercedes'];

for (let x = 0; x < autos.length; x++) {
    console.log(autos[x]);
}


// Модифицирование массива

for (let x = 0; x < autos.length; x++) {
    autos[x] = autos[x] + ' :log ' + x;
}

console.log(autos);


// Многомерные массивы

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0]);
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);


// Метод массива: join();
// Склеивает все элементы массива в одну строку

let autoArray = ['Audi', 'BMW', 'Honda', 'Toyota', 'Tesla', 'Mercedes'];
let arrJoin = autoArray.join('-');
console.log('join(): ' + arrJoin);


// Метод массива: split()
// Разбивает строку на массив

let arrSplit = arrJoin.split('-');
console.log(arrSplit);


// Метод массива: slice(start, end)
// Копирует часть массива от индекса start (включительно) до конца end (невключительно)

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

let part = letters.slice(1, 3);
console.log(part);
let part2 = letters.slice(2); // до конца
console.log(part2);


// Метод массива: splice(start, deleteCound, elem1, ..., elemN)
// deleteCount - количество удаляемых элементов из массива
// начиная с индекса start
// вставляет на их место элементы elem1, ..., elemN
// возвращает массив из удаленных элементов

console.log('---------------------------------------');

let newLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

let deleteLetters = newLetters.splice(1, 2, 'o', 'q', 'p');
console.log(newLetters); 
console.log(deleteLetters);


// Метод массива: concat()
// Создает и возвращает новый массив, в который копируются все элементы из исходного массива и все аргументы

let animals = ['cat', 'dog'];
// let newAnimals = animals.concat('cow', 'horse');
// console.log(newAnimals);
animals = animals.concat(newLetters);
console.log(animals);


// Метод массива: reverse();
// Возвращает массив в обратном порядке

let country = ['Belarus', 'Russia', 'USA', 'Japan'];

console.log(country.reverse());


// Метод массива: sort()
// Сортирует массив в алфавитном порядке

let words = ['summ' ,'abc', 'lol', 'cat'];
console.log(words.sort());