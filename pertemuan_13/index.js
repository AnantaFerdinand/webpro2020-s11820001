// Rest and Spread Parameter  

//Rest Parameter:
const hitung = (a,b,c,d,e,f,g) => {
    const angka = {a,b,c,d,e,f,g};
    let total = 0;
    for(let i=0; i<7; i++){
        total = total + angka[i];
    }

    return a + b + c + d + e + f + g;
    return total;
};
console.log(hitung(1,2,3,4,5,6,7));


// const angka = (param1, param2, ...params)=>{
//     console.log(param1);
//     console.log(param2);
//     console.log(params);

//     let total = 0;
//     angka.forEach((el) => {
//         total = total + el;
//     });
//     return total;
// };

//Spread Operator:
const angka01 = [1,2,3,4,5];
const angka02 = [...angka01];
angka01[0] = 10;
console.log(angka01);
console.log(angka02);

/*Menggabungkan Array*/
const angka1 = [1,2,3,4,5];
const angka2 = [6,7,8,9,10];
const angka3 = [12,13];
const gabung5 = angka1.concat(angka2,angka3);
console.log(gabung5);

const gabung6 = [...angka1, ...angka2, 11, ...angka3];
console.log(gabung6);

let orang = {
    nama:"John",
    umur: 33,
};
// orang.pekerjaan = "Guru";
// orang.pendidikan = "S2";
orang = {...orang, pekerjaan: "Guru", pendidikan: "S2"};
console.log(orang);

const objek1 = {a:1, b:2};
const objek2 = {c:3, d:4};
const objekGabungan = {...objek1, ...objek2};

console.log(objekGabungan);