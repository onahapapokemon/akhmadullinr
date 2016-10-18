// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

// https://www.codecademy.com/en/courses/objects-ii/3/3?curriculum_id=506324b3a7dffd00020bf661