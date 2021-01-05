const arr = [10, 12, 16];

const newArr = Array.from(arr, (val) => val * 2);
const newArr2 = arr.map((val) => val * 2);

console.log(newArr);
console.log(newArr2);

for (let i of arr) {
  console.log(i);
}
