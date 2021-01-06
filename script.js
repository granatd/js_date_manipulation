const Human = function () {
  this.sex = "man";
};

function Dan() {
  this.name = "Daniel";
}

Dan.prototype = Human.prototype;

const dan = new Dan();

console.dir(Human);
console.dir(Dan);

console.dir(dan);
