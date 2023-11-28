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

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue; // Пропускає виконання решти коду блоку для i = 2
//   }
//   console.log(i);
// }

// const myArray = ["Red", "Green", "Blue", "Magenta"];
// const toFind = "Blue";
// let message = "Element isт't exist";

// for (let element of myArray) {
//   if (element === toFind) {
//     message = "Element is exist";
//     break; // Припиняє виконання циклу, коли знайдено збіг
//   }
// }

// console.log(message);

// let myArray = [1, 2, 3, 4, 5];

// for (let number of myArray) {
//   if (number % 2 === 0) {
//     continue; // Пропускає парні числа
//   }
//   console.log(number);
// }

// let myString = "JavaScript";
// let myArray = myString.split(""); // Розділяє рядок на масив символів
// console.log(myArray); // Виведе: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// let myArray = ["Це", "рядок,", "який", "потрібно", "з'єднати"];
// let myString1 = myArray.join(" "); // Об'єднує елементи масиву з пробілом
// let myString2 = myArray.join("-"); // Об'єднує елементи масиву з тире
// let myString3 = myArray.join(""); // Об'єднує елементи масиву
// console.log(myString1); // Виведе: "Це рядок, який потрібно з'єднати"
// console.log(myString2); // Виведе: "Це-рядок,-який-потрібно-з'єднати"
// console.log(myString3); // Виведе: "Церядок,якийпотрібноз'єднати"

// const cars = ["Ford", "Audi", "Toyota", "BMW", "Opel"];
// const firm = "Audi";

// if (cars.includes(firm)) {
//   console.log("This is a car!");
// } else {
//   console.log("This isn't a car!");
// }

// let myArray = [1, 2, 3];

// myArray.push(4); // [1, 2, 3, 4]
// let resultOfPush = myArray.push(5, 6); // [1, 2, 3, 4, 5, 6]

// console.log(myArray); // Виведе: [1, 2, 3, 4, 5, 6]
// console.log(resultOfPush); // Виведе: 6  (Довжина масиву після додавання нових елементів)

// let myArray = ["Red", "Green", "Blue"];

// myArray.unshift("Orange");
// let resultOfUnshift = myArray.unshift("Magenta", "Brown");

// console.log(myArray); // ["Magenta", "Brown", "Orange", "Red", "Green", "Blue"]
// console.log(resultOfUnshift); // resultOfUnshift = 6 - довжина масиву після додавання елементів

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray); // Виведе: [1, 2, 3, 4, 5]

// let newArray = myArray.slice(-2); // Витягає два останні елементи [4, 5]

// console.log(newArray); // Виведе: [4, 5]
// console.log(myArray); // Виведе: [1, 2, 3, 4, 5] - вихідний масив не змінився

// const myArray = ["A", "B", "C", "D", "E", "F"];
// console.log(myArray); // Видеде: ["A", "B", "C", "D", "E", "F"]

// const newArray = myArray.splice(1, 2); // У вихідному масиві видаляє 2 елементи починаючи з елемента з індексом 1

// console.log(myArray); // Видеде: ["A", "D", "E", "F"]
// console.log(newArray); // Видеде: ["B", "C"]

// const myArray = ["A", "B", "C", "D"];
// console.log(myArray); // Видеде: ["A", "B", "C", "D"]

// // У вихідний масив додається 2 елементи починаючи з елемента з індексом 1
// // елементи, які йдуть далі - зсуваються
// const newArray = myArray.splice(1, 0, "X", "Y");

// console.log(myArray); // Видеде: ["A" , "X", "Y", "D", "E", "F"]
// console.log(newArray); // Видеде: порожній масив []

// const myArray = ["A", "B", "C", "D", "E"];
// console.log(myArray); // Видеде: ["A", "B", "C", "D", "E"]

// // У вихідному масиві видаляється 2 елементи починаючи від індексу 1
// // і на це місце додаються три нові, елементи, які йдуть далі - зсуваються
// const newArray = myArray.splice(1, 2, "X", "Y", "Z");

// console.log(myArray); // Видеде: ["A" , "X", "Y", "Z", "D", "E"]
// console.log(newArray); // Видеде: масив видалених елементів ["B", "C"]

// const colors = ["Red", "Green", "Blue"];
// const animals = ["Cat", "Dog"];
// console.log(colors); // Виведе: ["Red", "Green", "Blue"]
// console.log(animals); // Виведе: ["Cat", "Dog"]

// const newArray1 = colors.concat(animals);
// console.log(newArray1); // Виведе: ["Red", "Green", "Blue", "Cat", "Dog"]

// const newArray2 = animals.concat(colors);
// console.log(newArray2); // Виведе: ["Cat", "Dog", "Red", "Green", "Blue"]

// //Вихідні масиви не змінились
// console.log(colors); // Виведе: ["Red", "Green", "Blue"]
// console.log(animals); // Виведе: ["Cat", "Dog"]

