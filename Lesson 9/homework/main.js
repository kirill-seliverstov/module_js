// Задание №1
let table = document.querySelector('table');
let tableLabels = table.querySelectorAll('label');

// Задание №2
let firstTd = table.querySelector('td');
console.log(firstTd);

// Задание №3
let secondForm = document.getElementsByTagName('form')[1];

// Задание №4
let searchForm = document.querySelector('[name = "search"]');
console.log(searchForm);

// Задание №5
let firstSearchInput = searchForm.querySelector('input');
console.log(firstSearchInput);

// Задание №6
let infoZero = document.querySelector('[name = "info[0]"]');
console.log(infoZero);

// Задание №7
let searchPerson = document.querySelector('[name = "search-person"]');
let zeroInfo = searchPerson.querySelector('[name = "info[0]"]');
console.log(zeroInfo);
 
// Задание №8
let select = document.createElement('select');

document.body.appendChild(select);

let firstOption = document.createElement('option');
let secondOption = document.createElement('option');

firstOption.text = '1';
secondOption.text = '2';

select.appendChild(firstOption);
select.appendChild(secondOption);

let labelForSelect = document.createElement('label');

labelForSelect.textContent = 'Выберите вариант: ';

document.body.appendChild(labelForSelect);

labelForSelect.after(select);

let allInputs = document.getElementsByTagName('input');
let searchInput = allInputs.length;

select.after(allInputs[searchInput - 1]);