class Car {
  // Властивості класу (змінні)
  brand: string;
  model: string;
  year: number;

  // Конструктор класу
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Метод класу (функція)
  displayInfo(): string {
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
