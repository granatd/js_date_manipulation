var Animal = {
  legs: "two",
  speak() {
    console.log(this.name + " makes a noise.");
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.type = "dog";
Object.setPrototypeOf(Dog.prototype, Animal); // If you do not do this you will get a TypeError when you invoke speak

let d = new Dog("Mitzie");
d.speak(); //Mitzie makes a noise.
console.dir(d);
