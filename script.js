

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); /* foi colocado a classe .hamburguer do html em uma var, depois foi pego essa variavel e adicionado um "addEventListener" que detecta quando um "click" acontece nessa variavel. Com isso foi criado uma função que seleciona a classe .container do html e adiciona mais uma classe chamada "show-menu" usando o comando "classList.toggle"*/

document.querySelector("#qtde").addEventListener('change', atualizarPreco)
document.querySelector("#js").addEventListener('change', atualizarPreco)
document.querySelector("#layout-sim").addEventListener('change', atualizarPreco)
document.querySelector("#layout-nao").addEventListener('change', atualizarPreco)
document.querySelector("#prazo").addEventListener('change', function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`
    atualizarPreco()
} )

function atualizarPreco(){

    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluilayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde*100;
    if (temJS)   preco *= 1.1 
    if (incluilayout)   preco += 500 
    let taxaUrgencia = 1- prazo*0.1;
    preco *= 1+taxaUrgencia

    document.querySelector("#preco").innerHTML=`R$ ${preco.toFixed(2)}` 
}
