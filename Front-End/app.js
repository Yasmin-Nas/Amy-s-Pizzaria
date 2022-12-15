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


let nome          = document.querySelector('#nome')
let acompanhamentos = document.querySelector('#acompanhamentos')

let sectionConteudos = document.querySelector('.conteudos')

const url = 'cards.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
       
    
        let qtdPizza = (dados.ingredientes.length)

        atribuirDados2(dados, i)
    })
} 
function atribuirDados(dados, i) {
   
    nome.textContent          = dados.ingredientes[i].nome
    acompanhamentos.textContent = dados.ingredientes[i].acompanhamentos
   
}



let nomesPizza      = document.getElementsByClassName('nome')
let nomeAcompanhamentos = document.getElementsByClassName('acompanhamentos')


function atribuirDados2(dados, i) {
    
    nomesPizza[i].textContent         = dados.ingredientes[i].nome
nomeAcompanhamentos [i].textContent = dados.ingredientes[i].acompanhamentos
 
}


function desenharCarta(id) {
    

    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

   

    // NOME 
    let nomesPizza = document.createElement("h2")
    nomesPizza.setAttribute('class', 'nome')
    carta.appendChild(nomesPizza)
    nomesPizza.textContent = "Nome"

    // ACOMPANHAMENTOS
    let nomeAcompanhamentos = document.createElement("h3")
    nomeAcompanhamentos.setAttribute('class', 'acompanhamentos')
    carta.appendChild(nomeAcompanhamentos)
    nomeAcompanhamentos.textContent = "acompanhamentos"

    

    pegarDados(id)
}

pegarDados(0)


desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)
desenharCarta(5)
desenharCarta(6)
desenharCarta(7)
desenharCarta(8)
desenharCarta(9)
desenharCarta(10)





