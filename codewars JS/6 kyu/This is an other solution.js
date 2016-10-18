function OnceNamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "firstName", {
        writable: false
    });
    Object.defineProperty(this, "lastName", {
        writable: false
    });
    Object.defineProperty(this, "fullName", {
        get: function () { return this.firstName + ' ' + this.lastName },
        set: function (name) {
            name = name.split(' ');
            if(name.length != 2) return this.firstName + ' ' + this.lastName;
            this.firstName = name[0];
            this.lastName = name[1];
        }
    });
}

// http://www.codewars.com/kata/54834b3559e638b39d0009a2/solutions/javascript