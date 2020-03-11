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
/*
TODO:
monetário:
1. implementar a compra;
    1.1. o campo BUY deve verificar uma segunda vez a soma dos valores.
        SE o valor permanecer inalterado, debitar da carteira;
        CASO CONTRÁRIO atualizar o campo de soma e então debitar da carteira;
2. A carteira deve ser perfeitamente capaz de se atualizar;
3. A lista de items armazenados deve obedecer um limite de 10 items cada.

técnico:
1. Implementar o timer que o cart fica em campo pegando itens;
2. implementar o sistema de SALVAGE (1 junk = 25% chance de reverter em STEEL e 10% de chance de reverter em poly, por exemplo);
3. implementar o sistema de venda (1 junk = 10 créditos, etc);
4. implementar o CRAFT (3 junk + 2 solder + 2 circuits = Radar);
5. implementar o sistema de APPLY e SELL TECH;
    5.1. 1 radar = +5% chance de vir Junk no cart;
    5.1 1 radar = 50 créditos, por exemplo;
*/

