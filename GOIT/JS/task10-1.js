var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumber(object) {
    var arr = [];
    for (var el in object) {
        if ((object[el]).toString() !== object[el]) {
            arr.push(object[el]);}
    }
    return arr;
}

console.log(extractNumber(obj));