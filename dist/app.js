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

// const car = {
//   wheels: 4,
// };

// const myCar = Object.create(car);
// myCar.model = "Audi";
// myCar.color = "red";

// const result = Object.entries(myCar);
// console.log(result); // [['model', 'Audi'], ['color', 'red']]

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

// Створення масиву об'єктів
// const usersArray = [
//   { name: "John", age: 30 },
//   { name: "Anna", age: 25 },
//   { name: "Mike", age: 35 },
// ];

// let total = 0;

// for (const item of usersArray) {
//   total += item.age;
// }

// let middleAge = total / usersArray.length;

// console.log("middleAge: ", middleAge); //30

// // Ітерація через масив об'єктів за допомогою циклу for...of
// for (let item of usersArray) {
//   console.log(`${item.name} - ${item.age} років`);
// }

// let array1 = [1, 2, 3];
// let array2 = [...array1, 4, 5, 6];

// console.log(array2); // Виведе: [1, 2, 3, 4, 5, 6]

// let object1 = { a: 1, b: 2 };
// let object2 = { c: 3, d: 4 };
// let object3 = { a: 5, c: 6 };

// let object4 = { ...object1, ...object2, ...object3 };
// console.log(object4); // Виведе: {a: 5, b: 2, c: 6, d: 4}

// let object5 = { ...object3, ...object2, ...object1 };
// console.log(object5); // Виведе: {a: 1, b: 2, c: 3, d: 4}

// function summ(a, b, c) {
//   return a + b + c;
// }

// let numbers = [1, 2, 3];
// let result = summ(...numbers);

// console.log(result); // Виведе: 6

// function myFunc(a, b, ...elseArgs) {
//   console.log(a); // Виведе: 1
//   console.log(b); // Виведе: 2
//   console.log(elseArgs); // Виведе: [3, 4, 5]
// }

// myFunc(1, 2, 3, 4, 5);

// const users = [
//   { name: "Олександр", surname: "Хомяк" },
//   { name: "Тарас", surname: "Шевченко" },
//   { name: "Леся", surname: "Українка" },
// ];

// for (const { name, surname } of users) {
//   console.log(name);
//   console.log(surname);
// }

// const user = {
//   name: "Олександр",
//   surname: "Хомяк",
// };

// function myFunc({ name, surname }) {
//   console.log(`${name} ${surname}`);
// }

// myFunc(user); // Олександр Хомяк

// newFunction(); //["Mathew", "Michael", "Oliver"];

// function newFunction() {
//   const winners = ["Maria", "Alex", "Helga", "Mathew", "Michael", "Oliver"];

//   const [, , , ...args] = winners;

//   console.log(args);
// }

// function myFunc({ name, surname, age }) {
//   console.log(`${name} ${surname} is ${age} old!`);
// }

// myFunc({
//   name: "Олександр",
//   surname: "Хомяк",
//   age: 30,
// });

// function myFunc() {
//   return "Hello";
// }

// console.log(myFunc());

// console.log(myFunc);

// // 1 greeting callback function
// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// // 2 goodbye callback function
// function goodbye(name) {
//   console.log(`Good Bye, ${name}!`);
// }

// // Higher order function
// function myFunc(callback, name) {
//   callback(name);
// }

// // Виклик функції вищого порядку і передача колбек-функції і рядка
// myFunc(greeting, "Sashko"); // Hello, Sashko!
// myFunc(goodbye, "Sashko"); // Good Bye, Sashko!

// // greeting callback function
// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Higher order function
// function myFunc(callback, name) {
//   callback(name);
// }

// // Виклик функції вищого порядку і передача інлайн колбек-функції і рядка
// myFunc(function (name) {
//   console.log(`Hello, ${name}!`);
// }, "Sashko"); // Hello, Sashko!

// // Колбек дозволу доступу
// function approve(name) {
//   console.log(`Вітаю! Вхід для ${name} дозволено!`);
// }

// // Колбек заборони доступу
// function reject(name) {
//   console.log(`На жаль! Вхід для ${name} заборонено!`);
// }

// // Функція вищого порядку, приймає рядок імені і дві колбек-функції
// // Перша надаватиме доступ, а друга заборонятиме доступ
// function myFunc(name, good, bad) {
//   // імітація перевірки доступу користувача до сервісів
//   let isAllowed = Math.random() >= 0.5;

//   // Якщо дозволено доступ, то використовуємо першу колбек функцію
//   if (isAllowed) {
//     good(name);
//     return;
//   }

//   // Якщо заборонено доступ, то використовуємо другу колбек функцію
//   bad(name);
// }

