// 
// Задание №1
// 

function counterFactory(start, step) {
    function tictoc() {
        let sum = 0;
        sum = start + step;
        step++;
        return sum;
    }

    return tictoc;
}


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

function words() {
    let onlyWords = str.split(' ');
    console.log(onlyWords);
};

function sortDependingOnLetters() {
    return newStr.split(' ').sort(sorting);
};

function sorting(first, second) {
    if (first.length > second.length) return 1;
    else if (first.length < second.length) return -1;
    else return 0;
};

function letterC() {
    let count = 0;
    let newStr2 = str.split('');
    newStr2.forEach(function(elem) {
        elem.toLowerCase();
        if (elem == 'с') {
            count++;
        } 
    });
    console.log(count);
};
