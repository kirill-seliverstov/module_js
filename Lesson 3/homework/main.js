// Задание №1

/* function firstTask(a = 1, b = 2, c = 3) {
    return a+b+c;
}

console.log(threeNumbers(1, 1, 1)); */


// Задание №2

/* function secondTask(i = 1, x) {
    let sum = 0;
    for(i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(sum);
}

secondTask(1, 7); */


// Задание №3

function thirdTask(x) {
    let sum = 0;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x/10);
    }
    return sum;
}

console.log(thirdTask(123));