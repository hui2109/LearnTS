interface Person1 {
    name: string;
    age: number;
}

let tom1: Person1 = {
    name: 'tom1',
    age: 18
}

// 可选属性?:
interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2 = {
    name: 'tom2'
};

// 任意属性[propName: string]: any;
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person3 = {
    name: 'tom3',
    gender: 'male'
};

//只读属性readonly
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom4: Person4 = {
    id: 89757,
    name: 'tom4',
    gender: 'male'
};