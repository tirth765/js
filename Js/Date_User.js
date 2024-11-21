const handleDate = async () => {
    try {
        const response = await fetch("http://localhost:3000/time");
        const data = await response.json();
        console.log(data);

        const c_id = localStorage.getItem("Cinema_Id");
        const m_id = localStorage.getItem("Movie_id");

        const obj = data.find((v) => v.cinema === c_id && v.movie === m_id)
        console.log(obj);

        const start_D = new Date(obj.st_date);
        const end_D = new Date(obj.en_date);

        console.log(start_D);
        console.log(end_D);

        let print = `
            `;

        for (let i = start_D; i <= end_D; i.setDate(i.getDate() + 1)) {
            console.log(i);



            print += `
          
            <div class="movie-card">
                <h3>${i.toLocaleDateString()}</h3>
                <a href="#"> <button class="button-71" role="button" onclick="handleLocalStoragee('${i.toLocaleDateString()}')">Submit</button> </a>
            </div>    
    `;
        }

        print += ``;

        document.getElementById("print").innerHTML = print;

    } catch (error) {
        console.log(error);

    }
}

const handleLocalStoragee = (d) => {
    console.log(d);

    localStorage.setItem("Movie_Date", d);

    window.location.href = "Time_User.html";
}

window.onload = function () {
    handleDate();
}   