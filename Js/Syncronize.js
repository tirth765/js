// // Syncronize: Execute process one after another, in other.

// const firstprocess = () => {
//     console.log("I am first process");
// }

// const secondprocess = () => {
//     console.log("I am second process");
// }

// const thirdprocess = () => {
//     console.log("I am third process");
// }

// firstprocess();
// secondprocess();
// thirdprocess();

//---------------------------------------------------------------

// const firstprocess = () => {
//     console.log("I am first process");
// }

// const secondprocess = () => {
//     let d = new Date();
//     while (new Date() - d < 5000) {

//     }
//     console.log("I am second process");
// }

// const thirdprocess = () => {
//     console.log("I am third process");
// }

// firstprocess();
// secondprocess();
// thirdprocess();

//---------------------------------------------------------------

//Callback function.

// const add = (a, b, CalllBack) => {  //2
//     let res;
//     res = a+b;
//     CalllBack(res); //3
// }
// const display = (data)=> {  //4
//     console.log(data)
// }
// add(10, 20, display);   //1

//---------------------------------------------------------------

// CallBack function is called after working an some task.

// console.log("Program start...");

// const fatchdata = (CallBack) => {
//     setTimeout(() => {
//         let data = {id: 98, name: "Tirth", age: 18};
//         CallBack(data);
//     },3000);
// }

// const display = (data) => {
//     console.log(data);
// }

// fatchdata(display);
// console.log("Program end...");

//---------------------------------------------------------------

//Promises: Promises have two method for handlig the result of asynchoize operations.
//1. resolve()  //2. reject()  //3. finally()

// console.log("Program start...");

// const myPromises =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             let data = {id: 98, name: "Tirth", age: 18};
//             resolve(data);
//         } catch(error) {
//             reject(error);
//         }
//     },3000)

// })

// myPromises
// .then((d) => {
//     console.log(d);
//     })
//     .catch((error) => {
//         console.log(error);
//         })
//         .finally(() => {
//             console.log("Program runing...");
//             });

//             console.log("Program end...");

//---------------------------------------------------------------

// //CallBack Hell.

// const firstcall = (a, callback) => {
//   setTimeout(() => {
//     let ans = a + 20;
//     callback(ans);
//   }, 2000);
// };
// const secondcall = (a, callback) => {
//   setTimeout(() => {
//     let ans = a * 5;
//     callback(ans);
//   }, 2000);
// };
// const thiredcall = (a, callback) => {
//   setTimeout(() => {
//     let ans = a - 100;
//     callback(ans);
//   }, 2000);
// };
// firstcall(10, function (r1) {
//   console.log(r1);
//   secondcall(r1, function (r2) {
//     console.log(r2);
//     thiredcall(r2, function (r3) {
//       console.log(r3);
//     });
//   });
// });

//---------------------------------------------------------------

// //Promise.
// const firstcall = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let ans = a + 20;
//       resolve(ans);
//     }, 2000);
//   });
// };
// const secondcall = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let ans = a * 5;
//       resolve(ans);
//     }, 2000);
//   });
// };
// const thiredcall = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let ans = a - 100;
//       resolve(ans);
//     }, 2000);
//   });
// };
// firstcall(10)
// .then((r1) => {console.log(r1); return secondcall(r1)})

// .then((r2) => {console.log(r2); return thiredcall(r2)})

// .then((r3) => console.log(r3))

//---------------------------------------------------------------

console.log("Program start...");
const fatchdata = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
fatchdata();
console.log("Program end...");
    