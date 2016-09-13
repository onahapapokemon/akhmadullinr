function threeInOne(arr) {
    var result = [];
    var copy = arr.slice();
    for (var i=0; i < copy.length; i=i++) {
        result.push(copy.splice(i,3).reduce(function(sum,item) {
                return sum + item;
            })
        );
    }
    return result;
}