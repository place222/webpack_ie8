export class Person {
    constructor(name) {
        this.name = name;
    }
}


export class Student extends Person {
    constructor(name) {
        super(name)
    }
    toString() {
        console.log(this.name);
    }
}