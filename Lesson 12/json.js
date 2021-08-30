let json = '{"name": "Ben", "age": "23", "work": "Student", "city": "New York"}';

let person = JSON.parse(json);

console.log(json, person);

let car = {
    name: 'Audi',
    year: 2020,
    color: "fff000",

};

let carJson = JSON.stringify(car);

console.log(carJson);