class Shape {
    // Звичайний метод з реалізацією
    printArea() {
        console.log("Площа фігури: " + this.calculateArea());
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // Реалізація абстрактного методу
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);
circle.printArea(); // Виведе "Площа фігури: 78.54"
