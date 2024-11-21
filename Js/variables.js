//var

//we can declare the same name variable.
// var x = 10;
// var x = 20;

// console.log(x);      //20


//var does not have any block scope.

// var x = 10;
// {
//     var x= 20;
// }
// console.log(x);      //20

// -------------------------------------------------------

//let
//let has block scope.

// let x = 10;
// {
//     let x = 20;
// }
// console.log(x);       //10

// let x;  //declare
// x = 10; //intialize
// console.log(x); //10

// let x = 10;
// x = x  + 5;
// console.log(x);      //15

//--------------------------------------------------------

//const
//we can not redeclare the same name variable.

// const x = 10;
// const x = 20;

// console.log(x);     //error

//we can not change the value of const variable.

// const x = 10;
// x = x+5;
// console.log(x);      //error

//Declaration and initilization must be done at same time.

// const x;
// x=10;
// console.log(x);      //error

//-------------------------------------------------------

// var x = 10;
// let x = 20;
// const x = 30;
// console.log(x);     //error

// let x = 10;         //global variable
// {
//     x = x + 5;
// }
// console.log(x);      //15

// {
//     let x = 10;      //local variable
// }
// x = x + 5;
// console.log(x);      //error
