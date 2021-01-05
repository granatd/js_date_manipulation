Object.creat = function (parent) {
  function Tmp() {
    this.__proto__.constructor.call(this); // invoke parent constructor on new Tmp obj
  }
  Tmp.prototype = parent;
  return new Tmp();
};

const Parent = function () {
  this.name = "Parent";
};

Parent.prototype.greet = function () {
  console.log("hello from Parent");
};

const child = Object.creat(Parent.prototype);

console.dir(child);
