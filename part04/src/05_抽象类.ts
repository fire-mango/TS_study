(function () {
    /* 
        以abstract开头的类为抽象类
        抽象类不能用来创建对象，是专门用来继承的类
        抽象类中可以添加抽象方法
    */
    abstract class Animal {
        name: string;
        constructor(sendName: string) {
            this.name = sendName
        };

        /* 
            抽象方法使用abstract开头，没有方法体
            抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        */
        abstract crow(): void;
    }

    class Dog extends Animal {
        crow() {
            console.log(`${this.name}~~`);
        }
    }

    const dog = new Dog('小黑')
    console.log(dog);
    dog.crow()

    // const cat = new Animal('小白')
})()