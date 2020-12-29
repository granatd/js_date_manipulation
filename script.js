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

const [sport1, sport2] = person;
console.log(`Sport1: ${sport1}`);
console.log(`Sport2: ${sport2}`);
