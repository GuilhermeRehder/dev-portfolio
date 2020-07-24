document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".conteiner").classList.toggle("show-menu"); 
})

document.querySelector("#quant").addEventListener("change", atualizaPreco);
document.querySelector("#js").addEventListener("change", atualizaPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco);
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = "Prazo (" + prazo + " semanas)";
    atualizaPreco();
})



function atualizaPreco(){
    const quant = document.querySelector("#quant").value;
    const JS = document.querySelector("#js").checked;
    const layout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;

    let preco = quant * 100;
    if (JS) preco *= 1.10;
    if (layout) preco += 500;
    let taxaPrazo = 1 - prazo * 0.1;
    preco *= 1 + taxaPrazo;

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2);
}