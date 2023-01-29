(function () {
    class Person {
        // TS可以在属性前添加属性的修饰符
        /* 
            public(默认值)：可以在任意位置访问(修改)
        */
        // public name: string;
        // public age: number;

        /* 
            private(私有属性)：只能在类的内部访问(修改)
                通过在类中添加方法使得私有属性可以被外部访问(修改)
        */
        private _name: string;
        private _age: number;

        /* 
            protected(受保护的属性)：只能在当前类和当前类的子类中访问(修改)
        */
        protected sex: string;

        constructor(sendName: string, sendAge: number, sendSex: string) {
            this._name = sendName
            if (sendAge > 0) {
                this._age = sendAge
            } else {
                throw new Error("年龄不能为负值");
            }

            this.sex = sendSex

        }

        /* 
            getter方法用来读取属性
            setter方法用来存取属性
                它们被称为属性的存取器
        */

        // // 定义方法获取name属性
        // getName() {
        //     return this._name
        // }
        // // 定义方法设置name属性
        // setName(sendName: string) {
        //     this._name = sendName
        // }

        // getAge() {
        //     return this._age
        // }
        // setAge(sendAge: number) {
        //     if (sendAge > 0) {
        //         this._age = sendAge
        //     } else {
        //         throw new Error("年龄不能为负值");
        //     }
        // }

        get name() {
            return this._name
        }

        set name(sendName: string) {
            this._name = sendName
        }

        get age() {
            return this._age
        }

        set age(sendAge: number) {
            if (sendAge > 0) {
                this._age = sendAge
            } else {
                throw new Error("年龄不能为负值");
            }
        }
    }

    const per = new Person('mango', 18, '男')
    // per.setName('fire')
    // per.setAge(88)
    // console.log(per.getName())
    // console.log(per.getAge())

    per.name = 'fire'
    per.age = 28
    console.log(per.name)
    console.log(per.age)

    console.log(per)
    /* 
        当前属性是在对象中设置的，可以任意被修改
        会导致对象中数据变的不安全
    */
    // per.name = 'fire'
    // per.age = -38
    // console.log(per)

    class People extends Person {
        setSex(sendSex: string) {
            this.sex = sendSex
        }
    }

    const per2 = new People('fire', 20, '男')
    // per2.setSex('女')
    console.log(per2)


    class A {
        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {

        }
    }

    const aa = new A('six',85)

    console.log(aa)
})()
