var number = function(busStops){
    var result = [];
    for (var i=0;i < busStops.length; i++) {
        result.push(busStops[i].reduce(function(a,b) {
            return a-b;
        }));
    }
    return result.reduce(function(a,b){return a+b;});
}