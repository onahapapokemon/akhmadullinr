Array.prototype.reverse = function() {
    for (var i=0,j=this.length-1;i<j;i++,j--) {
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }
    return this;
};

// http://www.codewars.com/kata/53b2ff49b82af296ce001139/solutions/javascript