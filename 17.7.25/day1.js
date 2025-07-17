// Global Scope
var name = "Sweety";
let age = 22;
const place = "Mangalore";

// Hoisting
console.log(hoistedVar);
var hoistedVar = "I am hoisted";

// Function Scope
function greet() {
  var message = "Hello " + name + " from " + place;
  console.log(message);
}
greet();

// Block Scope and Shadowing
let status = "Outside Block";
{
  let status = "Inside Block";
  console.log("Block:", status);
}
console.log("Outside:", status);

// Lexical Scope and Closure
function outer() {
  let outerWord = "I remember this";

  function inner() {
    console.log("Closure Example:", outerWord);
  }

  return inner;
}
let rememberMe = outer();
rememberMe();

// Closure with Memoisation
function squareMemo() {
  let cache = {};
  return function (num) {
    if (cache[num]) {
      console.log("From memory:", cache[num]);
    } else {
      let result = num * num;
      cache[num] = result;
      console.log("Calculated:", result);
    }
  };
}
let square = squareMemo();
square(5);
square(5);

// Data Types
let str = "Hi";
let num = 30;
let isTrue = true;
let notDefined;
let empty = null;
let big = 1234567890123n;
let uniqueId = Symbol("id");

// Mutable vs Immutable
let x = "original";
let y = x;
y = "changed";
console.log("x:", x);

let person1 = { name: "Sweety" };
let person2 = person1;
person2.name = "Grace";
console.log("person1 name:", person1.name);

// Array
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log("Fruits:", fruits);

// Object
let user = {
  name: "Sweety",
  age: 22,
  place: "Mangalore"
};
console.log("User Object:", user);

// Set
let uniqueNumbers = new Set([1, 2, 2, 3]);
console.log("Set:", uniqueNumbers);

// Map
let info = new Map();
info.set("name", "Sweety");
info.set("place", "Mangalore");
console.log("Map:", info);

// Stack (LIFO)
let stack = [];
stack.push("First");
stack.push("Second");
console.log("Stack pop:", stack.pop());

// Queue (FIFO)
let queue = [];
queue.push("One");
queue.push("Two");
console.log("Queue shift:", queue.shift());

