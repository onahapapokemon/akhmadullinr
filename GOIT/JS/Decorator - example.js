function add(a,b,c) {
    return a + b + c;
}

function sub(a,b) {
    return a - b;
}

function decorator(f) {
    return function(a,b) {
        return 'Answer is ' + f.apply(null,arguments);
    }
}

var add2 = decorator(add);

console.log(add2(4,2,10));

var add2 = decorator(sub);

console.log(add2(3,5));