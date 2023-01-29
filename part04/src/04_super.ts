(function () {
    class Animal {
        name: string;
        constructor(sendName: string) {
            this.name = sendName
        };
        crow() {
            console.log(`${this.name}~~~~`);
        }
    }

    class Dog extends Animal {
        age: number;
        constructor(sendName: string, sendAge: number) {
            // 如果在子类写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(sendName); // 调用父类的构造函数
            this.age = sendAge
        };
        crow() {
            // super 表示当前类的父类
            // super.crow()
            console.log(`${this.name}~~`);
        }
    }

    const dog = new Dog('小黑', 5)
    console.log(dog);
    dog.crow()
})()