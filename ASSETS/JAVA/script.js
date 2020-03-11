function addSteel() {
    var initial = parseInt(document.getElementById("steel").innerHTML);
    var sum = initial + 1;
    document.getElementById("steel").innerHTML = sum;
    var price = 30;
    document.getElementById("totalSum").innerHTML = price*sum;
}
function minusSteel() {
    var initial = parseInt(document.getElementById("steel").innerHTML);
    var dec = initial - 1;
    
    if(initial == 0) {
        dec = 0;
    } else {
        initial -1;
    }
    document.getElementById("steel").innerHTML=dec;    
    
    if(initial == 0) {
        document.getElementById("totalSum").innerHTML = 0;
    } else {
        document.getElementById("totalSum").innerHTML = document.getElementById("totalSum").innerHTML - 30;
    }    
}



function addPoly() {
    var initial = parseInt(document.getElementById("poly").innerHTML);
    var sum = initial + 1;
    var price = 25;
    document.getElementById("poly").innerHTML = sum;
}
function minusPoly() {
    var initial = parseInt(document.getElementById("poly").innerHTML);
    var dec = initial - 1;
    
    if(initial == 0) {
        dec = 0;
    } else {
        initial -1;
    }
    document.getElementById("poly").innerHTML=dec;
}



function addCirc() {
    var initial = parseInt(document.getElementById("circ").innerHTML);
    var sum = initial + 1;
    document.getElementById("circ").innerHTML = sum;    
}
function minusCirc() {
    var initial = parseInt(document.getElementById("circ").innerHTML);
    var dec = initial - 1;
    
    if(initial == 0) {
        dec = 0;
    } else {
        initial -1;
    }
    document.getElementById("circ").innerHTML=dec;
}



function addSolder() {
    var initial = parseInt(document.getElementById("solder").innerHTML);
    var sum = initial + 1;
    document.getElementById("solder").innerHTML = sum;    
}
function minusSolder() {
    var initial = parseInt(document.getElementById("solder").innerHTML);
    var dec = initial - 1;
    
    if(initial == 0) {
        dec = 0;
    } else {
        initial -1;
    }
    document.getElementById("solder").innerHTML=dec;
}



function addCables() {
    var initial = parseInt(document.getElementById("cables").innerHTML);
    var sum = initial + 1;
    document.getElementById("cables").innerHTML = sum;    
}
function minusCables() {
    var initial = parseInt(document.getElementById("cables").innerHTML);
    var dec = initial - 1;
    
    if(initial == 0) {
        dec = 0;
    } else {
        initial -1;
    }
    document.getElementById("cables").innerHTML=dec;
}

function cancel(){
    document.getElementById("steel").innerHTML = 0;
    document.getElementById("poly").innerHTML = 0;
    document.getElementById("circ").innerHTML = 0;
    document.getElementById("solder").innerHTML = 0;
    document.getElementById("cables").innerHTML = 0;
    document.getElementById("totalSum").innerHTML = 0;
}

