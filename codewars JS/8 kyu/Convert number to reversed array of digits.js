function digitize(n) {
    return n.toString().split('').map(function(x){return parseInt(x)}).reverse();
}

// http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript