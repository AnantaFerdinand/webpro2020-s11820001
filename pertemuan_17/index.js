/*Asynchronous and Synchronous Method*/
/*Callback Hell*/ 
// const second = () => {
//     const num = 10;
//     setTimeout(()=> {
//         console.log('Async 1');
//         console.log(num);
//         setTimeout(()=>{
//             console.log('Async 2');
//             setTimeout(()=>{
//                 console.log('Async 3');
//             },2000)
//         },2000)
//     }, 2000,num)
// }
// const first = () => {
//     console.log('First');
//     second();
//     console.log('The end');
// }
// first();

/*Promise and Chaining Statement*/

const getData = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const Error = false;
            if (Error){
                reject('Success!');
        }else{
            // resolve('Error!');
            resolve(10);
        }
    
    },2000);
 });
}

const getName = id =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`ID: ${id} Success`);
        },2000)
    })
}
// getData()
// .then(id => getName(id))
// .then(Success=>console.log(Success))
// .catch(Error=>console.log(Error))

/*Async and Await*/
const getNameByID = async () => {
    let id, Success;
    try{
        id = await getData();
        Success = await getName(id);
        // console.log(Success);
 }catch (Error){
     console.log('Error');
  }
  return Success;
}
// const result = getNameByID().then(()=>console.log(result));
getNameByID().then(result =>console.log(result));

// resolve();
// getData.then(()=>{console.log('Success')});
// getData()
// .then((Success)=>{console.log(Success)})
// .catch((Error)=>{console.log(Error)})
