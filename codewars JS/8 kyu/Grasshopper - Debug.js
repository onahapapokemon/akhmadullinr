function weatherInfo (temp) {
    var c = (temp - 32) * (5/9);
    if (c < 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}