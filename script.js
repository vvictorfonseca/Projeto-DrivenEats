//Variáveis//

let tem_prato = false;
let tem_refri = false;
let tem_sobremesa = false;

let precoPrato = null;
let precoRefri = null;
let precoSobremesa = null;
let total = null;
let totalArredondado = null;

let pratoSelecionado = null;
let refriSelecionado = null;
let sobremesaSelecionada = null;

let mensagem;

//Prato//

function escolherPrato(opcaoPrato, pratoEscolhido, precoPratoEscolhido) {
    const selecionado = document.querySelector(".prato-2.selecionado");
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }
    
    const prato = document.querySelector("#"+opcaoPrato);
    prato.classList.toggle("selecionado");

    pratoSelecionado = pratoEscolhido;
    precoPrato = precoPratoEscolhido
    

    document.querySelector("#icon-prato1").style.display = "none";
    document.querySelector("#icon-prato2").style.display = "none";
    document.querySelector("#icon-prato3").style.display = "none";
    document.querySelector("#icon-prato4").style.display = "none";
    const img = prato.getElementsByClassName("icon-verde")[0];
    img.style.display = "block";
   
    
   tem_prato = true;
   if (tem_prato && tem_refri && tem_sobremesa) {
       ativarBotão()
   }
}

//Bebidas//

function escolherBebida(opcaoBebida, bebidaEscolhida, precoRefriEscolhido) {
    const selecionado = document.querySelector(".bebida-2.selecionado");
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }
    
    const bebida = document.querySelector("#"+opcaoBebida);
    bebida.classList.toggle("selecionado");

    refriSelecionado = bebidaEscolhida;
    precoRefri = precoRefriEscolhido;

    document.querySelector("#icon-bebida1").style.display = "none";
    document.querySelector("#icon-bebida2").style.display = "none";
    document.querySelector("#icon-bebida3").style.display = "none";
    document.querySelector("#icon-bebida4").style.display = "none";
    const img = bebida.getElementsByClassName("icon-verde")[0];
    img.style.display = "block";

    tem_refri = true;
    if (tem_prato && tem_refri && tem_sobremesa) {
        ativarBotão()
    }
}

//Sobremesa//

function escolherSobremesa(opcaoSobremesa, sobremesaEscolhida, precoSobremesaEscolhida) {

    //desselecionar a borda  ao  clicar em outra opçao//
    const selecionado = document.querySelector(".sobremesa-2.selecionado");
    console.log(selecionado);
    if(selecionado !== null){
    selecionado.classList.remove("selecionado");
    }

    sobremesaSelecionada = sobremesaEscolhida;
    precoSobremesa = precoSobremesaEscolhida;
    
    //add as bordas verdes//
    const sobremesa = document.querySelector("#"+opcaoSobremesa);
    sobremesa.classList.toggle("selecionado");

    document.querySelector("#icon-sobremesa1").style.display = "none";
    document.querySelector("#icon-sobremesa2").style.display = "none";
    document.querySelector("#icon-sobremesa3").style.display = "none";
    document.querySelector("#icon-sobremesa4").style.display = "none";
    const img = sobremesa.getElementsByClassName("icon-verde")[0];
    img.style.display = "block";

    

    //ativar botão de fechar pedido//
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
    
    let nome= prompt("Pode nos informar seu nome?");
    let endereço= prompt("Nos informe endereço para entrega")

    mensagem = `Olá, gostaria de fazer um pedido: \n\n- Prato: ${pratoSelecionado} \n- Bebida: ${refriSelecionado} \n- Sobremesa: ${sobremesaSelecionada} \n\n Total: R$${totalArredondado} \n\n Nome: ${nome} \n Endereço de destino: ${endereço}`;

    window.open("https://wa.me/5524999642965?text=" + encodeURI (mensagem));
}

function abrirPopUp() {

    total = precoPrato + precoRefri + precoSobremesa;
    totalArredondado = total.toFixed(2);
   
    document.querySelector(".escondido").style.display = "block";

    document.querySelector("#prato-final").innerHTML = `${pratoSelecionado}`;
    document.querySelector("#bebida-final").innerHTML = `${refriSelecionado}`;
    document.querySelector("#sobremesa-final").innerHTML = `${sobremesaSelecionada}`;

    document.querySelector("#preco-prato-final").innerHTML = `R$${precoPrato.toFixed(2)}`;
    document.querySelector("#preco-bebida-final").innerHTML = `R$${precoRefri.toFixed(2)}`;
    document.querySelector("#preco-sobremesa-final").innerHTML = `R$${precoSobremesa.toFixed(2)}`;

    document.querySelector("#preco-final").innerHTML = `R$${totalArredondado}`;
}

function fecharPopUp() {
    
    document.querySelector(".escondido").style.display = "none";
}