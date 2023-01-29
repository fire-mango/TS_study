"use strict";
class Dog {
    constructor(sendName, sendAge) {
        console.log(this, '我执行了');
        this.name = sendName;
        this.age = sendAge;
    }
    bark() {
        alert(`${this.name}汪汪汪！`);
        console.log(this);
    }
}
const dog = new Dog('小花', 5);
const dog2 = new Dog('小黄', 4);
const dog3 = new Dog('小黑', 3);
const dog4 = new Dog('小白', 2);
dog.bark();
console.log(dog);
console.log(dog2);
console.log(dog3);
console.log(dog4);
