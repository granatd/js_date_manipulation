let sym = Symbol("hidden");

let person = {
  name: "Dnaiel",
  [sym]: "txt",
};

console.log(person);
console.log(person[sym]);
const arr = [];
const fun = function () {};
const str = "";
const it = arr[Symbol.iterator];

console.log("typeof Array: " + typeof arr);
console.log("typeof Function: " + typeof fun);
console.log("typeof String: " + typeof str);

console.log("Iterator: " + it);
console.log("typeof Iterator: " + typeof it);
