// Базовий клас (суперклас)
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Метод базового класу
    makeSound() {
        console.log("Some sound");
    }
}
// Підклас, який успадковує клас Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Виклик конструктора базового класу за допомогою super()
        super(name);
        this.breed = breed;
    }
    // Перевизначений метод базового класу
    makeSound() {
        console.log("Bark!");
    }
    // Новий метод підкласу
    wagTail() {
        console.log("Tail is wagging");
    }
}
// Створення об'єкта підкласу
let myDog = new Dog("Buddy", "Golden Retriever");
// Виклик методів базового та підкласів
console.log(myDog.name); // Виведе "Buddy"
console.log(myDog.breed); // Виведе "Golden Retriever"
myDog.makeSound(); // Виведе "Bark!"
myDog.wagTail(); // Виведе "Tail is wagging"
