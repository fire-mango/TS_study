"use strict";
(function () {
    const obj = {
        name: 'mango',
        age: 18,
        sex: 1,
        sayHi() { },
        sayHello() { },
    };
    class MyClass {
        constructor(sendName) {
            this.name = sendName;
        }
        ;
        sayHello() {
            console.log(`${this.name}hi`);
        }
    }
    const mango = new MyClass('哈哈');
    mango.sayHello();
})();
