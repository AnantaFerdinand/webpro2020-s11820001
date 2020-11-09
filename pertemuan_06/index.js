// Mendeklarasikan Object:

//1.Object Literals
//const mahasiswa1 = ["John", "Doe", 31, true];
const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
         jalan: "Jln. Arnold Mononutu",
         kecamatan: "Airmadidi",
         kabupaten: "Minahasa Utara",
},
IPSemester: [3.05, 3.25, 3.0, 3.4],
get IPSemester(){
    return this._IPSemester;
},
set IPSemester(value) {
    this._IPSemester = value;
},
hitungIPK: function(){
    let total = 0;
this.IPSemester.forEach(function(el){
    total = total + el;
});
this.IPKumulatif = total / 4;
     },
 };
//mhs1 = {};
delete mhs1.namaBelakang;
console.log(mhs1);

//2.Kata Kunci New
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";
// console.log(mhs2);

//Mengakses Properti Objek:
//1.Dot Notation
//console.log(mhs1.umur);

//2.Bracket Notation
//console.log(mhs1["namaBelakang"]);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();
//console.log(mhs1);

//Array Object
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },

    {
        nim: "002",
        namaDepan: "Ananta",
        namaBelakang: "Ferdinand",
    },

    {
        nim: "003",
        namaDepan: "John",
        namaBelakang: "Doe",
    },

];
mahasiswa.forEach(function(el){
    console.log(el);
});
