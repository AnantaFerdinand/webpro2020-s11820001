/*Asynchronous & Synchronous Method: Callback Hell*/
// const second = () => {
//     const number = 20;
//     const alphabet = 'A';
//     const fish = 'Salmon';
//     setTimeout(()=>{
//         console.log('Asynchron 1');
//         console.log(number);
//         setTimeout(()=>{
//             console.log('Asynchron 2');
//             console.log(alphabet);
//             setTimeout(()=>{
//                 console.log('Asynchron 3');
//                 console.log(fish);
//             },2000,fish);
//         },2000,alphabet);
//     },2000,number);
// }
// const first = () => {
//     console.log('First');
//     second();
//     console.log('The end');
// }
// first();

/*Promise & Chaining*/
const getData = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const No = false;
            if (No){
                reject('Yes');
        }else{
            // resolve('No');
            resolve(20);
        }
    
    },2000);
 });
}
const getName = id =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`ID: ${id} Yes`);
        },2000)
    })
}
// getData()
// .then(id => getName(id))
// .then(Yes=>console.log(Yes))
// .catch(No=>console.log(No))

/*Async and Await*/
const getNameByID = async () => {
    let id, Yes;
    try{
        id = await getData();
        Yes = await getName(id);
        // console.log(Success);
 }catch (No){
     console.log('No');
  }
  return Yes;
}
getNameByID().then(result =>console.log(result));