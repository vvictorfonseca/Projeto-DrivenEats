//Variáveis//

let tem_prato = false;
let tem_refri = false;
let tem_sobremesa = false;

let precoPrato;
let precoRefri;
let precoSobremesa;
let total;
let totalArredondado;

let prato;
let refrigerante;
let sobremesa;

let mensagem;

//Pratos//

/*function prato1 () {
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
    refrigerante = "Coca-Cola";
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
    refrigerante = "Pepsi";
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
    refrigerante = "Guaraná";
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
    refrigerante = "Fanta";
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
}*/

//Prato//

function escolherPrato(opcaoPrato) {
    const selecionado = document.querySelector(".prato-2.selecionado");
    console.log(selecionado);
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }
    
    const prato = document.querySelector("#"+opcaoPrato);
    prato.classList.toggle("selecionado");

    tem_prato = true;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//Bebidas//

function escolherBebida(opcaoBebida) {
    const selecionado = document.querySelector(".bebida-2.selecionado");
    console.log(selecionado);
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }
    
    const bebida = document.querySelector("#"+opcaoBebida);
    bebida.classList.toggle("selecionado");

    tem_refri = true;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//Sobremesa//

function escolherSobremesa(opcaoSobremesa) {
    const selecionado = document.querySelector(".sobremesa-2.selecionado");
    console.log(selecionado);
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }
    
    const sobremesa = document.querySelector("#"+opcaoSobremesa);
    sobremesa.classList.toggle("selecionado");

    tem_sobremesa = true;

    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//Funcionalidade para ativar o botão de Fechar Pedido//

function ativarBotão() {

    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar Pedido";
}

//Funcionalidade para mensagem enviado via WPP//

function finalizarPedido() {
    
    total = precoPrato + precoRefri + precoSobremesa;
    totalArredondado = total.toFixed(2);

    let nome= prompt("Pode nos informar seu nome?");
    let endereço= prompt("Nos informe endereço para entrega")

    mensagem = `Olá, gostaria de fazer um pedido: \n\n- Prato: ${prato} \n- Bebida: ${refrigerante} \n- Sobremesa: ${sobremesa} \n\n Total: ${totalArredondado} \n\n Nome: ${nome} \n Endereço de destino: R$${endereço}`;

    window.open("https://wa.me/5524999642965?text=" + encodeURI (mensagem));
}
