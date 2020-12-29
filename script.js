let sym = Symbol("hidden");

let person = {
  name: "Dnaiel",
  [sym]: "txt",
};

console.log(person);
console.log(person[sym]);
