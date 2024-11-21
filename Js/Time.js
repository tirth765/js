let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

let update = null;
menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
  update = null;
}

const Display_Cinema = async () => {
  try {
    const response = await fetch("http://localhost:3000/user");

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);

    let print;
    data.map((v) => {
      print += `
            <option value="${v.id}">${v.name}</option>
        `;
    });
    document.getElementById("abc").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handlechange = async () => {
  const select = document.getElementById("abc").value;

  try {
    const response = await fetch("http://localhost:3000/movie");
    if (!response.ok) {
      console.log("Error In The Getting Movies Data: ", response.statusText);
    }
    const data = await response.json();
    console.log(data);
    let print;
    const filterData = data.filter((v) => v.cinema_id === select);
    console.log(filterData);

    filterData.map((v) => {
      print += `
        <option value="${v.id}">${v.name}</option>
        `;
      document.getElementById("abc2").innerHTML = print;
    });
  } catch (error) {
    console.log(error);
  }
};


const display_poster = async () => {
  try {
    const [response, response1, response2] = await Promise.all([
      fetch("http://localhost:3000/time"),
      fetch("http://localhost:3000/user"),
      fetch("http://localhost:3000/movie")
    ]);

    const data = await response.json();
    const data1 = await response1.json();
    const data2 = await response2.json();

    let print = `
      <table id="gap_Edit">
        <tr>
          <th>Cinema</th>
          <th>Movie name</th>
          <th>Start_Date</th>
          <th>End_Date</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
    `;

    data.forEach((v) => {
      const cinema = data1.find((V1) => V1.id === v.cinema);
      const movie = data2.find((V2) => V2.id === v.movie);
      
      print += `
        <tr>
          <td>${cinema ? cinema.name : 'Unknown Cinema'}</td>
          <td>${movie ? movie.name : 'Unknown Movie'}</td>
          <td>${v.st_date}</td>
          <td>${v.en_date}</td>
          <td>${v.time}</td>
          <td>
            <button onclick="handleDelete('${v.id}')" id="delete_css" class="as">D</button>
            <button onclick=handleEdit('${v.id}','${v.cinema}','${v.movie}','${v.st_date}','${v.en_date}','${JSON.stringify(v.time)}') id="edit_css" class="as">E</button>
          </td>
        </tr>
      `;
    });

    print += `
      </table>
    `;

    document.getElementById("dis").innerHTML = print;
  } catch (error) {
    console.error(error);
    document.getElementById("dis").innerHTML = "<p>Error loading data. Please try again later.</p>";
  }
};

  


const Submit_Data = async () => {
  event.preventDefault();
  const time = document.getElementsByName("timeD");
  const cinema = document.getElementById("abc").value;
  const movie = document.getElementById("abc2").value;
  const st_date = document.getElementById("st_date").value;
  const en_date = document.getElementById("en_date").value;

  console.log(st_date);
  

  const DisplayTime = [];
  for (let i = 0; i < time.length; i++) {
    DisplayTime.push(time[i].value);
  }

  console.log(DisplayTime);

  let obj = {
    time: DisplayTime,
    cinema: cinema,
    movie: movie,
    st_date: st_date,
    en_date: en_date,
  };

  if(update) {
    try {
      console.log("update..");
      
    const response = await fetch("http://localhost:3000/time/" + update, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
  } else {
    try {
      console.log("add...");
      const response = await fetch("http://localhost:3000/time", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      } catch (error) {
        console.log(error);
      }
    }
  }

  

const handleDeleteTime = (rno) => {
  const RemoveBUtt = document.getElementById("row-" + rno);
  RemoveBUtt.remove();
};

const handleTime = (v) => {
  event.preventDefault();
  const MainDiv = document.getElementById("all-time");

  const rno = Math.floor(Math.random() * 1000);

  const divEle = document.createElement("div");
  divEle.setAttribute("id", "row-" + rno);

  const inpEle = document.createElement("input");
  inpEle.setAttribute("type", "time");
  inpEle.setAttribute("name", "timeD");
  inpEle.setAttribute("value", v);

  const Plusbutt = document.createElement("button");
  Plusbutt.setAttribute("onclick", "handleTime()");
  Plusbutt.textContent = "+";
  Plusbutt.setAttribute("class" , "Epic")

  divEle.appendChild(inpEle);
  divEle.appendChild(Plusbutt);

  if(MainDiv.children.length >= 1) {
    const MinButt = document.createElement("button");
    MinButt.setAttribute("onclick", `handleDeleteTime(${rno})`);
    MinButt.textContent = "-";
    MinButt.setAttribute("class", "Size_Edit");
    divEle.appendChild(MinButt);
  }

  MainDiv.appendChild(divEle);
};


const handleDelete = async (id) => {
  console.log(id);

  try {
    const response = await fetch("http://localhost:3000/time/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error with Status Code:" + response.statusText);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

const handleEdit = (id, c, m, start, End, time) => {
  let finalDate = JSON.parse(time);

  document.getElementById("abc").value = c;
  handlechange(document.getElementById("abc2").value = m);
  document.getElementsByName("timeD").value = time;
  document.getElementById("st_date").value = start;  
  document.getElementById("en_date").value = End;

  document.getElementById("all-time").innerHTML = "";


  for(let i=0; i<finalDate.length;i++) {
    handleTime(finalDate[i]);
  }

  togglePopup();
  update = id;
};





const movie_pic = document.getElementById("formssss");
movie_pic.addEventListener("submit", function () {
  Submit_Data();
});

window.onload = function () {
  Display_Cinema();
  display_poster();
};
