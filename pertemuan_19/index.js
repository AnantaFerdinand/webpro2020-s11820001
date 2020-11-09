//Class and Constructor:
// const Person = {
//     firstName: "Ananta",
//     lastName: "Ferdinand",
//     displayFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };
// Person.displayFullName();

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
    
}
// const person1 = new Person("Ananta", "Ferdinand");
// console.log(person1);
// person1.displayFullName();
// const person2 = new Person("John","Smith");
// person2.displayFullName();

//Inheritance:
class Student extends Person{
    constructor(firstName, lastName, NIM, Age){
        // this.firstName = firstName;
        // this.lastName = lastName;
        super(firstName, lastName);
        this.NIM = NIM;
        this.Age = Age;
    }
//Static Member:
   static sayHello(){
       console.log("Hello World");
   }   
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }
//Setter and Getter:
    set studentScore(score){
        this.score = score;
    }   

    get studentScore(){
        return this.score;
    }
}
    const john = new Student("John", "Smith", "1234567",28);
    john.displayFullName();
    john.displayNIM();
    Student.sayHello();
    john.studentScore = 90;
    console.log(john.studentScore);



