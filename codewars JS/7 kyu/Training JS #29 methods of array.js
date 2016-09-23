function bigToSmall(arr){
    //coding here...
    var result1 = [].concat(...arr);
    var result = result1.sort( function(a,b) {
        return b - a;
    }).join('>');
    return result;
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]));


// https://www.codewars.com/kata/5731861d05d14d6f50000626/solutions/javascript