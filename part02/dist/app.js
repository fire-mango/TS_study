import { name } from './apps.js';
let a = 'ccc';
console.log(name);
function fn(a, b) {
    console.log(this);
}
let box = document.getElementById('box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () {
    console.log('aaa');
});
