abstract class Shape {
  abstract calculateArea(): number; // Абстрактний метод без реалізації

  // Звичайний метод з реалізацією
  printArea(): void {
    console.log("Площа фігури: " + this.calculateArea());
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Реалізація абстрактного методу
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
circle.printArea(); // Виведе "Площа фігури: 78.54"
