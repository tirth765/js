// let roll_no = [2,46,56,76,34];
// console.log(roll_no);

// let roll_no = new Array (2,46,56,76,34);
// console.log(roll_no);

// let name  = new Array ('tirth','harsh','preet');
// console.log(name);

// for(let i=0;i<roll_no.length;i++) {
//     console.log(roll_no[i]);
// }

// for(let i=0;i<roll_no.length;i++) {
//     console.log(roll_no[2]);
// }

// roll_no.forEach((v,i) => {
//     console.log(i,v);
// })

// roll_no.map((v,i) => {
//     console.log(i,v);
// })

// roll_no.map((v,i) => console.log(i,v))

//----------------------------------------------------------------

// function tirth() {
//     console.log("tirth");
// }

// // arrow function (ES6)
// const tirth = () => {
//     console.log("tirth");
// }

//------------------------------------------------------------------

// let roll_no = [2,46,56,76,34];
// console.log(roll_no);

// //Update
// roll_no[1] = 99;
// console.log(roll_no);

// //Add
// roll_no.push(100);               //add at last
// console.log(roll_no);

// roll_no.unshift(100);            //add at first
// console.log(roll_no);

// roll_no.splice(3 ,0 ,100 ,200 ,300);
// console.log(roll_no);            //add 100,200,300 from index 3

// //Remove
// roll_no.pop();
// console.log(roll_no);

// let ans=roll_no.shift();
// console.log(ans,roll_no);

// let ans=roll_no.splice(1 ,2);
// console.log(ans,roll_no);         //Remove 2 element from index 1

//------------------------------------------------------------------

let data1 = [12, 43, "harsh", 99, 98, "tirth", 56, 34];
let data2 = [200, 100, 400, 300];
  
// console.log(typeof data1);

// let  ans = Array.isArray(data1);        //Check array or not, return boolean
// console.log(ans);                       //true

// let ans = data1.concat(data2);          //Combine array
// // console.log(ans);                    //return array
// console.log(data1);
// console.log(data2);

// let ans = data1.some((v) => v === 12);  //value check
// console.log(ans);                       //return boolean

// let ans = data2.toString();             //convert array to string
// console.log(ans);                       //return string

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let ans = fruits.slice(2,4)
// console.log(ans);

// let ans = data1.includes(99);
// console.log(ans);

// let ans = data1.indexOf(99);
// console.log(ans);

// let ans = data1.lastIndexOf(99);
// console.log(ans);

// let ans = data2.every((v) => v>99);
// console.log(ans);

// let ans = data2.every((v) => v>100);
// console.log(ans);

// let data3 = ['tirth','harsh','maulik'];          //
// let ans = data3.sort();                          //
// console.log(ans);

// let ans = data2.sort((a,b)=>a-b);                //
// console.log(ans);                                //

// let ans = data2.sort((a,b)=>b-a);                //
// console.log(ans);                                //

