function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;

    this.getBalance = function() {
        // your code should return the bankBalance
        return bankBalance;
    };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

// https://www.codecademy.com/en/courses/objects-ii/4/3?curriculum_id=506324b3a7dffd00020bf661#