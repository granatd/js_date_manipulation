let sym = Symbol("hidden");

let person = {
  name: "Dnaiel",
  sports: ["skiing", "running", "cycling", "jumping"],
  [Symbol.iterator]: function () {
    return {
      sports: this.sports,
      i: 0,
      next: function () {
        let value = this.sports[this.i];
        this.i++;

        return {
          done: this.i > this.sports.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (let sport of person) {
  console.log(sport);
}
