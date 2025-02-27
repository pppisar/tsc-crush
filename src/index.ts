// Basic Types
let id: number = 5;

let company: string = "Traversy Media";

let isPublished: boolean = true;

let x: any = "Hello";
x = true;

let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push("Hello"); // Can't do this
ids.push(6);

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// let person: [number, string, boolean] = [1, "Brad", 3]; // Can't do this

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up);
console.log(Direction1.Left);

// Enum
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Down);

// Objects
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 2,
  name: "Brad",
};

// Type Asserion
let cid: any = 1;
// let customerID = <number>cid // is equal to the next line
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces (Type can be used with primitives and Unions)
interface UserInteface {
  readonly id: number;
  name: string;
  age?: number;
} // age? - optional

const user3: UserInteface = {
  id: 3,
  name: "Lily",
};

// user3.id = 4; // Can't be used after readonly was specified

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInteface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInteface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["Brad", "John", "Jill"]);

// numArray.push("hello"); // Can't do this
strArray.push("hello");
