function shuffleIt(arr, ...rest) {
    rest.forEach(function (a) {
        [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]];
    });
    return arr;
}

//# sourceMappingURL=Training JS #22 Unlock new skills--Arrow function,spread operator and deconstruction-compiled.js.map