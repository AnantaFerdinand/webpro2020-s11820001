//1.Conditional Statement (if, elseif, else)
let nilaiUjian = 91;
let nilaiUjian2 = 69;
let nilaiUjian3 = 75;
// for (let i = 1; i <= 3; i++) {
    if(nilaiUjian>80){
        console.log("Sangat Memuaskan");
}
else if(nilaiUjian>=60 && nilaiUjian <=80){
    console.log("Sangat Puas");
}
else{
    console.log("Coba Lagi");
}

//     console.log(i);
//   }

let Hour = 23;
// let Hour2 = 13;
if(Hour < 23){
    console.log("Good Night");
}
// else if(Hour < 13){
//     console.log("Good Day");
// }
else{
    console.log("Good Morning");
}

//2.Conditional Statement with Switch Case
let seragamPegawaiNegeri;
let hari = "Rabu";

switch (hari) {
  case "Senin":
  case "Selasa":
    seragamPegawaiNegeri = "baju dan celana panjang warna hijau";
    break;
  case "Rabu":
    seragamPegawaiNegeri = "baju dan celana panjang warna coklat";
  case "Kamis":
    seragamPegawaiNegeri = "baju batik dan celana panjang warna hitam";
    break;
  case "Jumat":
    seragamPegawaiNegeri = "baju olahraga";
    break;
  default: seragamPegawaiSwasta = "baju bebas";
}
console.log(seragamPegawaiNegeri); 

//3.For In Loop
const buku = {
    Judul: "Mawar Yang Hilang",
    Pengarang: "Johny Stewart",
    Tahun: "2011",
};
for(x in buku){
    console.log(x, ':', buku[x]);
}

//4.For Of Loop
const buku2 =["Si Buta Mencari Cinta",
              "Jony Kena Santet","Gundala"];
for(x of buku2){
    console.log(x);
}


