let timeFilter = {};

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

    const options = data.map((v) => {
      return `<option value="${v.id}">${v.name}</option>`;
    });
    document.getElementById("abc").innerHTML = options.join("");
  } catch (error) {
    console.error("Error in Display_Cinema:", error);
  }
};

const handlechange = async () => {
  const select = document.getElementById("abc").value;

  try {
    const response = await fetch("http://localhost:3000/movie");
    if (!response.ok) {
      throw new Error("Error in getting movies data: " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    const filterData = data.filter((v) => v.cinema_id === select);
    console.log(filterData);

    const options = filterData.map((v) => {
      return `<option value="${v.id}">${v.name}</option>`;
    });
    document.getElementById("abc2").innerHTML = options.join("");
  } catch (error) {
    console.error("Error in handlechange:", error);
  }
};

const handleTimechange = async () => {
  const select = document.getElementById("abc2").value;
  
  try {
    const response = await fetch("http://localhost:3000/time");
    if (!response.ok) {
      throw new Error("Error in getting time data: " + response.statusText);
    }
    const data = await response.json();
    console.log(data);

    timeFilter = data.find((v) => v.movie === select);
    console.log(timeFilter);
    let print = '';

    
    timeFilter.time.map((v) => {
      print +=
       `<option value="${v}">${v}</option>
       `;
    });
    document.getElementById("time").innerHTML = print;
  } catch (error) {
   console.log(error);
  }
};

const siteForms = async () => {
  event.preventDefault();
  const sit = parseInt(document.getElementById("seat").value);


    console.log(timeFilter);
    
    const start = new Date(timeFilter.st_date);
    const end = new Date(timeFilter.en_date);

    let daysOfYear = {};
    for (
      var day = start;
      day <= end;
      day.setDate(day.getDate() + 1)
    ) {
      daysOfYear[day.toLocaleDateString()] = new Array(sit).fill(0);
    }

    const cinema = document.getElementById("abc").value;
    const movie = document.getElementById("abc2").value;
    const time = document.getElementById("time").value;
    const price = document.getElementById("price").value;
    
    let obj = {
      cinema: cinema,
      movie: movie,
      time: time,
      sit: daysOfYear,
      price: price
    }
    
    if(update) {
      try {
        console.log("update..");
        const response = await fetch("http://localhost:3000/seat/" + update, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
      } catch (error) {
        console.log(error);
        
      }
    } else {
      try {
        console.log("add...");
        await fetch("http://localhost:3000/seat",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
      } catch (error) {
        console.log(error);
        
      }
    }
    
}

const display_poster = async () => {
  try {
    const [response, response1, response2] = await Promise.all([
      fetch("http://localhost:3000/seat"),
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
          <th>Time</th>
          <th>Number of seat</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
    `;

    data.forEach((v) => {
      const cinema = data1.find((V1) => V1.id === v.cinema);
      const movie = data2.find((V2) => V2.id === v.movie);
      
      print += `
        <tr>
          <td>${cinema.name}</td>
          <td>${movie.name}</td>
          <td>${v["time"]}</td>
          <td>${v.sit[Object.keys(v.sit)[0]].length}</td>
          <td>${v.price}</td>
          <td>
            <button onclick="handleDelete('${v.id}')" id="delete_css" class="as">D</button>
            <button onclick=handleEdit('${v.id}','${v.cinema}','${v.movie}','${JSON.stringify(v.time)}',${v.sit[Object.keys(v.sit)[0]].length},'${v.price}') id="edit_css" class="as">E</button>
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


const handleDelete = async (id) => {
  console.log(id);

  try {
    const response = await fetch("http://localhost:3000/seat/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error with Status Code:" + response.statusText);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

const handleEdit = (id, c, m, t, s, p) => {
  // let finalDate = JSON.parse(time);

  document.getElementById("abc").value = c;
  handlechange(document.getElementById("abc2").value = m);
  handleTimechange(document.getElementById  ("time").value = t);
  document.getElementById("seat").value = s;  
  document.getElementById("price").value = p;



  // for(let i=0; i<finalDate.length;i++) {
  //   handleTime(finalDate[i]);
  // }

  togglePopup();
  update = id;
};

window.onload = function () {
  Display_Cinema();
  display_poster(); 
};

const sitform = document.getElementById("formssss");
sitform.addEventListener("submit", function () {
  siteForms();
});