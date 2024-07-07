interface Shape {
    getArea: () => number;
}

class Unit {
    toString(): string {
        return `${this}`;
    }
}

class Rectangle implements Shape {

    public constructor(
        private width: number,
        private height: number
    ) {}

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Unit implements Shape {
    public constructor(
        private width: number
    ) {
        super();
    }

    getArea(): number {
        return this.width ** 2;
    }

    override toString(): string {
        return `Square[width=${this.width}]`;
    }
}
