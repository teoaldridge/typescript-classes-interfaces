"use strict";
//OPTIONAL PROPERTIES
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    //here we have added an optional constructor parameter (n)
    constructor(n) {
        this.age = 30;
        //here we set this to happen only if n has been set
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there- I am');
