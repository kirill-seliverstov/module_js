let str = 'I love JavaScript. I am Front-end developer';

let regexpt = new RegExp(/script/, 'i');

console.log(regexpt.test(str));
console.log(str.search(/front/i));

console.log(str.match(/a/g));

// Классы символов

console.log(str.match(/\d/g));
console.log(str.match(/\s/g));
console.log(str.match(/\w/g));

console.log(str.match(/I\B/gi));

console.log(str.match(/^I/gi));