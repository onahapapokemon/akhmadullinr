function all( arr, fun ){
    // ...
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i]) == false) {
            return false;
        }
    }

    return true;
}