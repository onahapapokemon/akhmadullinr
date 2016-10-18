function factory(x){
    return function(arr) {
        return arr.map(a => a*x);
    }
}