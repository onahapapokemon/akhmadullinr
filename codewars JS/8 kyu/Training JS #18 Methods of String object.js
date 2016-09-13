function splitAndMerge(str,sp){
    str = str.split(' ');
    str = str.map(function(item) {
        return item.split('').join(sp);
    });
    return str.join(' ');
}

console.log(splitAndMerge("My name is John",' '));