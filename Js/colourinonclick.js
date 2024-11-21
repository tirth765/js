function htirth() {

    let contre;

    contre = document.getElementById("co").value;

    console.log(contre);
    
    
    if(contre === '0') {
        document.getElementById("body").style.backgroundColor = "white";
    } else if(contre === '1') {
        document.getElementById("body").style.backgroundColoror = "yellow";
    } else if(contre === '2') {
        document.getElementById("body").style.backgroundColor = "green";
    } else if(contre === '3') {
        document.getElementById("body").style.backgroundColor = "pink"
    }
} 