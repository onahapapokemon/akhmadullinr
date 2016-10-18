function arr2bin(n){
    var result;
    if (!n.length) result = '0';
    else if (n.every(a => Number.isInteger(a)) === true) {
        result = (n.reduce((a,b) => a+b)).toString(2);
    }
else result = false;
    return result;
}

// http://www.codewars.com/kata/559576d984d6962f8c00003c/solutions/javascript