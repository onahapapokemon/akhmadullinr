function fibonacci(n) {
    if (n <= 0) return [];
    var result = [0,1], count;
    for (var i=2; i < n; i++) {
        result.push(count = result[i-1] + result[i-2]);
    }
    return result;
}

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(8));