import { name } from './mango'

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(123, 456))

console.log('mango')

console.log(name)

// let obj: { name: string, age?: number };

// obj = { name: 'fire' }

const obj = { name: 'fire', age: 55 }

console.log(obj);

obj.age = 18

console.log(obj);

// console.log(Promise);
