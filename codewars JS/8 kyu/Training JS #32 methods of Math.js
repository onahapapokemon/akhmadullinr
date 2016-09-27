function roundIt(n){
    var result = 0;
    n.toString().split('.').reduce(function(a,b){
        if (a.length > b.length) result = Math.floor(n);
        else if (a.length < b.length) result = Math.ceil(n);
        else if (a.length === b.length) result = Math.round(n);
        return result;
    });
    return result;
}

console.log(roundIt(34.5));

// http://www.codewars.com/kata/5732d3c9791aafb0e4001236/solutions/javascript