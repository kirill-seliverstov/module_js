let User = function(name) {
    this.name = name;

    this.info = function() {
        getReverseName(this.name);
        return 'Name: ' + this.name;
    }

    getReverseName = function(name) {
        let reverseName = name.split('').reverse().join('');
        console.log(reverseName);
    }
};

let raiden = new User('Raiden');
let baal = new User('Baal');

console.log(raiden.info());
console.log(baal.info());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getPersonalInfo() {
        return `My name is ${this.name} and I am ${this.age} years old`
    }
}

let shogun = new Person('Baal', 'Eternal');

console.log(shogun.getPersonalInfo());

class God extends Person {
    constructor(name, age, god) {
        super(name, age);
        this.god = god;
    }

    getGodStatus() {
        return super.getPersonalInfo() + `. God status: ${this.god}`;
    }
}

let god = new God('Baal', 'Eternal', true);

console.log(god.getGodStatus());







class City {
    constructor(name) {
        this.name = name;
    }

    getCity() {
        return this.name;
    }
};

class Disctrict extends City {
    constructor(name, nameOfDisctrict, population) {
        super(name);
        this.nameOfDisctrict = nameOfDisctrict;
        this.population = population;
    }

    getDisctrict() {
        return this.nameOfDisctrict;
    }

    setDisctrict(prop, value) {
        this[prop] = value;
    }
}

let inazuma = new City('Inazuma');
let mouse = new Disctrict('Inazuma', 'mouse', 3000);
console.log(mouse);

mouse.setDisctrict('nameOfDisctrict', 'vatatsumi');
console.log(mouse.getDisctrict());
console.log(mouse);


