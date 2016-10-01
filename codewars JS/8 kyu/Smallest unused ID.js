function nextId(ids){
    for (i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) == -1){
            return i;
        }
    }
    return ids.length;
}

console.log(nextId([0,1,2,3,4]));