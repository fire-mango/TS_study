// 使用class关键字来定义一个类
/* 
    对象中包含两个部分
        属性
        方法
*/
class Person {
    /* 
        直接定义的属性是实例属性，需要通过对象的实例去访问
           const mango = new Person() 
           mango.name
        使用static关键字的属性是静态属性，可以直接通过类访问
           Person.age
    */
    // 定义实例属性
    name: string = 'mango';
    age: number = 18;

    // 在属性前使用static关键字可以定义类属性(静态属性)
    // static age: number = 18

    // readonly表示只读属性 不可以修改
    // readonly name: string = 'mango';
    // static readonly age: number = 18

    // 定义方法
    /* 
        方法如果以static开头，则方法为类方法，可直接通过类调用
        如果没有static，则可以通过对象去调用
    */
    sayHello() {
        console.log(this)
        console.log('hello')
    }
}

const mango = new Person()

// console.log(mango);
// console.log(Person.age);

// mango.name = 'ccc'
// console.log(mango);

mango.sayHello()