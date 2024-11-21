let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});
function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

let update = null;
const handleEdit = async (id, name, email, Phone_number, Address) => {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("Phone_number").value = Phone_number;
  document.getElementById("Address").value = Address;

  update = id;
  togglePopup();
};

const handleform = async () => {
  try {
    const obj = {
      name: name,
      email,
      Phone_number,
      Address,
    };
    if (update) {
      const response = await fetch("http://localhost:3000/user/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          Phone_number: document.getElementById("Phone_number").value,
          Address: document.getElementById("Address").value,
        }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } else {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          Phone_number: document.getElementById("Phone_number").value,
          Address: document.getElementById("Address").value,
        }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const dataDisplay = async () => {
  try {
    const response = await fetch("http://localhost:3000/user");

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    let print = `
    <table id="table_dataa">
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
          </tr>
    `;

    data.map((v) => {
      print += `
          <tr>
              <td>${v.name}</td>
              <td>${v.email}</td>
              <td>${v.Phone_number}</td>
              <td>${v.Address}</td>
              <td><button onclick="handleEdit('${v.id}','${v.name}','${v.email}','${v.Phone_number}','${v.Address}')" id="edit_css">E</button><button onclick="handleDelete('${v.id}')" id="delete_css">D</button></td>
          </tr>
      `;
    });

    print += `
      </table>
    `;
    document.getElementById("dis").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (id) => {
  console.log(id);

  try {
    const response = await fetch("http://localhost:3000/user/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error with Status Code:" + response.statusText);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};



let user = document.getElementById("formssss");
user.addEventListener("submit", handleform);

window.onload = function () {
  dataDisplay();
};
