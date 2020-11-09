// //Fungsi Parameter Arrow
// const operasiPenjumlahan = (bilangan1, bilangan2) => {

// const hasil = bilangan1 + bilangan2;

// return hasil;
// };

// console.log(operasiPenjumlahan(8,7));

// //Fungsi non Parameter Arrow (tidak ada parameter)
// const namaJenisPisang = () => {
// const Pisang = ["Pisang Susu", "Pisang Sepatu", "Pisang Raja"];
// return Pisang [Math.floor(Math.random()*(Pisang.length))];
// };
// console.log(namaJenisPisang());

// //Implicit Return Value
// // function greeting(Ananta){
// //     return 'Hi ${Ananta}';
// // };
// // console.log(greeting('Ananta'));

// const greeting = (Ananta) => 'Hi ${Ananta}';
// console.log(greeting('Ananta'));

//exercise:
function yearUntilRetirement(year, firstName) {
    const age = (firstName, age, year)=>({firstName:firstName, age:age, year:year});
    const retirement = 65 - age;
    if(retirement > 0) {
       return firstName + "retired in" + retirement + "years" + age; 
    }else{
     return firstName + "is already retired.";
     //console.log (retirement("Ananta","is already retired"));
   }
}
console.log (yearUntilRetirement (28, "Ananta"));
