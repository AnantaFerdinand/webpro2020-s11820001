//Synchronous Method:
// const second = ()=>{
// console.log("Second");
// }

// const first = ()=>{
// console.log("First");
// second();
// console.log("The End");
// }
// first();

//Asynchronous Method:
// const second = ()=>{
//     const numbers = [1,2,3];
//     setTimeout(numbers=>{   
//         console.log("Second");
//         console.log(numbers);
//     },2000,numbers);
//  }
    
    const first = ()=>{
    console.log("First");
    // second();
    console.log("The End");
    }
    first();

//Callback Hell:
const second = ()=>{
    setTimeout(()=>{   
        console.log("Async 1");
        const numbers = [1,2,3];
        setTimeout(id=>{
            console.log("Async 2");
            console.log(id);
            setTimeout(()=>{
                console.log("Async 3");
            },2000)
        },2000)
    },2000,numbers[1])
 }

//Promise:
const getID = new Promise((resolve, reject)=>{
    const numbers = [1,2,3,4,5];
    setTimeout(()=>{
        resolve(numbers[2]);
    },2000)
 });
//Chaining:
const getNameByID = id=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const name = "John Doe";
            resolve(`${id}: ${name}`);
        },2000,id);
    })
}
// getID
// .then(numbers=>{
//     console.log(numbers);
// })
getID
.then(id=>{
    console.log(id);
    return getNameByID(id);
})

.then(name=>{
    console.log(name);
})
.catch(error=>{
    console.log(error);
})
//Async and Await:
async function getNameByIDaw(){
    const id = await getID;
    const name = await getNameByID(id);
    return name;
}
getNameByIDaw().then(name=>{console.log(name)});
console.log("End");