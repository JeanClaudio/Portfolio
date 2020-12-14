

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); /* foi colocado a classe .hamburguer do html em uma var, depois foi pego essa variavel e adicionado um "addEventListener" que detecta quando um "click" acontece nessa variavel. Com isso foi criado uma função que seleciona a classe .container do html e adiciona mais uma classe chamada "show-menu" usando o comando "classList.toggle"*/