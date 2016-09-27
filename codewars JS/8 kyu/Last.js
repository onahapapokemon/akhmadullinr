function last(list){
    var last = arguments[arguments.length - 1];
    return last[last.length - 1] || last;
}

console.log(last(1,"b",3,"d",5,'z',true));