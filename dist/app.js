class Person {
    // Конструктор класу Person
    constructor(name) {
        this.name = name;
    }
    // Метод класу для виведення імені
    getName() {
        return this.name;
    }
}
// Створення нового об'єкта класу Person
let person = new Person("John");
// Виклик методу класу
console.log(person.getName()); // Виведе "John"
//# sourceMappingURL=app.js.map