const handlesubmit = () => {
    event.preventDefault();

    const disp = document.getElementById('disp');
    const city = document.getElementById('city').value;

    const ren = Math.floor(Math.random() * 1000);

    const divEle = document.createElement("div");
    divEle.setAttribute("id","city-"+ren);

    disp.appendChild(divEle);

    const spanEle = document.createElement("span");
    spanEle.textContent = city;
    divEle.appendChild(spanEle);

    const buttEle = document.createElement("button");
    buttEle.textContent = "Delete";
    divEle.appendChild(buttEle);
    buttEle.setAttribute("onclick",`handlDelete(${ren})`)
    
}

const handlDelete = (id) => {
    console.log(id);
    const Delete = document.getElementById("city-" + id);
    Delete.remove(id);
    
}

const city = document.getElementById('formcity');
city.addEventListener('submit',function(){
    handlesubmit();
    
})