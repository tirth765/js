function tirth() {
    console.log("event start!");
   
}

function tirth2() {
    console.log("event end!");
}

function tirth3() {
    console.log("onfocus");
    document.getElementById("s3").style .backgroundColor = 'pink'
}

function tirth4() {
    console.log("onblur");
    
    
}

function tirth5() {
    console.log("submitted!!");

}

function honload() {
    console.log("Load Event!");
}

function hunload() {
    console.log("unlog Event");
   
    
}
function size() {
    console.log("size changed");
    innerHeight;
    innerWidth;
}

window.onload = honload;

window.onunload = hunload;

window.onresize = size;