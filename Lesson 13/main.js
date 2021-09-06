let person = {
    name: 'Ben',
    age: 30,
    job: 'student',
};

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

// console.log(keys);
// console.log(values);
// console.log(entries);

// Object.defineProperty(person, 'car', {
//     writable: true,
//     get() {
//         return this.car;
//     },
//     set() {
//         let newCar = '';
//         this.car = newCar;
//     }
// });

// person.car = 'asdf'

// console.log(person.car); 
