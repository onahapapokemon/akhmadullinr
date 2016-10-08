function totalLicks(env) {
    var sum = 252;
    var hard = {name: null,
        value: 0};
    for( var el in env ) {
        sum += env[el];
        if (env[el] > hard.value) {
            hard.name = el;
            hard.value = env[el];
        }
    }
    var result = 'It took ' + sum + " licks to get to the tootsie roll center of a tootsie pop.";
    if (hard.name) return (result + " The toughest challenge was " + hard.name + '.');
    else return result;
}
