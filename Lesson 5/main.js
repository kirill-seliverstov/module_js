// Создание объекта

let passport = {
    number: "MC093404",
    name: "Keqing",
    surname: "Cutie",
    birthday: "20 november"
};

let car = {};


// Получение доступа к значению
// 1 способ
console.log(passport.name);

let name = passport.name;

console.log(name);

// 2 способ

let surname = passport["surname"];
console.log(surname);


// Наполнение объекта данными

car.name = "Audi";
car.color = "Red";
car.age = "10";
car["DTP"] = 2;

console .log(car);

car["DTP"] = 3;

console .log(car);


// Проверка наличия свойства

console.log("name" in car);
console.log("owner" in car);


// Доступ к несуществующим свойствам

console.log(car.headlights);


// Объявление свойств с "плохими" именами

let country = {
    name: "America",
    "10count car": 999999
};

console.log(country);


// Удаление свойств

console.log(car);

delete car.DTP;

console.log(car);


// Перебор свойств объекта 

for (let key in car) {
    console.log(key);
}


// Объект - ссылочный тип данных

let person = {
    name: "Lui",
    age: "23"
};

let newPerson = person;

person.age = "45";

console.log(person, newPerson);


// Клонирование объекта 

let personCountry = {};

for(let key in person) {
    personCountry[key] = person[key];
}

person.name = "Mona";

console.log(person, personCountry);

