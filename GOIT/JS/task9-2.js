function applyAll (func) {
    return func.apply(this,[].slice.call(arguments,1));
}


alert( applyAll(Math.min, 2, -2, 3));