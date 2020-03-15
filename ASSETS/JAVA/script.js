//função para + e - no item STEEL
function addSteel() {
    var initial = parseInt(document.getElementById("steel").innerHTML);
    var sum = initial + 1;
    var price = 30;
    document.getElementById("steel").innerHTML = sum;
    document.getElementById("totalSteel").innerHTML = price*sum;
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
        document.getElementById("totalSteel").innerHTML = 0;
    } else {
        document.getElementById("totalSteel").innerHTML = document.getElementById("totalSteel").innerHTML - 30;
    }   
}


//função para + e - no item POLYMER
function addPoly() {
    var initial = parseInt(document.getElementById("poly").innerHTML);
    var sum = initial + 1;
    var price = 25;
    document.getElementById("poly").innerHTML = sum;
    document.getElementById("totalPoly").innerHTML = price*sum;
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

    if(initial == 0) {
        document.getElementById("totalPoly").innerHTML = 0;
    } else {
        document.getElementById("totalPoly").innerHTML = document.getElementById("totalPoly").innerHTML - 25;
    }  
}


//função para + e - no item CIRCUITS
function addCirc() {
    var initial = parseInt(document.getElementById("circ").innerHTML);
    var sum = initial + 1;
    var price = 45;
    document.getElementById("circ").innerHTML = sum;
    document.getElementById("totalCirc").innerHTML = price*sum;
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

    if(initial == 0) {
        document.getElementById("totalCirc").innerHTML = 0;
    } else {
        document.getElementById("totalCirc").innerHTML = document.getElementById("totalCirc").innerHTML - 45;
    } 

}


//função para + e - no item SOLDERING IRON
function addSolder() {
    var initial = parseInt(document.getElementById("solder").innerHTML);
    var sum = initial + 1;
    var price = 10;
    document.getElementById("solder").innerHTML = sum;    
    document.getElementById("totalSolder").innerHTML = price*sum;
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

    if(initial == 0) {
        document.getElementById("totalSolder").innerHTML = 0;
    } else {
        document.getElementById("totalSolder").innerHTML = document.getElementById("totalSolder").innerHTML - 10;
    } 
}


//função para + e - no item CABLES
function addCables() {
    var initial = parseInt(document.getElementById("cables").innerHTML);
    var sum = initial + 1;
    var price = 20;
    document.getElementById("cables").innerHTML = sum;    
    document.getElementById("totalCables").innerHTML = price*sum;
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

    if(initial == 0) {
        document.getElementById("totalCables").innerHTML = 0;
    } else {
        document.getElementById("totalCables").innerHTML = document.getElementById("totalCables").innerHTML - 20;
    } 
}


//limpa os campos de quantidade, preço e soma
function cancel(){
    document.getElementById("steel").innerHTML = 0;
    document.getElementById("poly").innerHTML = 0;
    document.getElementById("circ").innerHTML = 0;
    document.getElementById("solder").innerHTML = 0;
    document.getElementById("cables").innerHTML = 0;
    document.getElementById("totalSum").innerHTML = 0;
    document.getElementById("totalSteel").innerHTML = 0;
    document.getElementById("totalPoly").innerHTML = 0;
    document.getElementById("totalCirc").innerHTML = 0;
    document.getElementById("totalSolder").innerHTML = 0;
    document.getElementById("totalCables").innerHTML = 0;    
}


//atualiza o campo de soma total da compra
function valueTotal() {
    var a = parseInt(document.getElementById("totalSteel").innerHTML);
    var b = parseInt(document.getElementById("totalPoly").innerHTML);
    var c = parseInt(document.getElementById("totalCirc").innerHTML);
    var d = parseInt(document.getElementById("totalSolder").innerHTML);
    var e = parseInt(document.getElementById("totalCables").innerHTML);

    document.getElementById("totalSum").innerHTML = a+b+c+d+e;
}



function buyItem(){
    var check = parseInt(valueTotal());
    var wallet = parseInt(document.getElementById("wallet").innerHTML);
    var purchase = parseInt(document.getElementById("totalSum").innerHTML);

    check;
    if(wallet<purchase){
        cancel();
        document.getElementById("erroraudio").play();
        document.getElementById("modalScreen").style.display=['block'];
    } else {
        valueTotal();
        document.getElementById("purchase").play();
        document.getElementById("wallet").innerHTML = wallet - purchase;
    }

    var amountSteel = parseInt(document.getElementById("steel").innerHTML);
    var amountPoly = parseInt(document.getElementById("poly").innerHTML);
    var amountCirc = parseInt(document.getElementById("circ").innerHTML);
    var amountSolder = parseInt(document.getElementById("solder").innerHTML);
    var amountCables = parseInt(document.getElementById("cables").innerHTML);
    
    document.getElementById("storedSteel").innerHTML = parseInt(document.getElementById("storedSteel").innerHTML)+amountSteel;
    document.getElementById("storedPoly").innerHTML = parseInt(document.getElementById("storedPoly").innerHTML)+amountPoly;
    document.getElementById("storedCirc").innerHTML = parseInt(document.getElementById("storedCirc").innerHTML)+amountCirc;
    document.getElementById("storedSolder").innerHTML = parseInt(document.getElementById("storedSolder").innerHTML)+amountSolder;
    document.getElementById("storedCables").innerHTML = parseInt(document.getElementById("storedCables").innerHTML)+amountCables;
    cancel();     
}
//loot
function sendCart(){
    document.getElementById("send").style.display=['none'];
    document.getElementById("wait").style.display=['block'];

    document.getElementById("loading").style.display=['block'];

    setTimeout(() => {        
        getLoot();
    }, 180000); //3minutes

    document.getElementById("bar2").style.display=['block'];
    setTimeout(()=> {
        document.getElementById("send").style.display=['block'];
        document.getElementById("wait").style.display=['none'];
        document.getElementById("loading").style.display=['none'];
    }, 240000); //1min cooldown
    
}


