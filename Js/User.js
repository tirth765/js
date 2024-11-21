let update = null;
const handleEdit = async (id, name, age) => {
  document.getElementById("name").value = name;
  document.getElementById("age").value = age;

  update = id;
};

const handleform = async () => {
  try {
    const obj = {
      name: name,
      age: age,
    };
    if (update) {
      const response = await fetch("http://localhost:3000/user/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
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
          age: document.getElementById("age").value,
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
  <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
  `;

    data.map((v) => {
      print += `
        <tr>
            <td>${v.name}</td>
            <td>${v.age}</td>
            <td><button onclick="handleEdit('${v.id}','${v.name}','${v.age}')">E</button><button onclick="handleDelete('${v.id}')">D</button></td>
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
