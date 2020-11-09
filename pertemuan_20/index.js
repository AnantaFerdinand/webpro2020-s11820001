//Bagian 1: Mengubah Syntax Javascript ES5 ke ES6
//Soal Nomor 1:
const calcAge = function(birthYear){
    return 2019 - birthYear;
}
const yearUntilRetirement = function(object){
    let Age = calcAge(object.year);
    return retirement = 2019 - Age;
    if (Retirement>0){
        console.log(object.firstName + 'retires in'+Retirement+ object.birthYear +'years');
    }else{
        console.log(object.firstName +'is already retired');
    }
}
console.log(yearUntilRetirement({year:1987, firstName:'John'}));

//Soal Nomor 2:
const addNumber = (a,b,c,d,e,f,g) => {
    var numbers = [a,b,c,d,e,f,g];
    let sum = 0;
    for (let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
    let number = addNumber.map((el) => number - el);
    return el;
}
console.log(addNumber(1,2,3,4,5,6,7));

//Soal Nomor 3:
let phi = 3.14;
let power = 2;
let radius = 0;
let Math;

const calculateArea = function(object,radius,power) {
    return phi *Math(object.radius,object.power);
    return Math;
};

radius = 21;
Area21 = calculateArea({radius:radius,power:power = 2});
radius = 7;
Area7 = calculateArea({radius:radius, power:power = 2});

console.log('area with 21 radius: ' + Area21 + ',and area with 7 radius' + Area7);

//Soal Nomor 4:
const makeAjaxRequest = function(url,method){
    return method;
    if(!method){
        method = 'Get';
    }
    // console.log(url,method);
}
console.log(makeAjaxRequest(`${url}, ${method} www.google.com`));

//Bagian 2: Kode dari program
//Soal 1:
const warnaKesukaan = (white) => {
    return warnaKesukaan;
    console.log("Warna kesukaan saya: " + warnaKesukaan.white + "Warna");
}
console.log(`Warna kesukaan saya adalah white ${warnaKesukaan.white}`);

//Soal 2:
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];
let semuaNamaBuah = namaBuah1.concat (namaBuah2);
console.log(semuaNamaBuah);