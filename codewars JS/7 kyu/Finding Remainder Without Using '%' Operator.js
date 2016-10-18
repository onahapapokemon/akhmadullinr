var remainder = function(D,d){
    for (var i=D;i>=d;i--) {
        if (d == 0) return 'NaN';
        if (Number.isInteger(i/d) === true) return D - i;
    }
}

// http://www.codewars.com/kata/564f458b4d75e24fc9000041/solutions/javascript