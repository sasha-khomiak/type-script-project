class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // Setter для встановлення значення імені
    set firstName(value) {
        this.name = value;
        console.log("Name is added/changed");
    }
    // Setter для встановлення значення прізвища
    set secondName(value) {
        this.surname = value;
        console.log("Surname is added/changed");
    }
    // Getter для отримання значення інформації про особу
    get information() {
        return this.name + " " + this.surname;
    }
}
// Створення об'єкта класу Person
let person = new Person("Isaak", "Newton");
// Використання Getter для отримання імені особи
console.log(person.information); // Виведе Isaak Newton
// Використання Setter для встановлення нового значення імені і прізвища
person.firstName = "Oleksandr";
person.secondName = "Khomiak";
// Використання Getter для отримання оновленого імені особи
console.log(person.information); // Виведе Oleksandr Khomiak
