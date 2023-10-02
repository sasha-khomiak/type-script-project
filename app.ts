type Book = import("./types").Book;

// import { Book } from "./types";

const currentBook: Book = {
  id: 12345,
  bookName: "Sophie's World",
  bookAuthor: "Jostein Gaarder",
  bookPrice: 4.49,
  cathegory: ["philosophy", "history"],
  inStock: true,
  details: {
    review:
      "The international bestseller about life, the universe and everything.",
    date: new Date(),
  },
};

console.log("currentBook", currentBook);

// function mathFunc(
//   num1: number,
//   num2: number,
//   callback: (arg1: number, arg2: number) => number
// ): void {
//   console.log("result", callback(num1, num2));
// }

// mathFunc(1, 2, (a, b) => a + b);
// mathFunc(7, 3, (a, b) => a - b);

// let printFunc: (item: number) => void;

// printFunc = (item) => {
//   console.log("item: ", item);
// };

// printFunc(1);

// let addFunction: (a: number, b: number) => number;

// addFunction = (a, b) => a + b;

// console.log(addFunction("1", "4"));

// console.log(addFunction(1, 4));

// function greet(name: string): string {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Sasha"));

// function sayHello(): void {
//   console.log("Hello, World!");
// }

// sayHello();
// function myFunc(value1: number | string, value2: number | string) {
//   if (typeof value1 === "number" && typeof value2 === "number") {
//     return value1 + value2;
//   } else {
//     return value1.toString() + value2.toString();
//   }
// }

// console.log("numbers: ", myFunc(1, 2));
// console.log("strings: ", myFunc(1, "2"));

// console.log(myFunc("3", 4));
// enum Status {
//   Pending = 1,
//   InProgress = 2,
//   Completed = 3,
// }

// console.log("Pending: ", Status.Pending); // 0
// console.log("InProgress: ", Status.InProgress); // 1
// console.log("Completed: ", Status.Completed); // 2

// const operation = {
//   status: Status.Pending,
// };

// if (operation.status === Status.Pending) {
//   console.log("Current operation status: ", Status.Pending);
// }

// let dynamicValue: any;

// // dynamicValue = { name: "Alex" };

// let a = dynamicValue.name;

// let myBook: {
//   id: number;
//   bookName: string;
//   bookAuthor: string;
//   bookPrice: number;
//   cathegory: string[];
//   inStock: boolean;
//   details: {
//     review: string;
//     date: Date;
//     imgCover?: string;
//   };
// };

// myBook = {
//   id: 12345,
//   bookName: "Sophie's World",
//   bookAuthor: "Jostein Gaarder",
//   bookPrice: 4.49,
//   cathegory: ["philosophy", "history"],
//   inStock: true,
//   details: {
//     review:
//       "The international bestseller about life, the universe and everything.",
//     date: new Date(),
//   },
// };

// let someNumber = 10;

// someNumber = "ten";

// let person: [string, number] = ["Alice", 25];
// person.push("Princess");

// let dynamicValue: unknown = "Hello";

// let someNumber: number;

// if (typeof dynamicValue === "number") {
//   someNumber = dynamicValue;
// }

// const button = document.querySelector("#summ-btn")! as HTMLElement;

// const number1 = document.querySelector("#number1")! as HTMLInputElement;
// const number2 = document.querySelector("#number2")! as HTMLInputElement;

// function summ(a: number, b: number) {
//   return a + b;
// }

// button.addEventListener("click", () => {
//   console.log("Summ: ", summ(Number(number1.value), +number2.value));
// });
