const handleFinalTickets = () => {

    let m_name = localStorage.getItem("Movie_Name");
    let times = localStorage.getItem("Movie_Time");
    let Dates = localStorage.getItem("Movie_Date");

    

    let print = ``;

    print += `
     <table border="1">
                <tr>
                    <th>
                        Movie Name
                    </th>
                    <td>
                        ${m_name}
                    </td>
                </tr>
                
                
                <tr>
                    <th>
                        Date
                    </th>
                    <td>
                        ${Dates}
                    </td>
                </tr>
                <tr>
                    <th>
                        Time
                    </th>
                    <td>
                        ${times}
                    </td>
                </tr>
                   
            </table>
    `
    document.getElementById("print").innerHTML = print;
}

window.onload = function () {
    handleFinalTickets();
  };