// Клас фрукту
class Fruit {
    constructor(name) {
        this.name = name;
    }
    // Метод для виведення імені фрукту
    showName() {
        console.log(`Це фрукт: ${this.name}`);
    }
}
// Клас квітки
class Flower {
    constructor(name) {
        this.name = name;
    }
    // Метод для виведення імені квітки
    showName() {
        console.log(`Це квітка: ${this.name}`);
    }
}
// Створення об'єктів класів Fruit і Flower
const apple = new Fruit("Яблуко");
const rose = new Flower("Троянда");
// Приклад поліморфізму
apple.showName();
rose.showName();
//# sourceMappingURL=app.js.map