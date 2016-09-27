function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if (b % a && a === 0 ) return NaN;
    else if (a % b && b === 0) return NaN;
    else if (a >= b) {
        return (a % b);
    }
    else if (b >= a) {
        return (b % a);
    }
}