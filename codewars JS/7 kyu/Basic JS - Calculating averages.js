var Calculator = {
    average: function() {
        if (arguments.length == 0) return 0;
        var result = [];
        for (var i=0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }
        return result.reduce(function(a,b) {
                return (a+b);})/result.length;
    }
}