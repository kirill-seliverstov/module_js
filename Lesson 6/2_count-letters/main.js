let countLetters = document.querySelector('.symbols');

document.querySelector('textarea').oninput = function(e) {
    let value = e.target.value;

    countLetters.innerHTML = value.length;
    console.log(value.length);
}
