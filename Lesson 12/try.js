const number = 13;

try {
    number = 34;
} catch(err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('ХУЙ');
}

console.log('Code ended');


