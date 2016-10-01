function sum(a, b) {
    if (arguments.length > 1) return arguments[0] + arguments[1];
    return function (b) {
        return a + b;
    };
}

//# sourceMappingURL=More than one way to call a function, or skin a cat.-compiled.js.map