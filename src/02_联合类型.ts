// 联合类型使用 | 分隔每个类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// 下面的代码会报错
// let myFavoriteNumber: string | number;
// myFavoriteNumber = true;