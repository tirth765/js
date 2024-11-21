const handleTime = async() => {

    try {

        const response = await fetch("http://localhost:3000/time");
        const data = await response.json();
        console.log(data);

        const c_id = localStorage.getItem("Cinema_Id");
        const m_id = localStorage.getItem("Movie_id");

        const obj = data.find((v) => v.cinema === c_id && v.movie === m_id)
        console.log(obj);
        console.log(obj.time);
        
        let print = `
            `;

        obj.time.map((v) => {
            print += `
          
            <div class="movie-card">
                <h3>${v}</h3>
                <a href="#"> <button class="button-71" role="button" onclick="handleLocalStoragee('${v}')">Submit</button> </a>
            </div>    
    `;
        })

        print += ``;

        document.getElementById("print").innerHTML = print;

    } catch (error) {
        console.log(error);
    }

}

const handleLocalStoragee = (t) => {
    console.log(t);

    localStorage.setItem("Movie_Time", t);

    window.location.href = "Seat_User.html";
}


window.onload = function () {
    handleTime();
}   