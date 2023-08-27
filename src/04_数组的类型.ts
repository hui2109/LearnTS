// 「类型 + 方括号」表示法
let a: number[] = [1, 1, 2, 3, 5];


// 数组泛型: Array<elemType>
let b: Array<number> = [1, 1, 2, 3, 5];


// 用接口表示数组 (一般不会这么做)
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];


// 类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
function sum2() {
    let args: IArguments = arguments;
}
// 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}



// any 在数组中的应用 (常用)
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];