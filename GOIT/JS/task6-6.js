function unique(arr) {
    var result = [];
    nextInput: for (var i=0; i < arr.length; i++) {
        var str = arr[i];
        for (var j=0; j < result.length; j++) {
            if (result[j] == str) continue nextInput;
        }
        result.push(str);
    }
    return result;
}
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) );
