//Trocar a imagem da lampada quando o usuário apertar um botão
//cada variavel irá conter a imagem de uma lampada.
//o evento trocará o display da imagem que está na tela, deixando-o com display none e em seguida trocando o display da imagem que está o botao para imagem com display flex.

let lampDesligada = document.getElementById("lampDesliagada");
let lampAcesa = document.getElementById("lampAcesa");
let lampQuebr = document.getElementById("lampQuebr");
let lampCuriosa = document.getElementById("lampCuriosa");
let lampDoente = document.getElementById("lampDoente");
let lampSedutora = document.getElementById("lampSedutora");

let bDesligar = document.getElementById("bDesligado");
let bLigar = document.getElementById("bLigar");
let bQuebr = document.getElementById("bQuebr");
let bCuriosa = document.getElementById("bCuriosa");
let bDoente = document.getElementById("bDoente");
let bSedutora = document.getElementById("bSedutora");

bDesligar.addEventListener("click", desligar);
bLigar.addEventListener("click", ligar);
bQuebr.addEventListener("click", lampaQubr);
bCuriosa.addEventListener("click", lampaCuriosa);
bDoente.addEventListener("click", lampaDoente);
bSedutora.addEventListener("click", lampaSedutora);


function lampaSedutora () {
    lampDesligada.style.display = "none";
    lampAcesa.style.display = "none";
    lampQuebr.style.display = "none";
    lampCuriosa.style.display = "none";
    lampDoente.style.display = "none";
    lampSedutora.style.display = "flex";
}

function lampaDoente () {
    lampDesligada.style.display = "none";
    lampAcesa.style.display = "none";
    lampQuebr.style.display = "none";
    lampCuriosa.style.display = "none";
    lampDoente.style.display = "flex";
    lampSedutora.style.display = "none";
}

function lampaCuriosa () {
    lampDesligada.style.display = "none";
    lampAcesa.style.display = "none";
    lampQuebr.style.display = "none";
    lampCuriosa.style.display = "flex";
    lampDoente.style.display = "none";
    lampSedutora.style.display = "none";
}

function lampaQubr (){
    lampDesligada.style.display = "none";
    lampAcesa.style.display = "none";
    lampQuebr.style.display = "flex";
    lampCuriosa.style.display = "none";
    lampDoente.style.display = "none";
    lampSedutora.style.display = "none";
}

function ligar(){
    lampDesligada.style.display = "none";
    lampAcesa.style.display = "flex";
    lampQuebr.style.display = "none";
    lampCuriosa.style.display = "none";
    lampDoente.style.display = "none";
    lampSedutora.style.display = "none";
}

function desligar () {
    lampDesligada.style.display = "flex";
    lampAcesa.style.display = "none";
    lampQuebr.style.display = "none";
    lampCuriosa.style.display = "none";
    lampDoente.style.display = "none";
    lampSedutora.style.display = "none";
}




