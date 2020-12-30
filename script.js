class Person {
  name = "Daniel";
}

class Boss extends Person {
  name = "Anna";
}

const person = new Person();
const boss = new Boss();

// const b = {
//   name: "Daniel",
// };

const p = {
  name: "Anna",
};

// Derive from b obj
// Object.setPrototypeOf(p, b);
// Object.setPrototypeOf(boss, person);

function C() {
  this.name = "Anna";
}
// Create Person instance from C constructor
C.prototype = Person.prototype;
const c = new C.prototype.constructor();

console.dir(person);
console.dir(boss);

// console.dir(b);
// console.dir(p);

console.dir(c);
