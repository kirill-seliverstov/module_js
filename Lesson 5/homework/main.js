// Задание №1

let obj = {a: 1, b: 2, c: 3};

console.log(obj.c);

let c = obj["c"];

console.log(c);

for(let key in obj) {
    console.log(obj[key]);
}


// Задание №2

let city = {};

city.name = "Minsk";
city.population = "1.975 million"


// Задание №3

let arr = [
    {name: "Brest", population: "0.343 million"},
    {name: "Vitebsk", population: "0.362 million"},
    {name: "Homel", population: "0.508 million"},
    {name: "Grodno", population: "0.368 million"},
    {name: "Minsk", population: "1.975 million"},
    {name: "Mogilev", population: "0.380 million"},
];


// Задание №4

function citysOfBelarus(info) {
    let x = 0;
    for (x; x < info.length; x++) {
        console.log(info[x]);
    } 
}

citysOfBelarus(arr);
