// //Normal function this keyword.

// const obj1 = {
//     value: 42,
//     NormalFun: function(){
//         console.log(this.value);
//     }
// }
// obj1.NormalFun();

// //Arrow function this keyword.

// const obj2 = {
//     value: 42,  
//     ArrowFun: () => {
//         console.log(this.value);
//     }
// }
// obj2.NormalFun();

//---------------------------------------------------------

//Normal function has arguments object.
// function Student1() {
//     console.log(arguments[0],arguments[1]);
// }
// Student1(10,20);


// //Arror function has no arguments object.
// const Student2 = () => {
//     console.log(arguments[0]);
// }
// Student2(1,2,3);

//---------------------------------------------------------

// // Constructor function in Normal function.

// function Student() {
//     this.name = "John";
// }
// const obj1 = new Student(); 
//     console.log(obj1.name);

// // Constructor function in Arrow function.

// function Student() {
//     this.name = "John";
// }
// const obj2 = new Student = () => {
//     console.log(obj2.name);
// }; 

//---------------------------------------------------------

// // Normal function can be accessed before initalizaton.

// Obj1();

// function Obj1() {
//     console.log("Hello!!!");
// }

// // Arrow function can not be accessed before initalizaton.

// Obj2();

// const Obj2 = () => {
//     console.log("Hello!!!");
// }

//---------------------------------------------------------

//Hoisting.

//A variable can be used before it has been declared.

x = 10;

console.log(x);

var x;      //output:10


//A let or const can not be used before it has been declared.

x = 10;

console.log(x);

let x;      //output:Error