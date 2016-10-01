function swap(str){
    var arr=[];
    for (var i=0; i<str.length;i++) {
        if (str[i] !== str[i].toUpperCase()) arr.push(str[i].toUpperCase());
        else arr.push(str[i].toLowerCase());
    }
    return arr.join('');
}