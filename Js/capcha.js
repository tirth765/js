let t1 = Math.floor(Math.random()*10);
let t2 = Math.floor(Math.random()*10);

// console.log(t1+t2);
document.getElementById("s1").innerHTML=t1;
document.getElementById("s2").innerHTML=t2;

function handleCaptch() {

    let ans = t1 + t2 ;
    
    let finalans = document.getElementById("s3").value;

    if(finalans == ans) {
        alert("Correct");
    } else {
        alert("incorrect");
    }
}
