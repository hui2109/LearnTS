// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型

// 1. 函数的合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口的合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

interface Alarm {
    price: number;
    alert: (s: string) => string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}

// 实现Alarm接口
let a: Alarm = {
    price: 12,
    weight: 15,
    alert(ss: string): string {
        return ss;
    }
};
