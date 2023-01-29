"use strict";
class Person {
    constructor() {
        this.name = 'mango';
        this.age = 18;
    }
    sayHello() {
        console.log(this);
        console.log('hello');
    }
}
const mango = new Person();
mango.sayHello();
