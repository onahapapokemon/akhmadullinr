function mostFrequentItemCount(collection) {
    var obj = {};
    collection.forEach(function(x) {
        if(!obj[x]) obj[x] = 1;
        else obj[x] += 1;
    })
    var max=0;
    for( var x in obj) {
        if( obj[x] > max) max = obj[x];
    }
    return max;
}

// http://www.codewars.com/kata/56582133c932d8239900002e/solutions/javascript