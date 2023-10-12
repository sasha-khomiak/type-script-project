class Car {
    // Конструктор класу
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Метод класу (функція)
    displayInfo() {
        return `Це ${this.year} ${this.brand} ${this.model}.`;
    }
}
// Створення об'єкта класу Car
let myCar1 = new Car("Toyota", "Corolla", 2021);
let myCar2 = new Car("Ford", "EDGE", 2019);
// Виклик методу об'єкта
console.log(myCar1.displayInfo()); // Виведе "Це 2021 Toyota Corolla."
console.log(myCar2.displayInfo()); // Виведе "Це 2019 Ford EDGE."
console.log("myCar1", myCar1);
//# sourceMappingURL=app.js.map