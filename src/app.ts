// type Book = import("./types").Book;

import { Book } from "./types";

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

console.log("currentBook: ", currentBook);

// let age: number;
// age = 50;
// let name:string;
//   name = "Max";
// let toggle: boolean;
//   toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
//   notInitialize = undefined;
// let callback = (a: number) => number;
// callback= (a) => {
//   return 100 + a;
// };

//-------
// let anything: any = -20;
// anything = "Text";
// anything = {};

//-------

// let some: string;
// some = "Text";

// let str: string;

// str = some;

// //-------

// let person: [string, number] = ["Max", 21];

// //-------

// enum Status {
//   LOADING,
//   READY,
// }

// //-------

// let variable: number | string;

// //-------

// let variable2: "enable" | "disable";

// //-------

// function showMessage(message: any): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// //-------

// type MyType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: MyType = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: MyType = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

//-------

// type Book = import("./types").Book;

// // import { Book } from "./types";

// const currentBook: Book = {
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

// console.log("currentBook", currentBook);
