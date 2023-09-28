let dynamicValue: unknown = "Hello";

let someNumber: number;

if (typeof dynamicValue === "number") {
  someNumber = dynamicValue;
}

// const button = document.querySelector("#summ-btn")! as HTMLElement;

// const number1 = document.querySelector("#number1")! as HTMLInputElement;
// const number2 = document.querySelector("#number2")! as HTMLInputElement;

// function summ(a: number, b: number) {
//   return a + b;
// }

// button.addEventListener("click", () => {
//   console.log("Summ: ", summ(Number(number1.value), +number2.value));
// });
