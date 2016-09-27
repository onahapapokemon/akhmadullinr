function peopleWithAgeDrink(old) {
    var message = '';
    if (old < 14) message = "drink toddy";
    else if (14 <= old && old < 18) message = "drink coke";
    else if (18 <= old && old < 21) message = "drink beer";
    else if (old >= 21) message = "drink whisky";
    return message;
}

// http://www.codewars.com/kata/56170e844da7c6f647000063/solutions/javascript