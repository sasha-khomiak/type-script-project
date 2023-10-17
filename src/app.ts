class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.radius); // Виведе 5

// Спроба змінити значення radius призведе до помилки
// circle.radius = 10; // Помилка: властивість "radius" тільки для читання
