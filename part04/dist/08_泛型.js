"use strict";
function fn(a) {
    return a;
}
let res = fn('dsd');
let res2 = fn(12);
console.log(res, res2);
function fn2(a, b) {
    console.log(a);
    console.log(b);
    return a;
}
fn2('qqq', 5);
function fn3(a) {
    return a.length;
}
class Persons {
    constructor(name) {
        this.name = name;
    }
}
const per = new Persons('ss');
