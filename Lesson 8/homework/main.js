// 
// Задание №1
// 

function counterFactory(start, step) {
    step = 0;

    function tictoc() {
        step++;
        return start + step;
    }

    return tictoc;
}

// let counter = counterFactory(3);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// 
// Задание №2
// 

function take(x, tiktok) {
    return tiktok(x);
}

let test = take(100, function(x) {
    let step = 0;
    let start = 0;
    let arr = [];
    for (let y = 0; y < x; y++) {
            step++;
            arr.push(start + step);
    }
    return arr;
});

// console.log(test);


// 
// Задание №3
// 

let str = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв «с» во всех элементах массива.'
let newStr = str.replace(/[.,\s]/g, ' ').split('').reverse().join('');

console.log(sortDependingOnLetters(newStr));

function sortDependingOnLetters(str) {
    return str.split(' ').sort(sorting);
};

function sorting(first, second) {
    if (first.length > second.length) return 1;
    else if (first.length < second.length) return -1;
    else return 0;
};

function letterC(str) {
    let count = 0;
    str.split('');
    str.forEach(function(elem) {
        if (elem == 'с' || elem == 'С') {
            count++;
        } 
    });
    console.log(count);
};