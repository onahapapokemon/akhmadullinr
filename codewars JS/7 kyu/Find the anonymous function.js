var FindFunction = function(func, arr) {
    var result;
    for (var i=0;i<func.length;i++) {
        if (typeof func[i] === 'function') result = func[i];
    }
    return arr.filter(result);
}