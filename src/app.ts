class Person {
  name: string;

  // Конструктор класу Person
  constructor(name: string) {
    this.name = name;
  }

  // Метод класу для виведення імені
  getName(): string {
    return this.name;
  }
}

// Створення нового об'єкта класу Person
let person = new Person("John");

// Виклик методу класу
console.log(person.getName()); // Виведе "John"
