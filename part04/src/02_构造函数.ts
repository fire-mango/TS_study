class Dog {
    name: string;
    age: number;
    /* 
        constructor 构造函数
        函数会在创建对象时调用
    */
    constructor(sendName: string, sendAge: number) {
        /* 
            在实例方法中，this就表示当前的实例
            在构造函数中，当前对象就是当时新建的对象
            可以通过this向新建的对象中添加属性
        */
        console.log(this, '我执行了');

        this.name = sendName
        this.age = sendAge
    }

    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        alert(`${this.name}汪汪汪！`)
        console.log(this)
    }
}

const dog = new Dog('小花', 5)
const dog2 = new Dog('小黄', 4)
const dog3 = new Dog('小黑', 3)
const dog4 = new Dog('小白', 2)

dog.bark()
console.log(dog)
console.log(dog2)
console.log(dog3)
console.log(dog4)