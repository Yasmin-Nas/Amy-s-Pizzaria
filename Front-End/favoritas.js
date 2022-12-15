
let imgFoto       = document.querySelector('#foto')
let nome          = document.querySelector('#nome')
let ingrediente = document.querySelector('#ingrediente')

let sectionConteudos = document.querySelector('.conteudos')


const url = './json/favoritas.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
      
        let qtdFavoritas = (dados.favoritas.length)
       
        atribuirDados2(dados, i)
    })
} 

function atribuirDados(dados, i) {

    imgFoto.setAttribute('src', "images/pride/"+dados.favoritas[i].foto)
    nome.textContent          = dados.favoritas[i].nome
    ingrediente.textContent = dados.favoritas[i].ingrediente
   
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesPizzas       = document.getElementsByClassName('nome')
let ingredienteFav = document.getElementsByClassName('ingrediente')



function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "../Front-End/img/"+dados.favoritas[i].foto)
    nomesPizzas[i].textContent         = dados.favoritas[i].nome
    ingredienteFav[i].textContent = dados.favoritas[i].ingrediente
   
}


function desenharCarta(id) {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    
    const containerCards = document.createElement('div')
    
    containerCards.appendChild(carta)   
    sectionConteudos.appendChild(containerCards)


    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', '../Front-End/img/calabresa.png')

    
    let nomesPizzas = document.createElement("h2")
    nomesPizzas.setAttribute('class', 'nome')
    carta.appendChild(nomesPizzas)
    nomesPizzas.textContent = "nome"

    
    let ingredienteFav = document.createElement("h3")
    ingredienteFav.setAttribute('class', 'ingrediente')
    carta.appendChild(ingredienteFav)
    ingredienteFav.textContent = "ingrediente"

    

    pegarDados(id)
}

pegarDados(0)


desenharCarta(1)
desenharCarta(2)
desenharCarta(3)

const loadCrads = async () => {


}