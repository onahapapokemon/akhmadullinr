function count (string) {
    var obj = {};
    var arr = string.split('').forEach(function(x){
        if (!obj[x]) obj[x] = 1;
        else obj[x] += 1;});
    return obj;
}