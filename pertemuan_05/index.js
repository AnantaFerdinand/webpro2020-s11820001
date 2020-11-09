//Deklarasi Array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(angka);

// let buah = ["Mangga", "Apel", "Jeruk"];
// console.log(buah);

// let arr = ["text", 1, true];
// console.log(arr);
// let myFunc = function (){
//     return "Hello Array";
// };

// let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4]);

// console.log(typeof arr2);
// console.log(arr2.length);

// //Deklarasi Array memakai kata kunci new
// let buah2 = new Array("Salak", "Jambu", "Melon");
// console.log(buah2);

//Manipulasi Array
// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";
// console.log(mhs);

// //Mengubah isi array
// mhs[1] = "Donny";
// console.log(mhs);

// //Menghapus Isi array
// mhs[2] = undefined;
// console.log(mhs);

//Menampilkan Isi Array
// let mhs = ["John", "Bob", "Jane", "Peter"];
// for(let i = 0;i < 4; i++){
//     console.log("Mahasiswa ke-" + (i+1) + "adalah " + mhs);
// }

//Method Dalam Array
//1.Length and 2.ToString
//let mhs = ["John", "Bob", "Jane", "Peter"];
// console.log(mhs.toString());

//3.Join
// console.log(mhs.join("-"));

//4.Push, Pop, Unshift, Shift
// mhs.push("Merry");
// mhs.push("Ananta");
// console.log(mhs.join("-"));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join("-"));
// mhs.unshift("Ananta");
// mhs.unshift("Merry");
// console.log(mhs.join("-"));
// mhs.shift();
// mhs.shift();
// console.log(mhs.join("-"));

//5.Concat
// let buah = ["Mangga", "Apel", "Jeruk"];
// let sayur = ["Kangkung", "Bayam", "Wortel"];
// let makanan = sayur.concat(buah);
// console.log(makanan);

//6.Splice, Slice
// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join("-"));
// let buah2 = buah.slice(0,3);
// console.log(buah2.join("-"));

//7.ForEach, Map
// for(let i = 0;i < 4; i++){
//     console.log("Mahasiswa ke-" + (i+1) + "adalah " + mhs);
// }
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let tampilAngka = function(el){
//     return el;
// };
// console.log(angka.forEach(tampilAngka));
// let angka2 = angka.map(function(el){
//     return el;
// });
// console.log(angka2);

//8.Sort
// let angka = [1, 100, 2, 20, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();
// console.log(mhs);
// angka.sort(function(a, b){
// return a-b;
// return b-a;
// });
// console.log(angka);

//9.Filter
let angka = [1, 100, 2, 20, 5, 3, 7, 8];
let angka2 = angka.filter(function(el){
    return el > 5;
});
console.log(angka2);