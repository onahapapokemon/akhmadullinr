function hasUniqueChars(str){
    var arr = str.split('');
    var result = arr.filter(function(v, i, a) { return a.indexOf(v) === i;});
    return (str == result.join(''));
}