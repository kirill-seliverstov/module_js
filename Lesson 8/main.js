function createFunc() {
    let cube = function(x) {
        return x + x + x;
    }

    return cube;
}

console.log(createFunc());

let cubeVariable = createFunc();
// console.log(cubeVariable(4));


// 
// Замыкание 
// 

function create(y) {
    function add(x) {
        return y + x;
    }

    return add;
}

let result = create(3);
console.log(result(10));


// 
// Анонимные функции 
// 

(function() {
    console.log('It\'s an anonymous function');
})();

function cube(x, callback) {
    return callback(x);
}

console.log(cube(3, function(y) {
    return y*2;
}));


// 
// Метод forEach
// 

let cars = ['Audi', 'Renault', 'Peugeot', 'Mercedes', 'BMW', 'Ferrari', 'Toyota'];

cars.forEach(function(item, index, arr) {
    console.log(item, index);
});


// 
// Метод filter
// 

let filter = cars.filter(function(item, index) {
    return index % 2 == 0 ;
});

console.log(filter);


// 
// Метод map 
// 
let map = cars.map(function(item, index) {
    return item.toUpperCase();
});

console.log(map);


// 
// Метод reduce
// 

let reduce = cars.reduce(function(prev, item) {
    return prev;
});

console.log(reduce);


// 
// Методы every and some
// 

let every = cars.every(function(item) {
    return typeof(item) == "string";
})

console.log(every);

let some = cars.some(function(item) {
    return item == 'Honda';
});

console.log(some);


// 
// Метод find
// 

let find = cars.find(function(item) {
    return item.length == 8;
});

console.log(find);


// 
// Метод findindex
// 

let findIndex = cars.findIndex(function(item) {
    return item.length == 8;
});

console.log(findIndex);


// 
// Метод sort
// 

function sorting(first, second) {
    if (first.length > second.length) return 1;
    else if (first.length < second.length) return -1;
    else return 0;
};

let sort = cars.sort(sorting);

console.log(sort);