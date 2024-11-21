// function counter() {
//     let count = 0;      //local scope.
//     count++;            //local variable start with 0 for any call.
//     console.log(count);
    
// }
// counter();       //1
// counter();       //1

//----------------------------------------------------------------------------

// let count = 0;      //global scope.

// function counter() {
   
//     count++;            
//     console.log(count);
    
// }
// count = 10      //global variable can be change by anyone.

// counter();       //11
// counter();       //12
// counter();       //13

//----------------------------------------------------------------------------

// Clousere : Clousere means that inner function always has access to the variables and paraneters of it's outer function, even after the outer function has returned.

// We can make global variables local using Clousere.

//outer function.
// function PearsnalInfo(name) {

//     let age = 18;

//     //inner function.
//     return function private() {
//         console.log(name);
//         console.log(age);
        
//     }
    
// }
// let x = PearsnalInfo("Tirth");      //outer function.

// console.log(x);     //function.

// x();       //inner function

//----------------------------------------------------------------------------

// function counter() {
//     let count = 0;
//     return function coun() {
//         count++;
//         console.log(count);
//     }
// }

// count = 10;     //Not working because of count is local variable.

// let x = counter();
// x();
// x();
// x();
// x();

// let y = counter();
// y();
// y();
// y();

//---------------------------------------------------------------------------

// function getUnion(...arr1, ...arr2) {
//     return Array.from(new Set([...arr1, ...arr2]));
// } 

// let arr1 = [10,20,30,40,50];
// let arr2 = [40,50,60,70,80];

// let ans = getUnion(arr1,arr2)

// console.log(ans);                                                           

//---------------------------------------------------------------------------

// let arr1 = [10,20,30,40,50];
// let arr2 = [40,50,60,70,80];

// let ans = arr1.filter((v) => arr2.includes);

// function union() {
//     return 
// }
// console.log(ans);

//---------------------------------------------------------------------------

// // Display all zero in last.
// let arr = [2,4,0,45,0,75,0,54,0,57,23,0];

// let ans1 = arr.filter((v) => v === 0);
// let ans2 = arr.filter((v) => v !== 0);

// let ans3 = ans2.concat(ans1);
// console.log(ans3);

//---------------------------------------------------------------------------