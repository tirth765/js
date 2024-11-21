let Global = [];
let update = null;

let display = (fdata = []) => {
  let finaldata = fdata.length > 0 ? fdata : Global;
  print = `
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Roll_no</th>
            <th>Course</th>
            <th>Fess</th>
            <th>Action</th>
        </tr>
    `;
  finaldata.map((v, i) => {
    print += `
        <tr>
            <td>${v.name}</td>
            <td>${v.Roll_no}</td>
            <td>${v.Course}</td>
            <td>${v.Fess}</td>
            <td><button onclick="handledelete(${i})">D</button> <button onclick="handleEdit(${i})">E</button></td>
        </tr>`;
  });
  print += "</table>";
  document.getElementById("display").innerHTML = print;
};

let handlesubmit = () => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  let Roll_no = document.getElementById("Roll_no").value;
  let Course = document.getElementById("Course").value;
  let Fess = document.getElementById("Fess").value;

  let obj = {
    name: name,
    Roll_no,
    Course,
    Fess,
  };
  if (update === 0 || update != null) {
    console.log("update....", update);
    Global[update] = obj;
  } else {
    console.log("add...");
    Global.push(obj);
  }
  document.getElementById("name").value = "";
  document.getElementById("Roll_no").value = "";
  document.getElementById("Course").value = "";
  document.getElementById("Fess").value = "";
  update = null;
  display();
};

let handledelete = (i) => {
  Global.splice(i, 1);
  display();
};

let handleEdit = (i) => {
  console.log(i, Global, Global[i].name, Global[i].jd, Global[i].salary);
  document.getElementById("name").value = Global[i].name;
  document.getElementById("Roll_no").value = Global[i].Roll_no;
  document.getElementById("Course").value = Global[i].Course;
  document.getElementById("Fess").value = Global[i].Fess;

  update = i;
};

let handlesearchshort = () => {
  let search = document.getElementById("search").value;
  console.log(search, Global);
  let fdata = Global.filter((v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.Roll_no.includes(search) ||
      v.Course.includes(search) ||
      v.Fess.includes(search)
  );
  console.log(fdata);
  let sdata = document.getElementById("sort").value;
  fdata.sort((a, b) => {
    if (sdata === "1") {
        return a.name.localeCompare(b.name);
    } else if (sdata === "2") {
        return b.name.localeCompare(a.name);
    } else if (sdata === "3") {
        return a.Roll_no - b.Roll_no;
    } else if (sdata === "4") {
        return b.Roll_no - a.Roll_no;
    } else if (sdata === "5") {
        return a.Fess - b.Fess;
    } else if (sdata === "6") {
        return b.Fess - a.Fess;
    }});

  display(fdata);
};