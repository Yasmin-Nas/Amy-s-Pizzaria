'use strict'

const LoadCardPizza = () => {
    
    const dados = Pizzas
    const container = document.getElementById('container-cardsPizzas')

    const creationCards = dados.map(createCard)
    container.replaceChildren(...creationCards)

}

const createCard = (dados) => {

    const infosImg = document.createElement("div")
    infos.classList.add("infos-img")

    const infos = document.createElement("div")
    infos.classList.add("info")

    const div = document.createElement("div")
    div.classList.add("card")
    div.id = `${dados.tipo_produto}${dados.id}`

    const ul = document.createElement("ul")
    const liNome = document.createElement("li")
    const liPreco = document.createElement("li")

    ul.appendChild(liNome)
    ul.appendChild(liPreco)

    const h3Nome = document.createElement("h3")
}

