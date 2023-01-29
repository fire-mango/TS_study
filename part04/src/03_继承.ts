(function () {
    class Animal {
        name: string;
        age: number;
        bark: string = '叫叫叫';
        constructor(sendName: string, sendAge: number) {
            this.name = sendName
            this.age = sendAge
        };
        crow() {
            console.log(`${this.name}${this.bark}~~`);
        }
    }

    // extends 继承
    /* 
        Dog extends Animal  
        Animal：父类  Dog：子类
        使用继承后子类会拥有父类所有的方法和属性
        可以直接在子类添加父类没有的方法
        如果在子类中添加和父类相同的属性或方法，
        子类会覆盖父类的属性或方法
        子类覆盖掉父类方法的形式，称为方法的重写
    */
    class Dog extends Animal {
        bark: string = '汪汪汪';

        run() {
            console.log(`${this.name}${this.bark}在跑~`)
        };
        crow() {
            console.log(`${this.name}${this.bark}~~~~`);
        }
    }

    class Cat extends Animal {
        bark: string = '喵喵喵';
    }

    const dog = new Dog('小黑', 5)
    console.log(dog);
    dog.crow()
    dog.run()
    const cat = new Cat('小白', 2)
    console.log(cat);
    cat.crow()
})()