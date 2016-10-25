Object.prototype.hash = function(string) {
    return string.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj)
}

// http://www.codewars.com/kata/527a6e602a7db3456e000a2b/solutions/javascript/me/best_practice