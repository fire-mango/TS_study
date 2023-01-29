"use strict";
(function () {
    class Animal {
        constructor(sendName, sendAge) {
            this.bark = '叫叫叫';
            this.name = sendName;
            this.age = sendAge;
        }
        ;
        crow() {
            console.log(`${this.name}${this.bark}~~`);
        }
    }
    class Dog extends Animal {
        constructor() {
            super(...arguments);
            this.bark = '汪汪汪';
        }
        run() {
            console.log(`${this.name}${this.bark}在跑~`);
        }
        ;
        crow() {
            console.log(`${this.name}${this.bark}~~~~`);
        }
    }
    class Cat extends Animal {
        constructor() {
            super(...arguments);
            this.bark = '喵喵喵';
        }
    }
    const dog = new Dog('小黑', 5);
    console.log(dog);
    dog.crow();
    dog.run();
    const cat = new Cat('小白', 2);
    console.log(cat);
    cat.crow();
})();
