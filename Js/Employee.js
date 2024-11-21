let globle = [];
let update = null;

let display = (fdata = []) => {
  let finaldata = fdata.length > 0 ? fdata : globle;
  let print = `
    <table border='1'>
        <tr>
            <th>Name</th>
            <th>Joning Date</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>
    `;

  finaldata.map((v, i) => {
    print += ` 
        <tr>
            <td>${v.name}</td>
            <td>${v.jd}</td>
            <td>${v.salary}</td>
            <td><button onclick="handleEdit(${i})">E</button><button onclick="hendelDelete(${i})">D</button></td>
        </tr> 
    `;
  });

  print += "</table>";

  console.log(print);

  document.getElementById("display").innerHTML = print;
};

let hendelDelete = (i) => {
  globle.splice(i, 1);
  display();
};

const handlesubmit = () => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const jd = document.getElementById("jd").value;
  const salary = document.getElementById("salary").value;

  let flag = true;
  
  
    if(name === '') {
      flag = false;
      document.getElementById("NameErr").innerHTML = "Enter your name"
    }else {
      const regex = /^[a-zA-Z ]{2,30}$/;
      if (regex.test(name)) {
        document.getElementById("NameErr").innerHTML = "";
      } else {
        flag = false;
        document.getElementById("NameErr").innerHTML = "Invalid name";
      }
    }

    if(jd === '') {
      flag = false;
      document.getElementById("DateErr").innerHTML = "Enter Date"
    } else {
      document.getElementById("DateErr").innerHTML = ""
    }

    if(salary === '') {
      flag = false;
      document.getElementById("SalaryErr").innerHTML = "Enter Salary"
    } else {
      if (isNaN(salary)) {
        flag = false;
        document.getElementById("SalaryErr").innerHTML = "Invalid salary";
      } else {
        if (salary > 0) {
          document.getElementById("SalaryErr").innerHTML = "";
        } else {
          flag = false;
          document.getElementById("SalaryErr").innerHTML ="Invalid salary";
        }
      }
    }
    




  
  
  if(flag) {
  let obj = {
    name: name,
    jd,
    salary,
  };

  if (update === 0 || update != null) {
    console.log("update....", update);
    globle[update] = obj;
  } else {
    console.log("add...");

    globle.push(obj);
  }

  document.getElementById("name").value = "";
  document.getElementById("jd").value = "";
  document.getElementById("salary").value = "";
  update = null;
  display();
}
};

let handleEdit = (i) => {
  console.log(i, globle, globle[i].name, globle[i].jd, globle[i].salary);
  document.getElementById("name").value = globle[i].name;
  document.getElementById("jd").value = globle[i].jd;
  document.getElementById("salary").value = globle[i].salary;

  update = i;
};

let handlescarchch = () => {
  let search = document.getElementById("search").value;
  let fdata = globle.filter((v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.jd.includes(search) ||
      v.salary.includes(search));
  let edata = document.getElementById("short").value;
  if (edata) {
    console.log(edata);
    let data = fdata.sort((a, b) => {
      if (edata === "1") {
        return a.name.localeCompare(b.name);
      } else if (edata === "2") {
        return b.name.localeCompare(a.name);
      } else if (edata === "3") {
        return parseInt(a.salary) - parseInt(b.salary);
      } else if (edata === "4") {
        return parseInt(b.salary) - parseInt(a.salary);
      }
    });
    display(data);
  }
  console.log(fdata);
  display(fdata);
};