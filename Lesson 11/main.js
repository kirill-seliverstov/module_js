// 
// Получаем все формы
//  

let forms = document.forms;

console.log(forms);


// 
// Получение формы по атрибуту name
// 

let login = document.forms.login;

console.log(login);


// 
// Получение контролла формы
// 

let formElements = login.elements; 

console.log(formElements.password);


// 
// Получение и изменение значения элемента формы
// 

let nameFeedback = document.forms.feedback.name;

nameFeedback.value = 'Kirill';

console.log(nameFeedback.value);

let rememberLogin = document.forms.login.remember;

console.log(rememberLogin.checked);


let fromFeedback = document.forms.feedback.from;

console.log(fromFeedback.options);

fromFeedback.value = 'Russia';

console.log(fromFeedback.value);


// 
// События формы
// focus/blur

let userLogin = document.forms.login.name;
console.log(userLogin);
userLogin.addEventListener('focus', function () {
    this.value = 'focus';
});

userLogin.addEventListener('blur', function () {
    this.value = 'blur';
});

// 
// focusin/focusour - то же самое, что и focus/blur, но со всплытием
// 

login.addEventListener('focusin', function () {
    console.log(this);
});

login.addEventListener('focusout', function () {
    console.log(this);
});

// 
// input, change
// 

nameFeedback.addEventListener('change', function () {
    console.log(this.value);
});

let emailFeedback = document.forms.feedback.email;

emailFeedback.addEventListener('input', function () {
    console.log(this.value);
});