// 直接使用字面量进行类型声明
// @ts-ignore
var a;
a = 20;
// a = 12;
// 可以使用 | 连接多个类型（联合类型）
var b;
b = false;
b = 'aa';
// b = 12;
// any 表示可以为任意类型，一个变量设置类型为any后，相当于对该变量关闭了TS的类型检测
// 声明变量如果不指定类型，则ts解析器会自动判断变量的类型为any（隐式的any）
var c;
// let c;
c = 'aa';
c = false;
c = 10;
// unknown 表示未知类型的值 unknown实际上是一个类型安全的any 不能直接赋值
var d;
d = false;
d = 10;
d = 'aa';
// 类型为any时，可以赋值给任何变量
// 类型为unknown时，赋值会报错
var aa;
// e = c
if (typeof d === 'string') {
    aa = d;
}
// 类型断言，可以用来告诉解析器变量的实际类型
aa = d;
// void 用来表示空，以函数为例，表示没有返回值的函数
function add(params) {
    // return 1
}
// never 表示永远不会返回结果
function minus() {
    throw new Error("报错了！");
}
// object 表示一个js对象
var obj;
obj = {};
obj = function () { };
// {}  用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值,属性名?：属性值} ?表示属性可选 可有可无
// [propName: string]: any 表示可以使用任意属性
var obj2;
obj2 = { name: 'mango' };
var obj3;
obj3 = { name: 'mango', age: 18 };
// 设置函数解构的类型声明： 语法:(形参:类型,形参:类型...)=>返回值类型
var fun1;
fun1 = function (n1, n2) {
    return 10;
};
// let fun1 = function (n1: number, n2: number): number {
//     return 10
// };
// 数组的类型声明: 1.类型[]  2.Array<类型>
var arr1;
var arr2;
/*
元组：固定长度的数组  tuple
*/
var h;
h = ['666', '555'];
/*
枚举：  enum
*/
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'mango',
    gender: Gender.male
};
console.log(i.gender === Gender.male);
