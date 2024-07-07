class Person {
    private readonly name: string;
    _size = 0;
    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    // [key: string]: boolean | ((key: string) => boolean);

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    toString(): string {
        return 'wow';
    }
}

const person = new Person('WOW');
console.log(person.getName());
console.log(person['name']);

person.size = 10;

const obj: any = {};

console.log(`${person}`);

obj[`${person}`] = 'wow';
console.log(obj);
// console.log(obj['wow']);

obj[(1).toString()] = 'hihi';
console.log(obj);
console.log(obj['1']);

obj[1] = 'nnnn';
console.log(obj);

let foo: { [index: string]: { message: string } } = {};

/**
 * 정의된 구조에 맞는 것들만 저장
 */
/** Ok */
foo['a'] = { message: 'some message' };
/** 오류: 타입이 string인 `message`가 있어야 함. `message` 부분에 오타 존재  */
// foo['a'] = { messages: 'some message' };

/**
 * 내용을 읽을 때도 타입 검사가 이루어짐
 */
/** Ok */
foo['a'].message;
/** 오류: messages는 존재하지 않음. `message` 부분에 오타 존재 */
// foo['a'].messages;

interface Bar {
    x: number;
    y: string;
}

