// // інтерфейс 1
// interface Person {
//   name: string;
//   age: number;

//   information(): void;
// }

// // інтерфейс 2
// interface Feedback {
//   getName(): string;
// }

// // Клас
// class TeamWorker implements Person, Feedback {
//   constructor(
//     public name: string,
//     public age: number,
//     public surname?: string
//   ) {}

//   information(): void {
//     console.log("This is " + this.name + "! He is " + this.age + " years old.");
//   }

//   getName() {
//     return this.name;
//   }

//   setSurname(value: string) {
//     this.surname = value;
//   }
// }

// // обʼєкт класу
// let teamLead = new TeamWorker("Alex", 25);

// teamLead.information(); // This is Alex! He is 25 years old.
// console.log(teamLead.getName()); // "Alex"

// // let person: Person = {
// //   name: "John",
// //   age: 30,

// //   information() {
// //     console.log("This is " + this.name + "! He is " + this.age + " years old.");
// //   },
// // };

// // person.information();

interface Person {
  readonly name: string;
}

interface TeamWorker extends Person {
  readonly surName: string;

  showWorker();
}

const person: Person = {
  name: "Alex",
};
