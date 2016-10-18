function twoDecimalPlaces(number) {
    var arr = number.toString().split('.');
    return +(arr[0] + '.' + arr[1].slice(0,2));
}

// http://www.codewars.com/kata/5641c3f809bf31f008000042/solutions/javascript