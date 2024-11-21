let Seating = 0, Costing = 0;
    let Treat;
function tirth() {
  event.preventDefault();
  
  Treat = document.getElementById("t1").value;
  

  if (Treat === "Teeth Cleanings") {
    Seating = 1;
    Costing = 500;
  } else if (Treat === "Fillings") {
    Seating = 2;
    Costing = 1500;
  } else if (Treat === "Root Canal Treatment") {
    Seating = 4;
    Costing = 2500;
  } else if (Treat === "RCT + Cover") {
    Seating = 6;
    Costing = 12000;
  } else if (Treat === "Braces/Invisalign") {
    Seating = 12;
    Costing = 35000;
  }

  document.getElementById("s1").innerHTML = Treat;
  document.getElementById("s2").innerHTML = Seating;
  document.getElementById("s3").innerHTML = Costing;

  if(Treat === '0') {
    document.getElementById("h").style.display = 'none';
  } else {
    document.getElementById("h").style.display = "inline-block";
  }
  
}


function tirthsub() {
  event.preventDefault();

  let Treatment = document.getElementById("Treatment").value;

  console.log(Treatment);

  let d = new Date(Treatment);
  console.log(d);

  let print = `<table border="1">
        <tr>
          <th>Treatment</th>
          <th>Apt Date</th>
          <th>Cost</th>
        </tr>
        
      `;
  for(i=0;i<Seating;i++) {

     print += `<tr>
          <td>${Treat}</td>
          <td>${d.toLocaleDateString('en-GB')}</td>
          <td>${Costing/Seating}</td>
      </tr>`;

    d.setDate(d.getDate() + 7) ;

  }

  print += '</table>'

  document.getElementById("disp").innerHTML = print;



}