function solution() {
    var args = [];
    for (var i = 0; i < arguments.length; i++)
        args[i] = arguments[i];
    var sorted_arr = args.slice().sort();
    var results = [];
    for (var j = 0; j < args.length - 1; j++) {
        if (sorted_arr[j + 1] == sorted_arr[j]) {
            return true;
        }
    }
    return false;
}