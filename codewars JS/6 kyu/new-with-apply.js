function construct(Class) {
    return new (Function.prototype.bind.apply(Class, arguments));
}

// http://www.codewars.com/kata/53c7da8baf72924af8000405/solutions/javascript