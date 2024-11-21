const sal = parseInt(prompt("Enter the sal:"));

let t1,t2,t3,t4,t5,t6;

if(sal >=0 && sal<=300000) {
    t1 = 0;
    t2 = 0;
    t3 = 0;
    t4 = 0;
    t5 = 0;
    t6 = 0;
} else if(sal >=300000 && sal<=600000) {
    t1 = 0;
    t2 = (sal-300000)*0.05;
} else if(sal >=600000 && sal<=900000) {
    t1 = 0;
    t2 = 300000*0.05;
    t3 = (sal-600000)*0.1;
} else if(sal >=900000 && sal<=1200000) {
    t1 = 0;
    t2 = 300000*0.05;
    t3 = 300000*0.1;
    t4 = (sal-900000)*0.15;
} else if(sal >=1200000 && sal<=1500000) {
    t1 = 0; 
    t2 = 300000*0.05;
    t3 = 300000*0.1;
    t4 = 300000*0.15;
    t5 = (sal-1200000)*0.2; 
}  else if(sal >=1500000) {
    t1 = 0;
    t2 = 300000*0.05;
    t3 = 300000*0.1;
    t4 = 300000*0.15;
    t5 = 300000*0.2;
    t6 = (sal-1500000)*0.3;
} 

// sum = ;

const sum = t1+t2+t3+t4+t5+t6;

console.log("t1",t1);
console.log("t2",t2);
console.log("t3",t3);
console.log("t4",t4);
console.log("t5",t5);
console.log("t6",t6);
// console.log(t1+t2+t3+t4+t5+t6);
// console.log(x);



document.getElementById("s1").innerHTML = t1 ;
document.getElementById("s2").innerHTML = t2 ;
document.getElementById("s3").innerHTML = t3 ;
document.getElementById("s4").innerHTML = t4 ;
document.getElementById("s5").innerHTML = t5 ;
document.getElementById("s6").innerHTML = t6 ;
document.getElementById("sum").innerHTML = sum ;

