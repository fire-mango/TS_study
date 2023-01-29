// 直接申明变量类型
let aaa: string;
// 申明变量类型后直接赋值
let bbb: boolean = false;
// ts可以自动对申明的变量进行类型检测
let ccc = false;
// 参数、返回值也可以进行类型申明
function sum(aaa: number, bbb: number):number {
    return aaa + bbb
}

console.log(typeof sum(123, 456))