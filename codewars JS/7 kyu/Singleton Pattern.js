function Singleton() {
    if ( Singleton.instance )
        return Singleton.instance;
    Singleton.instance = this;
    this.prop1 = 5;
    this.method = function() {};
}

// http://www.codewars.com/kata/534fcca5edb124cfe6000f60/solutions/javascript
