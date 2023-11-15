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

// let password;

// do {
//   password = prompt("Enter your password");
// } while (password.length < 6);

// console.log("Your password is: ", password);

// let summ = 0;

// for (let i = 0; i <= 4; i += 1) {
//   console.log("Поточне значення лічильника: " + i);
//   summ += i;
// }

// console.log("Сума: ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // Припиняє виконання циклу, коли i дорівнює 5
//   }
//   console.log(i);
// }

// console.log("Log after loop");

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Пропускає виконання решти коду блоку для i = 2
  }
  console.log(i);
}
