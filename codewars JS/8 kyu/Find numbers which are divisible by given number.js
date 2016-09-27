function divisibleBy(numbers, divisor){
    var arr = [];
    for (var i=0;i<numbers.length;i++) {
        if (numbers[i] % divisor === 0) arr.push(numbers[i]);}
    return arr;
}

// http://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript