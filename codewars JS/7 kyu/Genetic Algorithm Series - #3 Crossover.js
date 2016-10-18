const crossover = (arr1, arr2, index) => {
    var res1 = [], res2 = [], result = [];
    for (var i=0;i<arr1.length;i++) {
        if (arr1[i] !== arr2[i]) {
            res1.push(arr2[i]);
            res2.push(arr1[i]);
        }
        else {
            res1.push(arr1[i]);
            res2.push(arr2[i]);
        }
    }
    result.push(arr1.split('').slice(0,index).join('') + res1.slice(index).join(''));
    result.push(arr2.split('').slice(0,index).join('') + res2.slice(index).join(''));
    return result;
};