// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 
// public、private 和 protected

// protected 修饰的属性或方法是受保护的，
// 它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
    public name;
    public constructor(name: string) {
        this.name = name;
    }
}

let a1 = new Animal('Jack');
console.log(a1.name); // Jack
a1.name = 'Tom';
console.log(a1.name); // Tom


// 当构造函数修饰为 protected 时，该类只允许被继承：
class Animal2 {
    public name;
    protected constructor(name: string) {
        this.name = name;
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

let v = new Cat('Jack');


// 等同于类中定义该属性同时给该属性赋值，使代码更简洁。
class Animal3 {
    // public name: string;
    public constructor(public name: string) {
        this.name = name;
    }
}


// 抽象类(abstract class)和抽象方法(abstract sayHi())
abstract class Animal4 {
    public name;
    public constructor(name: string) {
        this.name = name;
    }
    public abstract sayHi(): any;
}

class Cat2 extends Animal {
    public sayHi() {
        return `Meow, My name is ${this.name}`;
    }
}

// 给类加上 TypeScript 的类型
let cat: Animal4 = new Cat2('Tom');
console.log(cat.sayHi());