// // Виклик функції вищого порядку і передача рядка і двох колбек-функцій
// myFunc("Sashko", approve, reject); // рещультат задежить від того, що згенерується в isAllowed

// // callback greeting function
// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// //  Higher order function
// function multiGreeting(name, callback, number) {
//   for (let i = 0; i < number; i += 1) {
//     callback(name);
//   }
// }

// multiGreeting("Alex", greeting, 6);

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (element, index) {
//   console.log(`Елемент ${element} має індекс ${index}`);
// });

// // classic function
// function classicLove(name1, name2) {
//   console.log(`${name1} + ${name2} = Love`);
// }

// classicLove("Alex", "Jenifer");

// // arrow function
// const arrowLove = (name1, name2) => {
//   console.log(`${name1} + ${name2} = Love`);
// };

// arrowLove("Mathew", "Helga");

// const colors = (...args) => {
//   console.log(args);
// };

// colors("red", "blue", "green", "orange"); // ['red', 'blue', 'green', 'orange']

// // Звичайна функція-колбек
// let array1 = [1, 2, 3, 4, 5];

// array1.forEach(function (el) {
//   console.log(el);
// });

// Стрілкова функція-колбек

// const array = [1, 2, 3, 4, 5];

// const logMsg = (el) => {
//   console.log(el);
// };

// array.forEach(logMsg);

// const array = [1, 2, 3, 4, 5];

// array.forEach((el, i) => {
//   console.log(`Element with index ${i} is ${el}`);
// });

// function myFunc(arr) {
//   const numberElements = arr.length;
//   for (let i = 0; i < numberElements; i += 1) {
//     console.log(`Element with index ${i} is ${arr[i]}`);
//   }
// }

// myFunc(array);

// const array = [1, 2, 3, 4, 5];
// console.log(array); // [1, 2, 3, 4, 5]

// const multiplication = (arr, value) => {
//   let tempArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     tempArr.push(arr[i] * value);
//   }
//   return tempArr;
// };

// const newArray = multiplication(array, 2);
// console.log(array); // [1, 2, 3, 4, 5]
// console.log(newArray); // [2, 4, 6, 8, 10]

// const array1 = [1, 2, 3, 4, 5];
// console.log(array1); // [1, 2, 3, 4, 5]

// const array2 = array1.map((item) => item * 2);

// console.log(array1); // [1, 2, 3, 4, 5]
// console.log(array2); // [2, 4, 6, 8, 10]

// const colors = ["Red", "Blue", "Yellow", "Orange"];
// console.log(colors); // ["Red", "Blue", "Yellow", "Orange"]

// const upperCaseColors = colors.map((el) => el.toUpperCase());

// console.log(colors); // ["Red", "Blue", "Yellow", "Orange"]
// console.log(upperCaseColors); // ['RED', 'BLUE', 'YELLOW', 'ORANGE']

// const users = [
//   { name: "Taras", surname: "Shevchenko" },
//   { name: "Lesia", surname: "Ukrainka" },
//   { name: "Ivan", surname: "Franko" },
// ];

// console.log(users); // object

// const usersSurnames = users.map((el) => el.surname);
// console.log(usersSurnames); // object

// const users = [
//   { name: "Alex", languages: ["ua", "en", "es"] },
//   { name: "Mathew", languages: ["ua", "fr", "jp"] },
//   { name: "Angelina", languages: ["fr", "en", "de", "it"] },
// ];

// const usersLanguages = users.flatMap((el) => el.languages);

// console.log(usersLanguages);
// // [['ua', 'en', 'es'], ['ua', 'fr', 'jp'], ['fr', 'en', 'de', 'it']]

// const numbers = [-100, 50, 1000, 324, -43, 5, 865];
// console.log(numbers); // [-100, 50, 1000, 324, -43, 5, 865];

// // фільтруємо додатні числа
// const positiveNumbers = numbers.filter((el) => el > 0);
// console.log(positiveNumbers); // [50, 1000, 324, 5, 865]

// // фільтруємо відʼємні числа
// const negativeNumbers = numbers.filter((el) => el < 0);
// console.log(negativeNumbers); // [-100, -43]

// // вихідний масив не змінився
// console.log(numbers); // [-100, 50, 1000, 324, -43, 5, 865];

// const users = [
//   { name: "Alex", languages: ["ua", "en", "es"] },
//   { name: "Mathew", languages: ["ua", "fr", "jp"] },
//   { name: "Angelina", languages: ["fr", "en", "de", "it"] },
// ];

// const usersLanguages = users.flatMap((el) => el.languages);

// console.log(usersLanguages);
// // ['ua', 'en', 'es', 'ua', 'fr', 'jp', 'fr', 'en', 'de', 'it']

// const filteredUsersLanguages = usersLanguages.filter(
//   (element, index, array) => array.indexOf(element) === index
// );

// console.log(filteredUsersLanguages); //['ua', 'en', 'es', 'fr', 'jp', 'de', 'it']

// const people = [
//   { name: "Alex", age: 18 },
//   { name: "Max", age: 67 },
//   { name: "Helga", age: 14 },
//   { name: "Mathew", age: 36 },
//   { name: "Angelina", age: 59 },
//   { name: "Pablo", age: 7 },
//   { name: "Paolina", age: 61 },
// ];

// const underage = people.filter((person) => person.age < 18);
// console.log(underage);
// // [{ name: "Helga", age: 14 }, { name: "Pablo", age: 7 }]

// const middleage = people.filter(
//   (person) => person.age >= 18 && person.age < 60
// );
// console.log(middleage);
// // [{ name: "Alex", age: 18 }, { name: "Mathew", age: 36 }, { name: "Angelina", age: 59 }]

// const pensioner = people.filter((person) => person.age >= 60);
// console.log(pensioner);
// // [{ name: "Max", age: 67 }, { name: "Paolina", age: 61 }]

// const people = [
//   { name: "Fritz", nationality: "German" },
//   { name: "Marta", nationality: "Pole" },
//   { name: "Jaque", nationality: "French" },
//   { name: "Petro", nationality: "Ukrainian" },
//   { name: "Harue", nationality: "Japanese" },
// ];

// const ukr = people.findIndex((el) => el.nationality === "Ukrainian");
// console.log(ukr); // 3

// const pl = people.findIndex((el) => el.nationality === "Pole");
// console.log(pl); // 1

// const ind = people.findIndex((el) => el.nationality === "Indian");
// console.log(ind); // -1

// const numbers = [1, 2, 3, 4, 5];

// // Перевірка чи є відʼємні числа
// const negativeNumbers = numbers.some((el) => el < 0);
// console.log(negativeNumbers); //false

// // Перевірка чи є хоча б одне парне число
// const evenNumbers = numbers.some((el) => el % 2 === 0);
// console.log(evenNumbers); //true

// const users = [
//   { name: "Alex", age: 14 },
//   { name: "Max", age: 30 },
//   { name: "Andrew", age: 64 },
// ];

// // Перевірка чи всі дорослі
// const alladults = users.every((el) => el.age >= 18);
// console.log(alladults); // false

// // Перевірка чи є діти
// const areChildren = users.some((el) => el.age < 18);
// console.log(areChildren); // true

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acum, el) => {
//   return acum + el;
// }, 0);

// console.log(numbers); //[1, 2, 3, 4, 5];
// console.log(summ); // 15

// const people = [
//   { name: "Alex", age: 18 },
//   { name: "Max", age: 67 },
//   { name: "Helga", age: 14 },
//   { name: "Mathew", age: 36 },
//   { name: "Angelina", age: 59 },
//   { name: "Pablo", age: 7 },
//   { name: "Paolina", age: 61 },
// ];

// // Визначаємо загальну кількість років на всіх
// const totalAge = people.reduce((accum, el) => {
//   return accum + el.age;
// }, 0);

// // Визначаємо середньоарифметичний вік користувачів
// const averageAge = totalAge / people.length;
// console.log(averageAge); //37.42857142857143

// const users = [
//   { name: "Alex", languages: ["ua", "en", "es"] },
//   { name: "Mathew", languages: ["ua", "fr", "jp"] },
//   { name: "Angelina", languages: ["fr", "en", "de", "it"] },
// ];

// const usersLanguages = users.reduce((accum, user) => {
//   accum.push(...user.languages);
//   return accum;
// }, []);

// console.log(usersLanguages);
// // ['ua', 'en', 'es', 'ua', 'fr', 'jp', 'fr', 'en', 'de', 'it']

// const numbers = [3, 7, 1, 9, 6, 10, 23, 70];
// console.log("Вихідний масив: ", numbers);
// //  [3, 7, 1, 9, 6, 10, 23, 70]

// numbers.sort();

// console.log("Вихідний масив після сортування:", numbers);
// // [1, 10, 23, 3, 6, 7, 70, 9]

// const people = ["Max", "Alex", "Helga", "Angelina", "Pablo"];
// console.log("Вихідний масив: ", people);
// // ['Max', 'Alex', 'Helga', 'Angelina', 'Pablo']

// people.sort();

// console.log("Вихідний масив після сортування:", people);
// // ['Alex', 'Angelina', 'Helga', 'Max', 'Pablo']

// const letters = ["b", "C", "d", "c", "A", "B", "D", "a"];
// console.log("Вихідний масив: ", letters);
// // ["b", "C", "d", "c", "A", "B", "D", "a"]

// const sortedLetters = [...letters].sort();

// console.log("Вихідний масив після сортування:", letters);
// // ["b", "C", "d", "c", "A", "B", "D", "a"]

// console.log("Новий відсортований масив:", sortedLetters);
// // ['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd']

// const numbers = [3, 7, 1, 9, 6, 10, 23, 70];
// console.log("Вихідний масив: ", numbers);
// //  [3, 7, 1, 9, 6, 10, 23, 70]

// numbers.sort((a, b) => b - a);

// console.log("Вихідний масив після сортування:", numbers);
// // [1, 10, 23, 3, 6, 7, 70, 9]

// const letters = ["b", "C", "d", "c", "A", "B", "D", "a"];
// console.log("Вихідний масив: ", letters);
// // ["b", "C", "d", "c", "A", "B", "D", "a"]

// letters.sort((a, b) => a.localeCompare(b));

// console.log("Вихідний масив після сортування:", letters);
// // ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D']

// const people = ["Max", "Alex", "Helga", "Angelina", "Pablo"];
// console.log("Вихідний масив: ", people);
// // ['Max', 'Alex', 'Helga', 'Angelina', 'Pablo']

// const alphabetSort = [...people].sort((a, b) => a.localeCompare(b));
// const reverseSort = [...people].sort((a, b) => b.localeCompare(a));

// console.log("Вихідний масив після сортування:", people);
// // ['Max', 'Alex', 'Helga', 'Angelina', 'Pablo']

// console.log("Алфавітне сортування:", alphabetSort);
// // ['Alex', 'Angelina', 'Helga', 'Max', 'Pablo']

// console.log("Реверсне сортування:", reverseSort);
// // ['Pablo', 'Max', 'Helga', 'Angelina', 'Alex']

// const people = [
//   { name: "Alex", age: 18 },
//   { name: "Max", age: 67 },
//   { name: "Helga", age: 14 },
//   { name: "Mathew", age: 36 },
//   { name: "Angelina", age: 59 },
//   { name: "Pablo", age: 7 },
//   { name: "Paolina", age: 61 },
// ];
// console.log(people); // вихідний масив

// const olderPeople = [...people].sort((a, b) => a.age - b.age);
// console.log(olderPeople); // від молодших до старших

// const youngerPeople = [...people].sort((a, b) => b.age - a.age);
// console.log(youngerPeople); // від старших до молодших

// const alphabetPeople = [...people].sort((a, b) => a.name.localeCompare(b.name));
// console.log(alphabetPeople); // за алфавітом

// const people = [
//   {
//     name: "Alex",
//     age: 18,
//     hobby: ["electronics", "programming", "sport", "gym"],
//   },
//   {
//     name: "Max",
//     age: 67,
//     hobby: ["reading", "cinema"],
//   },
//   {
//     name: "Helga",
//     age: 14,
//     hobby: ["sport", "gym", "dancing", "singing"],
//   },
//   {
//     name: "Mathew",
//     age: 36,
//     hobby: ["singing", "sport", "swimming"],
//   },
// ];

// const youngPeople = people.filter((el) => el.age < 20);

// const hobbies = youngPeople.flatMap((el) => el.hobby);

// const unicHobbies = hobbies.filter((el, id, arr) => arr.indexOf(el) === id);

// const sortedUnicHobbies = [...unicHobbies].sort((a, b) => a.localeCompare(b));

// console.log("people: ", people); // All users

// console.log("youngPeople: ", youngPeople); //Users younger than 20yo

// console.log("hobbies: ", hobbies);
// // ['electronics', 'programming', 'sport', 'gym', 'sport', 'gym', 'dancing', 'singing']

// console.log("unicHobbies: ", unicHobbies);
// // ['electronics', 'programming', 'sport', 'gym', 'dancing', 'singing']

// console.log("sortedUnicHobbies: ", sortedUnicHobbies);
// // ["dancing", "electronics", "gym", "programming", "singing", "sport"];

// // const sortedUnicHobbies = [...people]
// //   .filter((el) => el.age < 20)
// //   .flatMap((el) => el.hobby)
// //   .filter((el, id, arr) => arr.indexOf(el) === id)
// //   .sort((a, b) => a.localeCompare(b));

// // console.log("sortedUnicHobbies: ", sortedUnicHobbies);
// // // ["dancing", "electronics", "gym", "programming", "singing", "sport"];
