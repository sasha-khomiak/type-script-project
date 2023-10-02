// import { Book } from "./types";
var currentBook = {
    id: 12345,
    bookName: "Sophie's World",
    bookAuthor: "Jostein Gaarder",
    bookPrice: 4.49,
    cathegory: ["philosophy", "history"],
    inStock: true,
    details: {
        review: "The international bestseller about life, the universe and everything.",
        date: new Date(),
    },
};
console.log("currentBook", currentBook);
