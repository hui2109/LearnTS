// 枚举（Enum）类型用于取值被限定在一定范围内的场景，
// 比如一周只能有七天，颜色限定为红绿蓝等。
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true


// 常数枚举是使用 const enum 定义的枚举类型：
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
declare enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];
// 之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除