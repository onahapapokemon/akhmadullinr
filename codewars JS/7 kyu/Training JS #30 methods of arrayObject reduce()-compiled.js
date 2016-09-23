function tailAndHead(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length - 1; i++) {
        arr1.push(+arr[i].toString().substr(-1) + +arr[i + 1].toString().substr(0, 1));
    }
    var result = arr1.reduce(function (a, b) {
        return a * b;
    });
    return result;
}

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]));

//# sourceMappingURL=Training JS #30 methods of arrayObject reduce()-compiled.js.map