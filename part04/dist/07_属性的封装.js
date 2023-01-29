"use strict";
(function () {
    class Person {
        constructor(sendName, sendAge, sendSex) {
            this._name = sendName;
            if (sendAge > 0) {
                this._age = sendAge;
            }
            else {
                throw new Error("年龄不能为负值");
            }
            this.sex = sendSex;
        }
        get name() {
            return this._name;
        }
        set name(sendName) {
            this._name = sendName;
        }
        get age() {
            return this._age;
        }
        set age(sendAge) {
            if (sendAge > 0) {
                this._age = sendAge;
            }
            else {
                throw new Error("年龄不能为负值");
            }
        }
    }
    const per = new Person('mango', 18, '男');
    per.name = 'fire';
    per.age = 28;
    console.log(per.name);
    console.log(per.age);
    console.log(per);
    class People extends Person {
        setSex(sendSex) {
            this.sex = sendSex;
        }
    }
    const per2 = new People('fire', 20, '男');
    console.log(per2);
    class A {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const aa = new A('six', 85);
    console.log(aa);
})();
