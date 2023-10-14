class Car {
  private speed: number; // Приватна властивість
  public brand: string; // Публічна властивість
  protected model: string; // Захищена властивість

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  // Публічний метод для отримання швидкості
  getSpeed(): number {
    return this.speed;
  }

  // Приватний метод для встановлення швидкості
  private setSpeed(speed: number): void {
    this.speed = speed;
  }

  // Захищений метод для відображення інформації про автомобіль
  protected displayInfo(): string {
    return `Це ${this.brand} ${this.model}. Швидкість: ${this.speed} км/год.`;
  }
}

// Створення екземляру
let myCar = new Car("Toyota", "Corolla");

console.log("myCar: ", myCar);

// Спроба доступу до властивостей
// console.log("direct get speed: ", myCar.speed);
console.log("direct get brand: ", myCar.brand);
// console.log("direct get model: ", myCar.model);

console.log("speed from public method: ", myCar.getSpeed());
// myCar.setSpeed(50); // Помилка: метод приватний і не може бути викликаний за межами класу
// myCar.displayInfo(); // Помилка: метод захищений і не може бути викликаний за межами класу
