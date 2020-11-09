//Var, Let, Const
//var nama="Ananta";
//var nama="Ferdinand";
// let nama="Ananta";
// let nama="Ferdinand";
// console.log(nama);

//Scope dalam JavaScript:
//1.Function Scope (VAR)
//2.Block Scope

// (function tes(){
// for (var i = 0; i < 10; i++){
//     console.log(i);
//    }
// } ) ();
// console.log(i);

{
let i;
for(let i = 0; i < 10; i++){
    console.log(i);
  }
}

//Template Literal
const person = {
    firstName:"Ananta",
    lastName:"Ferdinand",
    age:24,
};

console.log(
    "Hallo nama saya: " + 
     person.firstName + "" + person.lastName + 
    ", Umur saya adalah: " 
    + person.age + " tahun."
);

console.log(
    `Hallo nama saya ${person.firstName} ${person.lastName} Umur Saya adalah 24 tahun ${person.age}`
)
