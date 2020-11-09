//Arrow Function
// const calcAge = function(year){
//     return 2020 - year;
//  const calcAge = (year) =>{
//         return 2020 - year;
// };
// console.log(calcAge(1991));

//Multiple Argument:
// const calcAge = (birthYear, currentYear) => {
//     return currentYear - birthYear;
// };
// console.log(calcAge(1991,2020));

//No Argument:
// const calcAge = () => {
// return 2020 - 1992;
// const calcAge = () => 2020 - 1992;
// // };
// console.log(calcAge());

// const years =[1990,1992,2001,2005];
// const calcAge5 = years.map(function(el){
// return 2020 - el;
// });
// console.log(calcAge5);

// const calcAge6 = years.map((el) => 2020 - el);
// console.log(calcAge6);

//Default Parameter:
const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear; 
calcAge("currentYear - birthYear");
console.log(calcAge(1991,2021));
