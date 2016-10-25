Object.prototype.hash = function(string) {
    return string.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj)
}

// 