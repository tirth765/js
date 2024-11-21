function handleper() {
    event.preventDefault();

  let rol = document.getElementById("rol").value;

  let std = document.getElementById("std").value;

  let per = parseFloat(document.getElementById("per").value);

  console.log(rol, std, per);

  let grade;

  if (per >= 91 && per <= 100) {
    grade = "A";
  } else if (per >= 81 && per <= 91) {
    grade = "B";
  } else if (per >= 71 && per <= 81) {
    grade = "C";
  } else if (per >= 41 && per <= 71) {
    grade = "D";
  } else if (per >= 0 && per <= 41) {
    grade = "Fail";
  }

    document.getElementById("roll_no").innerHTML = rol;

    document.getElementById("std_a").innerHTML = std;
    
    document.getElementById("per_b").innerHTML = per;

    
    console.log("s1", grade);
    document.getElementById("s1").innerHTML = grade;
}
