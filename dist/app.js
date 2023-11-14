// // інтерфейс 1
// interface Person {
//   name: string;
//   age: number;
// const person = {
//   name: "Alex",
// };

// console.log("Result: ", "first string" || null || undefined);
// console.log("Result: ", null || undefined || "second string" || null);
// console.log("Result: ", false || undefined || null);

// let result;
// let value1 = 21;
// let value2 = 32;

// let result = value1 >= value2 ? value1 : value2;

// console.log(result);

const globalValue = "Global value";

console.log(globalValue); // "Global value"
console.log(localValueA); // ReferenceError: localValueA is not defined
console.log(localValueB); // ReferenceError: localValueB is not defined
console.log(localValueC); // ReferenceError: localValueC is not defined

// BLOCK A
if (true) {
  const localValueA = "Local value A";

  console.log(globalValue); // "Global value"
  console.log(localValueA); // "Local value A"
  console.log(localValueB); // ReferenceError: localValueB is not defined
  console.log(localValueC); // ReferenceError: localValueC is not defined

  // BLOCK B
  if (true) {
    const localValueB = "Local value B";

    console.log(globalValue); // "Global value"
    console.log(localValueA); // "Local value A"
    console.log(localValueB); // "Local value B"
    console.log(localValueC); // ReferenceError: localValueC is not defined
  }
}

// BLOCK C
if (true) {
  const localValueC = "Local value C";

  console.log(globalValue); // "Global value"
  console.log(localValueA); // ReferenceError: localValueA is not defined
  console.log(localValueB); // ReferenceError: localValueB is not defined
  console.log(localValueC); //  "Local value C"
}
