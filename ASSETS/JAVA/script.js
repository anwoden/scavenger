//Items shop
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
//Fim do item shop


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


//atualiza o campo de soma total da compra (ver de fazer automático)
function valueTotal() {
    var a = parseInt(document.getElementById("totalSteel").innerHTML);
    var b = parseInt(document.getElementById("totalPoly").innerHTML);
    var c = parseInt(document.getElementById("totalCirc").innerHTML);
    var d = parseInt(document.getElementById("totalSolder").innerHTML);
    var e = parseInt(document.getElementById("totalCables").innerHTML);

    document.getElementById("totalSum").innerHTML = a+b+c+d+e;
}


//buy
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

    document.getElementById("sendBar").style.display=['block'];

    setTimeout(() => {        
        getLoot();
    }, 70000);


    setTimeout(()=> {
        document.getElementById("send").style.display=['block'];
        document.getElementById("wait").style.display=['none'];
        document.getElementById("sendBar").style.display=['none'];
    }, 80000);
}
//loot2
function getLoot(){
    document.getElementById("erroraudio").play(); 
    document.getElementById("modalScreenLoot").style.display=['block'];

    var lootJunk = parseInt(document.getElementById("lootJunk").innerHTML);
    var lootPlastic = parseInt(document.getElementById("lootPlastic").innerHTML);
    var lootTech = parseInt(document.getElementById("lootTech").innerHTML);
    var lootParts = parseInt(document.getElementById("lootParts").innerHTML);
    var lootCopper = parseInt(document.getElementById("lootCopper").innerHTML);

    document.getElementById("lootJunk").innerHTML = lootJunk + Math.floor(Math.random()*15);
    document.getElementById("lootPlastic").innerHTML = lootPlastic + Math.floor(Math.random()*10);
    document.getElementById("lootTech").innerHTML = lootTech + Math.floor(Math.random()*5);
    document.getElementById("lootParts").innerHTML = lootParts + Math.floor(Math.random()*20);
    document.getElementById("lootCopper").innerHTML = lootCopper + Math.floor(Math.random()*15);

    document.getElementById("storedJunk").innerHTML = parseInt(document.getElementById("storedJunk").innerHTML)+parseInt(document.getElementById("lootJunk").innerHTML);
    document.getElementById("storedPlastic").innerHTML = parseInt(document.getElementById("storedPlastic").innerHTML)+parseInt(document.getElementById("lootPlastic").innerHTML);
    document.getElementById("storedTech").innerHTML = parseInt(document.getElementById("storedTech").innerHTML)+parseInt(document.getElementById("lootTech").innerHTML);
    document.getElementById("storedParts").innerHTML = parseInt(document.getElementById("storedParts").innerHTML)+parseInt(document.getElementById("lootParts").innerHTML);
    document.getElementById("storedCopper").innerHTML = parseInt(document.getElementById("storedCopper").innerHTML)+parseInt(document.getElementById("lootCopper").innerHTML);  
}
//sell
function sellItem(){
    var junk = document.getElementById("storedJunk").innerHTML;
    var plastic = document.getElementById("storedPlastic").innerHTML;
    var tech = document.getElementById("storedTech").innerHTML;
    var parts = document.getElementById("storedParts").innerHTML;
    var copper = document.getElementById("storedCopper").innerHTML;

    var junkV = 10;
    var plasticV = 15;
    var techV = 25;
    var partsV = 5; 
    var copperV = 15;

    var a = (parseInt(junk)*junkV);
    var b = (parseInt(plastic)*plasticV);
    var c = (parseInt(tech)*techV);
    var d = (parseInt(parts)*partsV);
    var e = (parseInt(copper)*copperV);

    var loot = a+b+d+c+e;
    
    document.getElementById("wallet").innerHTML = parseInt(document.getElementById("wallet").innerHTML)+loot;

    reset(); 

    function reset(){
        document.getElementById("storedJunk").innerHTML = junk * 0;
        document.getElementById("storedPlastic").innerHTML = plastic * 0;
        document.getElementById("storedTech").innerHTML = tech * 0;
        document.getElementById("storedParts").innerHTML = parts * 0;
        document.getElementById("storedCopper").innerHTML = copper * 0;
    }
}

