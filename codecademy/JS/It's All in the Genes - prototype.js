// create your Animal class here
function Animal (name,numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
// create the sayName method for Animal
Animal.prototype.sayName = function() {
    console.log('Hi my name is ' + this.name);
};




// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

// https://www.codecademy.com/en/courses/objects-ii/3/1?curriculum_id=506324b3a7dffd00020bf661