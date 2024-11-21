let seat = [];

const handleSeat = async () => {
  try {
    const response = await fetch("http://localhost:3000/seat");
    const data = await response.json();

    let c_id = localStorage.getItem("Cinema_Id");
    let m_id = localStorage.getItem("Movie_id");
    let times = localStorage.getItem("Movie_Time");
    let Dates = localStorage.getItem("Movie_Date");
    let obj = data.find(
      (v) => v.cinema === c_id && v.movie === m_id && v.time === times
    );

    console.log(data);
    console.log(obj);
    console.log(Dates);

    // console.log(obj.sit[Dates]);

    let x = obj.sit[Dates];

    console.log(x);

    let print = `
        `;

    x.map((v, i) => {
      print += `
                 <div class="new_movie_card" >
                    <button id="seat-${i}"  class="remove_number_box" ${
        v === 1 ? "disabled" : ""
      } onclick="handleBookingSeat('${i}')"  >${i + 1}</button>
                </div>    
            `;

      print += ``;

      document.getElementById("print").innerHTML = print;
    });
  } catch (error) {
    console.log(error);
  }
};

const handleBookedSeat = async () => {
  // event.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/seat");
    const data = await response.json();

    let c_id = localStorage.getItem("Cinema_Id");
    let m_id = localStorage.getItem("Movie_id");
    let times = localStorage.getItem("Movie_Time");
    let Dates = localStorage.getItem("Movie_Date");
    let obj = data.find(
      (v) => v.cinema === c_id && v.movie === m_id && v.time === times
    );

    console.log(data);
    console.log(obj);
    console.log(Dates);
    console.log(obj.sit);
    let x = obj.sit[Dates];
    console.log(x);

    let seatData = x.map((s, i) => {
      return seat.includes(i.toString()) || s == 1 ? 1 : 0;
    });

    console.log("Seats:", seatData);

    obj.sit[Dates] = seatData;
    console.log(obj);

    const response5 = await fetch("http://localhost:3000/seat/" + obj.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    window.location.href = "Tickets_User.html";
  } catch (error) {
    console.log(error);
  }
};

const handleBookingSeat = async (i) => {
  console.log(i);

  let A = seat.includes(i);
  console.log(A);

  if (A) {
    console.log("remove");

    const find = seat.findIndex((v) => v === i);
    console.log(find);

    const sp = seat.splice(find, 1);

    document.getElementById(`seat-${i}`).style.backgroundColor = "white";
  } else {
    console.log("add");
    seat.push(i);

    document.getElementById(`seat-${i}`).style.backgroundColor = "lightblue";
  }
  console.log(seat);
};

window.onload = function () {
  handleSeat();
};
