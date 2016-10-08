function evalObject(value){
    var result = 0;
    switch(value.operation){
        case'+': result = value.a + value.b;
            break;
        case'-': result = value.a - value.b;
            break;
        case'/': result = value.a / value.b;
            break;
        case'*': result = value.a * value.b;
            break;
        case'%': result = value.a % value.b;
            break;
        case'^': result = Math.pow(value.a, value.b);
    }
    return result;
}

console.log(evalObject({a:1,b:1,operation:'+'}));

// http://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6/train/javascript