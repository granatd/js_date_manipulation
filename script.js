const Man = function () {
  this.sex = "man";
};

function Dan() {
  // Dan's constructor
  Man.call(this); // Man's constructor
  this.name = "Daniel";
}

Dan.prototype = Object.create(Man.prototype);
Dan.prototype.constructor = Dan; // added by default but now was overriden by reassigning Dan.prototype

console.log("Functions based objects");
console.dir(Man);
console.dir(Dan);
console.dir(new Dan());

class ManClass {
  sex = "man";
}

class DanClass extends ManClass {
  name = "Daniel";
}

console.log("Classes based objects");
console.dir(ManClass);
console.dir(DanClass);
console.dir(new DanClass());
