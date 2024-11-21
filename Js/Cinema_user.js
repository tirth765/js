
const handleCinema = async () => {
    event.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/movie");
        const data = await response.json();
        console.log(data);

        let MallData = localStorage.getItem("Movie_Name");
        console.log(MallData);

        let fdata = data.filter((v) => v.name === MallData);
        console.log(fdata);

        let Cdata = fdata.map((v) => v.cinema_id)
        console.log(Cdata);



        const response1 = await fetch("http://localhost:3000/user");
        const data1 = await response1.json();
        console.log(data1);
        
        let CallData = data1.filter((v) => Cdata.includes(v.id));
        console.log(CallData);


        let print = `
        `;

        CallData.map((v) => {
            print += `
          
                    <div class="movie-card">
                        <h3>${v.name}</h3>
                        <a href="#"> <button class="button-71" role="button" onclick="handleLocalStoragee('${v.id}','${MallData}')">Submit</button> </a>
                    </div>    
            `;
        });

        print += "";

        document.getElementById("print").innerHTML = print;


    } catch (error) {
        console.log(error);
    }

}

const handleLocalStoragee = async(n, m) => {
    const response3 = await fetch("http://localhost:3000/movie");
    const data3 = await response3.json();
    console.log(data3);

    console.log(n, m);

    localStorage.setItem("Cinema_Id",n);


    const obj = data3.find((v) => v.cinema_id === n && v.name === m)
    console.log(obj);


        localStorage.setItem("Movie_id", obj.id);
        

        window.location.href = "Date_User.html";
}   

window.onload = function () {
    handleCinema();
}   