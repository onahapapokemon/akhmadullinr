var obj = {
    name: 'Hello',
    age: 30,
    drink: true,
    classes: ['1',2,'a',['abc']]
};

var jstring = JSON.stringify(obj);

console.log(jstring);

var event = JSON.parse(jstring);

console.log(event);