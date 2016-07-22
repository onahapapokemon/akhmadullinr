for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log ('FizzBuzz');
        continue;
    }
    else if (i % 3 === 0) {
        console.log('fizz');
        continue;
    }
    else if (i % 5 === 0) {
        console.log('buzz');
        continue;
    }
    console.log(i);
}

