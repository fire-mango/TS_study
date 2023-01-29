import { name } from './apps.js'

// dfdf

let a = 'ccc'

console.log(name)

function fn(this: any, a: number, b: number) {
    console.log(this);
}

let box = document.getElementById('box')
box?.addEventListener('click', function () {
    console.log('aaa');
})