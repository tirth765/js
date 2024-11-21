function tirth() {
    event.preventDefault();
    let pro,Rams,Memorys,Graphic;

    pro = parseInt(document.getElementById("processor").value);
    Rams =  parseInt(document.getElementById("Ram").value);
    Memorys = parseInt(document.getElementById("Memory").value);
    Graphic = parseInt(document.getElementById("Graphics").value);
    console.log(pro,Rams,Memorys,Graphic);
    let type="";

    if (pro === 5000) {
        type = "Student Pc";
    }

    if(pro === 6000) {
        type = "Professional Pc";
    }
    if(pro === 10000){
        if(Rams === 7000 && Memorys === 4000 && Graphic === 45000) {
            type = "Gameming Pc";
        } else {
            type = "Professional Pc";
        }
    }
    document.getElementById("s1").innerHTML = type + "" + (pro+Rams+Memorys+Graphic);
}
