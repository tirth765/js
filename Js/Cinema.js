let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

let update = null;

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
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

const display_poster = async () => {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/movie");
    const data = await response.json();

    const [response1] = await Promise.all([
      fetch("http://localhost:3000/user"),
    ]);
    const data1 = await response1.json();
    let print1 = `
     <table id="gap_Edit">
              <tr>
                <th>Movie name</th>
                <th>Cinama name</th>
                <th>Poster</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
    `;
    data.forEach((v) => {
      const cinema = data1.find((V1) => V1.id === v.cinema_id);
      print1 += `
      <tr>
        <td>${v.name}</td>  
        <td>${cinema ? cinema.name : 'Unknown Cinema'}</td>
        <td> <img src="../imges/${v.image}" width="200px" height="265px"></td>
        <td>${v.Description}</td>
         <td><button onclick="handleDelete('${v.id}')" id="delete_css" class="as">D</button> <button onclick="handleEdit('${v.id}','${v.name}','${v.image}')" id="edit_css", class="as">E</button></td>
      </tr>
    `;
    });

    print1 += `
    </table>
    `;
    document.getElementById("dis").innerHTML = print1;
  } catch (error) {
    console.log(error);
  }
};

const handleimg = async () => {
  const movie_name = document.getElementById("name").value;
  const Description = document.getElementById("Description").value;
  const movie_image = document.getElementById("movie_pic")?.files[0]?.name;
  const id = document.getElementById("abc").value;
  console.log(movie_image);

  console.log(id);

  

  
  let obj = {
    cinema_id: id,
    name: movie_name,
    image: movie_image,
    Description: Description,
  };

  if (update) {
    if (movie_image) {
      try {
        const response = await fetch("http://localhost:3000/movie/" + update, {
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
      let img = document.getElementById("Poster_Pic").src;
      console.log(img);

      let arr = img.split("/");
      let new_image = arr[arr.length - 1];

      const response = await fetch("http://localhost:3000/movie/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ ...obj, image: new_image }),
      });

    }
  } else {
    try {
      console.log("add...");
      const response = await fetch("http://localhost:3000/movie", {
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
};

const handlePosterImg = () => {
  const movie_image = document.getElementById("movie_pic").files[0].name;
  document.getElementById("Poster_Pic").src = "../imges/" + movie_image;
};

const handleEdit = (id, name, image) => {
  document.getElementById("name").value = name;
  document.getElementById("Poster_Pic").src = "../imges/" + image;

  togglePopup();

  update = id;
};

const handleDelete = async (id) => {
  console.log(id);

  try {
    const response = await fetch("http://localhost:3000/movie/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error with Status Code:" + response.statusText);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

const movie_pic = document.getElementById("formssss");
movie_pic.addEventListener("submit", function () {
  handleimg();
});

window.onload = function () {
  Display_Cinema();
  display_poster();
};
