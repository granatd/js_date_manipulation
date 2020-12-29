let sym = Symbol("hidden");

let person = {
  name: "Dnaiel",
  sports: ["skiing", "running", "cycling", "jumping"],
  [Symbol.iterator]: function () {
    let i = 0;
    const sports = this.sports;

    return {
      next: function () {
        let value = sports[i];
        i++;

        return {
          done: i > sports.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (let sport of person) {
  console.log(sport);
}
