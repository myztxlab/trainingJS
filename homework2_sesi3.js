class Shape {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    move () {
        console.log(`move x ${this._x}, move y ${this._y}`);
    }
}

class Rectangle extends Shape {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get width() {
        return this._width;
    }
    set height(value) {
        this._height = value;
    }

}

class Circle extends Shape {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
}

class Eye extends Circle {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }

    roll (rollAmount) {
        this.move(this._x,this._y);
        let result = this._x + rollAmount;
        return (`rollAmount : ${this._x} + ${rollAmount} = ${result}`);
    }
}

let mata = new Eye();
mata.x = 10;
mata.y = 20;
console.log(mata.roll(5));