//janelas popup
function closeModal(){
    document.getElementById("click2").play();
    document.getElementById("modalScreen").style.display=['none'];
}

function closeModalLoot(){
    document.getElementById("click2").play();

    var lootJunk = parseInt(document.getElementById("lootJunk").innerHTML);
    var lootPlastic = parseInt(document.getElementById("lootPlastic").innerHTML);
    var lootTech = parseInt(document.getElementById("lootTech").innerHTML);
    var lootParts = parseInt(document.getElementById("lootParts").innerHTML);
    var lootCopper = parseInt(document.getElementById("lootCopper").innerHTML);

    document.getElementById("lootJunk").innerHTML = lootJunk * 0;
    document.getElementById("lootPlastic").innerHTML = lootPlastic * 0;
    document.getElementById("lootTech").innerHTML = lootTech * 0;
    document.getElementById("lootParts").innerHTML = lootParts * 0;
    document.getElementById("lootCopper").innerHTML = lootCopper * 0;  

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
function craftPc(){

    var steel = parseInt(document.getElementById("storedSteel").innerHTML);
    var poly = parseInt(document.getElementById("storedPoly").innerHTML);
    var circ = parseInt(document.getElementById("storedCirc").innerHTML);
    var solder = parseInt(document.getElementById("storedSolder").innerHTML);
    var cables = parseInt(document.getElementById("storedCables").innerHTML);
    var pcs = parseInt(document.getElementById("howmanyPC").innerHTML);

    if (steel >= 1){
        if(poly >= 4){
            if(circ >= 8){
                if(solder >= 5) {
                    if(cables >= 3){
                        windowPC();
                        document.getElementById("storedSteel").innerHTML = steel - 1;
                        document.getElementById("storedPoly").innerHTML = poly - 4;
                        document.getElementById("storedCirc").innerHTML = circ - 8;
                        document.getElementById("storedSolder").innerHTML = solder - 5;
                        document.getElementById("storedCables").innerHTML = cables - 3;
                        document.getElementById("howmanyPC").innerHTML = pcs + 1;
                    }
                }
            }
        }
    } else {
        document.getElementById("erroraudio").play();
        document.getElementById("modalScreenCraft").style.display=['block'];
    }
}

function windowPC(){
    var modal = document.getElementById("loadPC");
    modal.style.display=['block'];
    document.getElementById("buttonCraft").style.display=['none'];
    document.getElementById("click").play();

    setTimeout(()=>{
        document.getElementById("erroraudio").play();
        document.getElementById("craftInProgress").style.display=['none'];
        document.getElementById("craftDone").style.display=['block'];
        document.getElementById("buttonCraft").style.display=['block'];
    }, 5200);
}
function closeCraft() {
    document.getElementById("click2").play();
    document.getElementById("loadPC").style.display=['none'];
    document.getElementById("craftDone").style.display=['none']; 
    document.getElementById("craftInProgress").style.display=['block'];   
}
function sellPC(){
    var wallet = parseInt(document.getElementById("wallet").innerHTML);
    var price = parseInt(document.getElementById("pcPrice").innerHTML);
    var pcs = parseInt(document.getElementById("howmanyPC").innerHTML);

    
    if(pcs >= 1){
        document.getElementById("wallet").innerHTML = wallet + price*pcs;
        document.getElementById("howmanyPC").innerHTML = 0;
    }
}
function closeModalCraft(){
    document.getElementById("click").play();
    document.getElementById("modalScreenCraft").style.display=['none'];
}
//RADAR
function craftRD(){

    var steel = parseInt(document.getElementById("storedSteel").innerHTML);
    var poly = parseInt(document.getElementById("storedPoly").innerHTML);
    var circ = parseInt(document.getElementById("storedCirc").innerHTML);
    var solder = parseInt(document.getElementById("storedSolder").innerHTML);
    var cables = parseInt(document.getElementById("storedCables").innerHTML);
    var rds = parseInt(document.getElementById("howmanyRD").innerHTML);

    if (steel >= 1){
        if(poly >= 2){
            if(circ >= 2){
                if(solder >= 6) {
                    if(cables >= 8){
                        windowRD();
                        document.getElementById("storedSteel").innerHTML = steel - 1;
                        document.getElementById("storedPoly").innerHTML = poly - 2;
                        document.getElementById("storedCirc").innerHTML = circ - 2;
                        document.getElementById("storedSolder").innerHTML = solder - 6;
                        document.getElementById("storedCables").innerHTML = cables - 8;
                        document.getElementById("howmanyRD").innerHTML = rds + 1;
                    }
                }
            }
        }
    } else {
        document.getElementById("erroraudio").play();
        document.getElementById("modalScreenCraft").style.display=['block'];
    }
}

function windowRD(){
    var modal = document.getElementById("loadRD");
    modal.style.display=['block'];
    document.getElementById("buttonCraftRD").style.display=['none'];
    document.getElementById("click").play();

    setTimeout(()=>{
        document.getElementById("erroraudio").play();
        document.getElementById("craftInProgressRD").style.display=['none'];
        document.getElementById("craftDoneRD").style.display=['block'];
        document.getElementById("buttonCraftRD").style.display=['block'];
    }, 5200);
}
function closeCraftRD() {
    document.getElementById("click2").play();
    document.getElementById("loadRD").style.display=['none'];
    document.getElementById("craftDoneRD").style.display=['none'];  
    document.getElementById("craftInProgressRD").style.display=['block'];  
}
function sellRD(){
    var wallet = parseInt(document.getElementById("wallet").innerHTML);
    var price = parseInt(document.getElementById("rdPrice").innerHTML);
    var rds = parseInt(document.getElementById("howmanyRD").innerHTML);

    
    if(rds >= 1){
        document.getElementById("wallet").innerHTML = wallet + price*rds;
        document.getElementById("howmanyRD").innerHTML = 0;
    }
}
//EMP
function craftEMP(){

    var steel = parseInt(document.getElementById("storedSteel").innerHTML);
    var poly = parseInt(document.getElementById("storedPoly").innerHTML);
    var circ = parseInt(document.getElementById("storedCirc").innerHTML);
    var solder = parseInt(document.getElementById("storedSolder").innerHTML);
    var cables = parseInt(document.getElementById("storedCables").innerHTML);
    var emp = parseInt(document.getElementById("howmanyEMP").innerHTML);

    if (steel >= 5){
        if(poly >= 1){
            if(circ >= 1){
                if(solder >= 6) {
                    if(cables >= 4){
                        windowEMP();
                        document.getElementById("storedSteel").innerHTML = steel - 5;
                        document.getElementById("storedPoly").innerHTML = poly - 1;
                        document.getElementById("storedCirc").innerHTML = circ - 1;
                        document.getElementById("storedSolder").innerHTML = solder - 6;
                        document.getElementById("storedCables").innerHTML = cables - 4;
                        document.getElementById("howmanyEMP").innerHTML = emp + 1;
                    }
                }
            }
        }
    } else {
        document.getElementById("erroraudio").play();
        document.getElementById("modalScreenCraft").style.display=['block'];
    }
}
function windowEMP(){
    var modal = document.getElementById("loadEMP");
    modal.style.display=['block'];
    document.getElementById("buttonCraftEMP").style.display=['none'];
    document.getElementById("click").play();

    setTimeout(()=>{
        document.getElementById("erroraudio").play();
        document.getElementById("craftInProgressEMP").style.display=['none'];
        document.getElementById("craftDoneEMP").style.display=['block'];
        document.getElementById("buttonCraftEMP").style.display=['block'];
    }, 5200);
}
function closeCraftEMP() {
    document.getElementById("click2").play();
    document.getElementById("loadEMP").style.display=['none'];
    document.getElementById("craftDoneEMP").style.display=['none'];  
    document.getElementById("craftInProgressEMP").style.display=['block'];  
}
function sellEMP(){
    var wallet = parseInt(document.getElementById("wallet").innerHTML);
    var price = parseInt(document.getElementById("empPrice").innerHTML);
    var emp = parseInt(document.getElementById("howmanyEMP").innerHTML);

    
    if(emp >= 1){
        document.getElementById("wallet").innerHTML = wallet + price*emp;
        document.getElementById("howmanyEMP").innerHTML = 0;
    }
}
//JAMMER
function craftJAM(){

    var steel = parseInt(document.getElementById("storedSteel").innerHTML);
    var poly = parseInt(document.getElementById("storedPoly").innerHTML);
    var circ = parseInt(document.getElementById("storedCirc").innerHTML);
    var solder = parseInt(document.getElementById("storedSolder").innerHTML);
    var cables = parseInt(document.getElementById("storedCables").innerHTML);
    var jam = parseInt(document.getElementById("howmanyJAM").innerHTML);

    if (steel >= 6){
        if(poly >= 3){
            if(circ >= 3){
                if(solder >= 1) {
                    if(cables >= 2){
                        windowJAM();
                        document.getElementById("storedSteel").innerHTML = steel - 6;
                        document.getElementById("storedPoly").innerHTML = poly - 3;
                        document.getElementById("storedCirc").innerHTML = circ - 3;
                        document.getElementById("storedSolder").innerHTML = solder - 1;
                        document.getElementById("storedCables").innerHTML = cables - 2;
                        document.getElementById("howmanyJAM").innerHTML = jam + 1;
                    }
                }
            }
        }
    } else {
        document.getElementById("erroraudio").play();
        document.getElementById("modalScreenCraft").style.display=['block'];
    }
}
function windowJAM(){
    var modal = document.getElementById("loadJAM");
    modal.style.display=['block'];
    document.getElementById("buttonCraftJAM").style.display=['none'];
    document.getElementById("click").play();

    setTimeout(()=>{
        document.getElementById("erroraudio").play();
        document.getElementById("craftInProgressJAM").style.display=['none'];
        document.getElementById("craftDoneJAM").style.display=['block'];
        document.getElementById("buttonCraftJAM").style.display=['block'];
    }, 5200);
}
function closeCraftJAM() {
    document.getElementById("click2").play();
    document.getElementById("loadJAM").style.display=['none'];
    document.getElementById("craftDoneJAM").style.display=['none'];  
    document.getElementById("craftInProgressJAM").style.display=['block'];  
}
function sellJAM(){
    var wallet = parseInt(document.getElementById("wallet").innerHTML);
    var price = parseInt(document.getElementById("jamPrice").innerHTML);
    var jam = parseInt(document.getElementById("howmanyJAM").innerHTML);

    
    if(jam >= 1){
        document.getElementById("wallet").innerHTML = wallet + price*jam;
        document.getElementById("howmanyJAM").innerHTML = 0;
    }
}


//botões do craft
function showPC(){
    var screen = document.getElementById("PC");
    var rd = document.getElementById("RADAR");
    var emp = document.getElementById("EMP");
    var jam = document.getElementById("JAMMER");

    if(screen.style.display=='none'){
        screen.style.display=['block'];
        rd.style.display=['none'];
        emp.style.display=['none'];
        jam.style.display=['none'];
    } else if (screen.style.display==['block']){
        screen.style.display=['none'];
    }
}

function showRD(){
    var screen = document.getElementById("RADAR");
    var pc = document.getElementById("PC");
    var emp = document.getElementById("EMP");
    var jam = document.getElementById("JAMMER");

    if(screen.style.display=='none'){
        screen.style.display=['block'];
        pc.style.display=['none'];
        emp.style.display=['none'];
        jam.style.display=['none'];
    } else if (screen.style.display==['block']){
        screen.style.display=['none'];
    }
}

function showEmp(){
    var screen = document.getElementById("EMP");
    var pc = document.getElementById("PC");
    var rd = document.getElementById("RADAR");
    var jam = document.getElementById("JAMMER");

    if(screen.style.display=='none'){
        screen.style.display=['block'];
        pc.style.display=['none'];
        rd.style.display=['none'];
        jam.style.display=['none'];
    } else if (screen.style.display==['block']){
        screen.style.display=['none'];
    }
}

function showJam() {
    var screen = document.getElementById("JAMMER");
    var pc = document.getElementById("PC");
    var rd = document.getElementById("RADAR");
    var emp = document.getElementById("EMP");

    if(screen.style.display=='none'){
        screen.style.display=['block'];
        pc.style.display=['none'];
        rd.style.display=['none'];
        emp.style.display=['none'];
    } else if (screen.style.display==['block']){
        screen.style.display=['none'];
    }
}

function closeIntro() {
    document.getElementById("modalScreenIntro").style.display=['none'];
}