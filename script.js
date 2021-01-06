Object.creat = function (parent) {
  function Tmp() {
    parent.call(this); // parent construction
  }
  Tmp.prototype = parent.prototype;
  return new Tmp();
};

const Parent = function () {
  this.name = "Parent";
};

Parent.prototype.greet = function () {
  console.log("hello from Parent");
};

const child = Object.creat(Parent);

console.dir(child);
