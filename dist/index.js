"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
x = true;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello"); // Can't do this
ids.push(6);
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// let person: [number, string, boolean] = [1, "Brad", 3]; // Can't do this
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
// Enum
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
// Objects
const user1 = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 2,
    name: "Brad",
};
// Type Asserion
let cid = 1;
// let customerID = <number>cid // is equal to the next line
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
const user3 = {
    id: 3,
    name: "Lily",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["Brad", "John", "Jill"]);
// numArray.push("hello"); // Can't do this
strArray.push("hello");
