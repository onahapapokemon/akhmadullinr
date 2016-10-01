function duplicates(arr) {
    var result = arr.filter(function(item,i,ar) {
        return ar.indexOf(item) !== i;
    })
    var result1 = result.filter(function(item,i,ar) {
        return ar.indexOf(item) === i;
    })
    return result1;

}