function getLoot(){
    document.getElementById("erroraudio").play(); 
    document.getElementById("modalScreenLoot").style.display=['block'];

    var lootJunk = parseInt(document.getElementById("lootJunk").innerHTML);
    var lootPlastic = parseInt(document.getElementById("lootPlastic").innerHTML);
    var lootTech = parseInt(document.getElementById("lootTech").innerHTML);
    var lootParts = parseInt(document.getElementById("lootParts").innerHTML);
    var lootRubber = parseInt(document.getElementById("lootRubber").innerHTML);

    document.getElementById("lootJunk").innerHTML = lootJunk + Math.floor(Math.random()*15);
    document.getElementById("lootPlastic").innerHTML = lootPlastic + Math.floor(Math.random()*10);
    document.getElementById("lootTech").innerHTML = lootTech + Math.floor(Math.random()*5);
    document.getElementById("lootParts").innerHTML = lootParts + Math.floor(Math.random()*20);
    document.getElementById("lootRubber").innerHTML = lootRubber + Math.floor(Math.random()*15);

    document.getElementById("storedJunk").innerHTML = parseInt(document.getElementById("storedJunk").innerHTML)+parseInt(document.getElementById("lootJunk").innerHTML);
    document.getElementById("storedPlastic").innerHTML = parseInt(document.getElementById("storedPlastic").innerHTML)+parseInt(document.getElementById("lootPlastic").innerHTML);
    document.getElementById("storedTech").innerHTML = parseInt(document.getElementById("storedTech").innerHTML)+parseInt(document.getElementById("lootTech").innerHTML);
    document.getElementById("storedParts").innerHTML = parseInt(document.getElementById("storedParts").innerHTML)+parseInt(document.getElementById("lootParts").innerHTML);
    document.getElementById("storedRubber").innerHTML = parseInt(document.getElementById("storedRubber").innerHTML)+parseInt(document.getElementById("lootRubber").innerHTML);  
}

//salvage & sell
function salvageItem() {
    console.log("implementar SALVAGE");
}

function sellItem(){
    var junk = document.getElementById("storedJunk").innerHTML;
    var plastic = document.getElementById("storedPlastic").innerHTML;
    var tech = document.getElementById("storedTech").innerHTML;
    var parts = document.getElementById("storedParts").innerHTML;
    var rubber = document.getElementById("storedRubber").innerHTML;

    var junkV = 10;
    var plasticV = 15;
    var techV = 25;
    var partsV = 5; 
    var rubberV = 15;

    var a = (parseInt(junk)*junkV);
    var b = (parseInt(plastic)*plasticV);
    var c = (parseInt(tech)*techV);
    var d = (parseInt(parts)*partsV);
    var e = (parseInt(rubber)*rubberV);

    var loot = a+b+d+c+e;
    
    document.getElementById("wallet").innerHTML = parseInt(document.getElementById("wallet").innerHTML)+loot;

    reset(); 

    function reset(){
        document.getElementById("storedJunk").innerHTML = junk * 0;
        document.getElementById("storedPlastic").innerHTML = plastic * 0;
        document.getElementById("storedTech").innerHTML = tech * 0;
        document.getElementById("storedParts").innerHTML = parts * 0;
        document.getElementById("storedRubber").innerHTML = rubber * 0;
    }

}

function closeModal(){
    document.getElementById("click2").play();
    document.getElementById("modalScreen").style.display=['none'];    
    document.getElementById("modalScreenLoot").style.display=['none'];    
}

function closeModalLoot(){
    document.getElementById("click2").play();

    var lootJunk = parseInt(document.getElementById("lootJunk").innerHTML);
    var lootPlastic = parseInt(document.getElementById("lootPlastic").innerHTML);
    var lootTech = parseInt(document.getElementById("lootTech").innerHTML);
    var lootParts = parseInt(document.getElementById("lootParts").innerHTML);
    var lootRubber = parseInt(document.getElementById("lootRubber").innerHTML);

    document.getElementById("lootJunk").innerHTML = lootJunk * 0;
    document.getElementById("lootPlastic").innerHTML = lootPlastic * 0;
    document.getElementById("lootTech").innerHTML = lootTech * 0;
    document.getElementById("lootParts").innerHTML = lootParts * 0;
    document.getElementById("lootRubber").innerHTML = lootRubber * 0;
    


    document.getElementById("modalScreenLoot").style.display=['none'];    
}



//audios
function clickAudio(){
    document.getElementById("click").play();
}
function purchaseAudio(){
    document.getElementById("purchase").play();
}
function clickAudio2() {
    document.getElementById("click2").play();
}

//CRAFT: