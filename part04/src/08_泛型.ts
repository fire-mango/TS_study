/* 
    在定义函数或者类时，如果类型不明确，可以使用泛型
*/
function fn<T>(a: T): T {
    return a
}

// 可以直接调用具有泛型的函数
let res = fn('dsd')  // 不指定泛型，ts可以自动对类型进行推断
let res2 = fn<number>(12) // 指定泛型

console.log(res, res2)

// 泛型可以指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(a);
    console.log(b);
    return a
}

fn2<string, number>('qqq', 5)

interface Inter {
    length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length
}

// fn3({name:'sss'})

class Persons<T> {
    constructor(public name: T) {

    }
}

const per = new Persons<string>('ss')
