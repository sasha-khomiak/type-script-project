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

let day = 5;
let dayName;

if (day === 1) {
  dayName = "Понеділок";
} else if (day === 2) {
  dayName = "Вівторок";
} else if (day === 3) {
  dayName = "Середа";
} else if (day === 4) {
  dayName = "Четвер";
} else if (day === 5) {
  dayName = "П'ятниця";
} else {
  dayName = "Не відомо";
}

//   switch (day) {
//     case 1:
//       dayName = "Понеділок";
//       break;
//     case 2:
//       dayName = "Вівторок";
//       break;
//     case 3:
//       dayName = "Середа";
//       break;
//     case 4:
//       dayName = "Четвер";
//       break;
//     case 5:
//       dayName = "П'ятниця";
//       break;
//     default:
//       dayName = "Не відомо";
//   }

console.log(dayName); // Виведе 'Вівторок', оскільки day === 2
