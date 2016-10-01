function descendingOrder(n){
    var result = n.toString().split('').sort(function(a,b){
        return b-a;}).join('');
    return +result;
}