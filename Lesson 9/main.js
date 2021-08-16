// 
// Глобальный объект window
// 

var a = 10;
let b = 20;
console.log(window.a);
console.log(window.b); 


// 
// Структура дерева DOM 
// 

// Получение всего html кода
let html = document.documentElement;
console.log(html);

// Получение head
let head = document.head;
console.log(head);

// Получение body
let body = document.body;
console.log(body);


// 
// Навигация по DOM
// 

// Получение дочерних элементов
let childNotes = document.body.childNodes;
console.log(childNotes);

// Получение первого и последнего дочернего элемента
let firstChild = document.body.firstChild;
console.log(firstChild);

let lastChild = document.body.lastChild;
console.log(lastChild);

// Получение первого дочернего элемента(без комментариев и текстовых узлов)
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild);


// 
// Поиск элементов страницы
// 

// Поиск по id
let searchId = document.getElementById('text');
console.log(searchId);

// Поиск по тегу
let searchTag = document.getElementsByTagName('p')[0];
console.log(searchTag);

// Поиск по классу
let searchClass = document.getElementsByClassName('child');
console.log(searchClass);


// 
// Поиск по селектору
// 

let searchQueryAll = document.querySelectorAll('.child');
console.log(searchQueryAll);

let searchQuery = document.querySelector('.child');
console.log(searchQuery);


// 
// tagName
// 

let tagClass = document.getElementsByClassName('text');
console.log(tagClass[0].tagName);
console.log(tagClass);


// 
// Изменить или получить содержимое
// 

console.log(searchClass[0].innerHTML);
searchClass [0].innerHTML = '<p>Hello world!</p>';
console.log(searchClass[0].textContent);


// 
// Работа с атрибутами
// 

let input = document.getElementById('lastname');

// Проверка на наличие атрибута
console.log(input.hasAttribute('name'));
console.log(input.hasAttribute('class'));

// Получение значения атрибута
console.log(input.getAttribute('name') );

// Изменение атрибута   
input.setAttribute('name', 'email');    
console.log(input.getAttribute('name'));


// 
// Свойства по атрибутам
// 

let link = document.getElementsByClassName('link')[0];
console.log('До изменения: ' + link.href);

link.id = 'linkAdukar';
link.href = 'https://adukar.by';

console.log('После изменения: ' + link.href);


// 
// Изменение страницы
// 

// Создание нового элемента
let create = document.createElement('div');

create.id = 'car';
create.className = 'carName';
create.textContent = 'It is autos';

document.body.appendChild(create);
link.before(create);


// 
// Работа с классами 
// 

let auto = document.getElementById('car');

auto.className = 'cars autos';

// Проверка существования класс
console.log(auto.classList.contains('autos'));

// Добавление нового класса
auto.classList.add('good');

// Удаление класса
auto.classList.remove('cars');

// Добавляет класс если его нет, и удаляет класс, если он есть - toggle
auto.classList.toggle('qwe');
auto.classList.toggle('qwe');

// Замена класса
auto.classList.replace('autos', 'cars');


// 
// Работа со стилями
// 

auto.style.color = 'red';
auto.style.backgroundColor = 'black';
auto.style.width = '300px';
auto.style.textAlign = 'center';
auto.style.padding = '5px';
auto.style.margin = '5px';

let radio = 50;

auto.style.borderRadius = radio + 'px';
