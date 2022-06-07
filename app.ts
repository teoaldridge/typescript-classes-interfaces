//OPTIONAL PROPERTIES

// You make a property optiona by adding  ? after it's name. property?: propertytype
//You can also mark methods as optional myMethod?() {}
interface AddFn {
    (a: number, b: number) : number; 
}

let add: AddFn; 

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    //name is optional
    readonly name?: string; 
    //here the property outputName is optional. 
    outputName?: string; 
}

interface Greetable extends Named{
    name?: string;
    age: number;

    greet(phrase: string): void; 
}

class Person implements Greetable {
    //we have made name an optional property
    name?: string; 
    age = 30;

    //here we have added an optional constructor parameter (n)
    constructor(n?: string) {
        //here we set this to happen only if n has been set
        if (n) {
            this.name = n; 
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi'); 
        }
    }
}

let user1: Greetable;

user1 = new Person (); 

user1.greet('Hi there- I am');