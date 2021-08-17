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

let str = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв «с» во всех элементах массива.'

// let regex = /[.,\s]/g;

// let newStr = str.replace(regex, '');
// console.log(newStr);

// let newStr = str.split(' ');
// console.log(newStr);


// let newStr = str.replace(/\./g,'');
// let newStr2 = newStr.replace(/\,/g, '');
// console.log(newStr2.split(' '));
// console.log(newStr2.split(' ').reverse().sort(sorting));

// console.log(str.replace(/[.,\s]/g, ' ').split('').reverse().join(''));

function sorting(first, second) {
    if (first.length > second.length) return 1;
    else if (first.length < second.length) return -1;
    else return 0;
};
// console.log(newStr2.split('').reverse().join(''));

function newStr(str) {
    let arr = str.replace(/[.,\s]/g, ' ').split('').reverse().join('');
    console.log(arr);
}

function sorta(str) {
    return str.split(' ').sort(sorting);
}

newStr(str);
console.log(sorta(str));

