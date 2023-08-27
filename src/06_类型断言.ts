// 语法 --> 值 as 类型
// 将一个联合类型断言为其中一个类型

// 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型中共有的属性或方法
interface Cat {
    name: string;
    run(a: string, b:string): string;
}
interface Fish {
    name: string;
    swim(a: string, b:string): string;
}
function getName(animal: Cat | Fish) {
    return animal.name;
}


// 使用类型断言，将 animal 断言成 Fish
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
