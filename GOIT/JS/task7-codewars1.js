function createFunctions(n) {
    var callbacks = [];

    for(var i = 0; i < n; i++)
        (function (i) {
            callbacks.push(
                function () {
                    return i;
                }
            );
        })(i);

    return callbacks;
}

var callbacks = createFunctions(5);
console.log(callbacks[0]());
console.log(callbacks[3]());