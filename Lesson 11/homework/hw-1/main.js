// 
// Task #1
// 

let form = document.createElement('form');
let select = document.createElement('select');
let firstOption = document.createElement('option');
let secondOption = document.createElement('option');
let thirdOption = document.createElement('option');
let placeholder = document.createElement('option');

document.body.appendChild(form);
form.appendChild(select);


select.appendChild(firstOption);
select.appendChild(secondOption);
select.appendChild(thirdOption);
select.appendChild(placeholder);

firstOption.text = 'First';
firstOption.value = 1;

secondOption.text = 'Second';
secondOption.value = 2;

thirdOption.value = 3;
thirdOption.text = 'Third';

placeholder.value = 'placeholder';
placeholder.text = 'Choose your item';
placeholder.setAttribute('disabled', 'disabled');
placeholder.setAttribute('selected', 'selected');
placeholder.setAttribute('hidden', 'hidden');

select.addEventListener('change', function() {
    alert('Option value: ' + select.options[select.selectedIndex].value + 
          ", Option text: " + select.options[select.selectedIndex].text);
});


// 
// Task #2
// 

let start = document.getElementById('start');
let add = document.getElementById('add');
let was = document.getElementById('was');
let became = document.getElementById('became');
let wasText = document.getElementById('was-text');
let becameText = document.getElementById('became-text');


start.addEventListener('change', function () {
    wasText.textContent += start.value;
    was.style.height = start.value + 'px';
});

add.addEventListener('change', function () {
    becameText.textContent += (+start.value + +add.value);
    became.style.height = (+start.value + +add.value) + 'px';
});