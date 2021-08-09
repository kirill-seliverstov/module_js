// 
// Метод toString
// 
let number = 123;
let boolean = false;
let str = 'hello';

console.log( number.toString(), boolean.toString(), str.toString() );

// 
// Методы parseInt & parseFloat
// 
let float = 1.5;
let px = '14px';
let rem = '1.6rem';
let e = '1px2rem';

console.log( parseInt(rem), parseFloat(px), parseInt(e) );

// 
// Метод toFixed();
// 

let fixed = 12345.54321;

console.log(fixed.toFixed, fixed.toFixed(2), fixed.toFixed(4));

// 
// Math
// 
let PI = Math.PI;
let E = Math.E;

console.log(PI.toFixed, E);
console.log(PI.toFixed(3), E);

// 
// Полезные методы Math
// 
let random = Math.random();
let max = Math.max(2, 3, 4, 123, 1234);
let min = Math.min(1, 2, -1, 0, -3);

console.log(random, max, min);

// 
// String.length
// 
let str2 = 'Hello world';

console.log(str2.length);

// 
// Escape
// 
let newStr = ' \'строка \n еще строка \" ';

console.log(newStr);

// 
// Доступ к отдельным символам
// 
let word = 'Adukar';

for (let x = 0; x < word.length; x++) {
    console.log(word.charAt(x));
}

// 
// toLowerCase & toUpperCase
// 

let low = 'ASHFJDKNM';
let up = 'MAMSDsdljgnJAKSGNbvsnkdf';

console.log(low.toLowerCase(), up.toUpperCase());

// 
// repeat & trim
// 

let repeat_and_trim = '    hbasinjksadf sjgn     djsfknl;d         ';

console.log(repeat_and_trim);
console.log(repeat_and_trim.trim());
console.log(repeat_and_trim.repeat(2).trim());

// 
// Сравнение строк
// 
console.log("a" > "A", "a".charCodeAt(), "A".charCodeAt());

// 
// Дата и время
// 
let date = new Date();

console.log(date.getTime());
console.log(date);
console.log(date.toLocaleString());

// 
// Date: миллисекунды от 1 января 1970 года
//
console.log(`
${Date.parse('2020-04-04')}
${Date.now()}
`); 