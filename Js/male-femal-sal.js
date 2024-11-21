const sal = parseInt(prompt("Enter the sal:"));
const gender = prompt("Enter the gender:");

let m,f,ans;

if(gender == 'm') {
    if( sal <10000) {
        ans = sal * 0.2;
    } else {
        ans = 0;
    }
} else if(gender == 'f') {
    if(sal<10000) {
        ans = sal * 0.03;
    } else {
        ans = 0;        
    }
}




document.getElementById("sal").innerHTML = sal ;
document.getElementById("gen").innerHTML = gender ;
console.log("ans",ans);
document.getElementById("s1").innerHTML = ans ;
