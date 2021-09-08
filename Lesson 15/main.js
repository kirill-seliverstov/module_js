// Данные о браузере
console.log(window.navigator);


// Текущая локация
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
    })
} else {
    console.log('No');
}


// Работа с хранилищем
let form = document.querySelector('.form');
let userWrapper = document.querySelector('.user');
let auth = document.querySelector('.auth');
let exit = document.querySelector('.exit');

exit.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.clear();

    userWrapper.textContent = 'Anon';
    form.style.display = 'block';
})

auth.addEventListener('click', function(e) {
    e.preventDefault();

    let login = form.elements.login.value;
    let password = form.elements.password.value;

    if(login === '') {
        alert('Login error!');
        return;
    }

    if(password === '') {
        alert('Login error!');
        return;
    }

    if(login !== 'Ei' || password !== 'BestGirlEver') {
        return alert('Error login');
    }

    localStorage.setItem('username', login);
    localStorage.setItem('password', password);

    isLogin();
});

function isLogin() {
    let user = localStorage.getItem('username');
    let pass = localStorage.getItem('password');

    if(user && pass) {
    userWrapper.textContent = user;
    form.style.display = 'none';
    }
}

isLogin();


