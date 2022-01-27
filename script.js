let tem_prato = false;
let tem_refri = false;
let tem_sobremesa = false;

let precoPrato;
let precoRefri;
let precoSobremesa;
let total;

let prato;
let refrigerante;
let sobremesa;

//Pratos//

function prato1 () {
    document.getElementById("prato_1").style.borderColor = "#32B72F";
    document.getElementById("prato_2").style.borderColor = "white";
    document.getElementById("prato_3").style.borderColor = "white";
    document.getElementById("prato_4").style.borderColor = "white";

    tem_prato = true;
    prato = "Frango Yin Yang";
    precoPrato = 14.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function prato2 () {
    document.getElementById("prato_1").style.borderColor = "white";
    document.getElementById("prato_2").style.borderColor = "#32B72F";
    document.getElementById("prato_3").style.borderColor = "white";
    document.getElementById("prato_4").style.borderColor = "white";

    tem_prato = true;
    prato = "Hamburguer";
    precoPrato = 18.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function prato3 () {
    document.getElementById("prato_1").style.borderColor = "white";
    document.getElementById("prato_2").style.borderColor = "white";
    document.getElementById("prato_3").style.borderColor = "#32B72F";
    document.getElementById("prato_4").style.borderColor = "white";

    tem_prato = true;
    prato = "Pizza Marguerita";
    precoPrato = 20.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function prato4 () {
    document.getElementById("prato_1").style.borderColor = "white";
    document.getElementById("prato_2").style.borderColor = "white";
    document.getElementById("prato_3").style.borderColor = "white";
    document.getElementById("prato_4").style.borderColor = "#32B72F";

    tem_prato = true;
    prato = "Lasanha Bolonhesa";
    precoPrato = 16

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//Bebidas//

function refri1 () {
    document.getElementById("refri_1").style.borderColor = "#32B72F";
    document.getElementById("refri_2").style.borderColor = "white";
    document.getElementById("refri_3").style.borderColor = "white";
    document.getElementById("refri_4").style.borderColor = "white";

    tem_refri = true;
    refrigerante = "Coquinha gelada";
    precoRefri = 4.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function refri2 () {
    document.getElementById("refri_1").style.borderColor = "white";
    document.getElementById("refri_2").style.borderColor = "#32B72F";
    document.getElementById("refri_3").style.borderColor = "white";
    document.getElementById("refri_4").style.borderColor = "white";

    tem_refri = true;
    refrigerante = "Pepsi gelado";
    precoRefri = 4.50;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function refri3 () {
    document.getElementById("refri_1").style.borderColor = "white";
    document.getElementById("refri_2").style.borderColor = "white";
    document.getElementById("refri_3").style.borderColor = "#32B72F";
    document.getElementById("refri_4").style.borderColor = "white";

    tem_refri = true;
    refrigerante = "Guaraná gelado";
    precoRefri = 4.00;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function refri4 () {
    document.getElementById("refri_1").style.borderColor = "white";
    document.getElementById("refri_2").style.borderColor = "white";
    document.getElementById("refri_3").style.borderColor = "white";
    document.getElementById("refri_4").style.borderColor = "#32B72F";

    tem_refri = true;
    refrigerante = "Fanta gelada";
    precoRefri = 4.30;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//sobremesas//

function sobremesa1 () {
    document.getElementById("sobremesa_1").style.borderColor = "#32B72F";
    document.getElementById("sobremesa_2").style.borderColor = "white";
    document.getElementById("sobremesa_3").style.borderColor = "white";
    document.getElementById("sobremesa_4").style.borderColor = "white";

    tem_sobremesa = true;
    sobremesa = "Torta Alemã";
    precoSobremesa = 8.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function sobremesa2 () {
    document.getElementById("sobremesa_1").style.borderColor = "white";
    document.getElementById("sobremesa_2").style.borderColor = "#32B72F";
    document.getElementById("sobremesa_3").style.borderColor = "white";
    document.getElementById("sobremesa_4").style.borderColor = "white";

    tem_sobremesa = true;
    sobremesa = "Açaí com Frutas";
    precoSobremesa = 12.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function sobremesa3 () {
    document.getElementById("sobremesa_1").style.borderColor = "white";
    document.getElementById("sobremesa_2").style.borderColor = "white";
    document.getElementById("sobremesa_3").style.borderColor = "#32B72F";
    document.getElementById("sobremesa_4").style.borderColor = "white";

    tem_sobremesa = true;
    sobremesa = "Red Velvet";
    precoSobremesa = 9.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

function sobremesa4 () {
    document.getElementById("sobremesa_1").style.borderColor = "white";
    document.getElementById("sobremesa_2").style.borderColor = "white";
    document.getElementById("sobremesa_3").style.borderColor = "white";
    document.getElementById("sobremesa_4").style.borderColor = "#32B72F";

    tem_sobremesa = true;
    sobremesa = "Pudim";
    precoSobremesa = 7.90;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}


function ativarBotão() {

    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar Pedido";
}

function finalizarPedido() {
    
    let total = precoPrato + precoRefri + precoSobremesa;
    totalArredondado = total.tofixed(2);

    let nome= prompt("Pode nos informar seu nome?");
    let endereço= prompt("Nos informe endereço para entrega");

}
