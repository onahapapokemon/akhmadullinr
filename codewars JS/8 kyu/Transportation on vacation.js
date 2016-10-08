function rentalCarCost(d) {
    var total = 0;
    if (d >= 7) return total = d*40 - 50;
    else if (d >= 3) return total = d*40 - 20;
    return d*40;
}