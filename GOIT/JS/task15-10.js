function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
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

