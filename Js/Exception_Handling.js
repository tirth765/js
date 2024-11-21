let x = parseInt(prompt("Enter value of x: "));
let y = parseInt(prompt("Enter value of y: "));

let ans;

    if(y === 0) {
        throw new Error("Cannot divide by zero");
    }
    ans = x / y;
    console.log(ans);

let name = "amit"
console.log(name)

// try {
//     let ans;

//     if(y === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     ans = x / y;
//     console.log(ans);
    
// }
// catch(err) {
//     console.log(err);
// } finally {
//     console.log("Program ended");
// }