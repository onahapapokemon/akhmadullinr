function GetSum( a,b ) {
    var result = [];
    for (var i=(Math.min(a,b)); i<=(Math.max(a,b)); i++) {
        result.push(i);
    }
    return result.reduce(function(a,b){return a+b;});
}

/*
 Given two integers, which can be positive and negative, find the sum of all the numbers
 between including them too and return it. If both numbers are equal return a or b.

 Note! a and b are not ordered!
 */

// http://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript/me/best_practice