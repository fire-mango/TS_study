"use strict";
(function () {
    class Animal {
        constructor(sendName) {
            this.name = sendName;
        }
        ;
    }
    class Dog extends Animal {
        crow() {
            console.log(`${this.name}~~`);
        }
    }
    const dog = new Dog('小黑');
    console.log(dog);
    dog.crow();
})();
