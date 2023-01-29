"use strict";
(function () {
    class Animal {
        constructor(sendName) {
            this.name = sendName;
        }
        ;
        crow() {
            console.log(`${this.name}~~~~`);
        }
    }
    class Dog extends Animal {
        constructor(sendName, sendAge) {
            super(sendName);
            this.age = sendAge;
        }
        ;
        crow() {
            console.log(`${this.name}~~`);
        }
    }
    const dog = new Dog('小黑', 5);
    console.log(dog);
    dog.crow();
})();
