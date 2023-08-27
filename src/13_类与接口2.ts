// 「接口继承类」和「接口继承接口」没有什么本质的区别
// 实例的类型当然不应该包括构造函数、静态属性或静态方法

class Point2 {
    /** 静态属性，坐标系原点 */
    static origin = new Point2(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point2) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}

interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
}

let p1: Point2;
let p2: PointInstanceType;
// 上例中最后的类型 Point 和类型 PointInstanceType 是等价的
// 同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法