// function greeting(name) {
//   console.log(`Привіт, ${name}!`);
// }

// greeting("Alex"); // Виведе: "Привіт, Alex!"
// greeting("Max"); // Виведе: "Привіт, Max!"

// function summ(a, b) {
//   console.log(a + b);
// }

// summ(1, 3, 4); // Виведе: 4
// summ(5, 6); // Виведе: 11

// function summ(a, b) {
//   return a + b;
//   console.log("Цей код ніколи не виконається");
// }

// let result1 = summ(3, 5);
// console.log(result1); // Виведе: 8

// let result2 = summ(100, 14);
// console.log(result2); // Виведе: 114

// function greeting() {
//   console.log("Переривання на виконання функції");
// }

// console.log("Код програми до виклику функції");
// greeting();
// console.log("Код програми після виклику функції");

// function greeting(name = "Гість") {
//   console.log(`Привіт, ${name}!`);
// }

// greeting(); // Виведе: "Привіт, Гість!"
// greeting("Олександр"); // Виведе: "Привіт, Олександр!"

// function invitation(name = "Guest", tickets = 2, date = "today") {
//   console.log(`Hello, ${name}! You have ${tickets} tickets for ${date}!`);
// }

// invitation("Alex", 3, "tomorrow"); // `Hello, Alex! You have 3 tickets for tomorrow!`
// invitation("Max", 4); // `Hello, Max! You have 4 tickets for today!`
// invitation("John"); // `Hello, John! You have 2 tickets for today!`
// invitation(); // `Hello, Guest! You have 2 tickets for today!`

// function myFunc(...args) {
//   console.log(args);
// }

// myFunc("Red", "Green", "Blue"); // Виведе: ["Red", "Green", "Blue"]

// function a() {
//   console.log("a викликає b");
//   b();
//   console.log("a завершує роботу");
// }

// function b() {
//   console.log("b викликає c");
//   c();
//   console.log("b завершує роботу");
// }

// function c() {
//   console.log("c завершує роботу");
// }

// a(); // Викликаємо функцію a

// const user = {
//   name: "Олександр",
//   surname: "Хомяк",
//   age: 30,
//   address: {
//     country: "Ukraine",
//     city: "Київ",
//     zip: 11000,
//   },
//   hobby: ["electronics", "programming", "sport", "gym"],
//   isMarried: false,
// };

// console.log(user.name); // "Олександр"
// user.name = "Oлена";
// console.log(user.name); // "Oлена"

// console.log(user.sex); // undefined
// user.sex = "female";
// console.log(user.sex); // "female"

// const userName = user["name"];
// console.log(userName); // "Олександр"

// const userHobby = user["hobby"];
// console.log(userHobby); // ["electronics", "programming", "sport", "gym"]

// const paremetr = "surname";
// const userSurname = user[paremetr];
// console.log(userSurname); // "Хомяк"

// console.log(user["profession"]); //undefined

// const numberOfHobbies = user.hobby.length;
// console.log(numberOfHobbies); // 4

// const lastHobby = user.hobby[numberOfHobbies - 1];
// console.log(lastHobby); // "gym"

// const userName = user.name;
// console.log(userName); // "Олександр"

// const userAge = user.age;
// console.log(userAge); // 30

// const userHobby = user.hobby;
// console.log(userHobby); // ["electronics", "programming", "sport", "gym"]

// console.log(user.profession); // undefined

// const userAddres = user.address;
// console.log(userAddres); // object address

// const userCountry = user.address.country;
// console.log(userCountry); // "Ukraine"

// const userCity = user.address.city;
// console.log(userCity); // "Київ"

// let user = {
//   name: "Alex",
//   age: 30,
//   hobby: ["electronics", "programming", "gym"],
// };

// for (let key in user) {
//   console.log(key); // На кожній ітерації виведе: name, age, hobby
//   console.log(user[key]); // На кожній ітерації виведе: "Alex", 30, ["electronics", "programming", "gym"]
// }

const car = {
  wheels: 4,
};

const myCar = Object.create(car);
myCar.model = "Audi";
myCar.color = "red";

const result = Object.entries(myCar);
console.log(result); // [['model', 'Audi'], ['color', 'red']]

// for (const key of keys) {
//   console.log(key);
//   console.log(myCar[key]);
// }

// console.log("Has own property model: ", myCar.hasOwnProperty("model")); //true
// console.log("Has own property wheels: ", myCar.hasOwnProperty("wheels")); //false

// const cars = {
//   audi: 3,
//   ford: 5,
//   bmw: 2,
//   toyota: 6,
// };

// const values = Object.values(cars); //[3, 5, 2, 6]

// let total = 0;

// for (let value of values) {
//   total += value;
// }

// console.log("total: ", total); // total: 16
