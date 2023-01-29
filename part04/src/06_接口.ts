(function () {
    /* 
        接口：用来定义一个类的结构以及应该包含哪些属性和方法
        接口也可以当成类型声明使用
        两个相同的接口，定义的属性和方法都需要使用
    */
    // type myInterface = {
    //     name: string;
    //     age: number;
    //     sayHi(): void;
    // }

    interface myInterface {
        name: string;
        age: number;
        sayHi(): void;
    }

    interface myInterface {
        sex: number;
        sayHello(): void;
    }

    const obj: myInterface = {
        name: 'mango',
        age: 18,
        sex: 1,
        sayHi() { },
        sayHello() { },
    }
    /* 
        接口可以在定义类时，限制类的结构
        接口中所有的属性都不能有实际的值
        接口只定义对象的结构，而不考虑实际值
        在接口中所有的方法都是抽象方法
    */
    interface myInter {
        name: string;
        sayHello(): void;
    }

    /* 
        定义类时，可以使类去实现一个接口，
        实现接口就是使类满足接口的要求
    */
    class MyClass implements myInter {
        name: string;

        constructor(sendName: string) {
            this.name = sendName
        };

        sayHello() {
            console.log(`${this.name}hi`);
        }
    }

    const mango = new MyClass('哈哈')
    mango.sayHello()
})()