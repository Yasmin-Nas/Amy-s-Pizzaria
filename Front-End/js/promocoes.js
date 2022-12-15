let nome = document.querySelector('#nome')
let descricao = document.querySelector('#descricao')


let sectionConteudos = document.querySelector('.conteudos')

const url =require('../json/cards-promo.json')

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
       
    
        let qtdPromocoes = (dados.promocoes.length)
       
        atribuirDados2(dados, i)
    })
} 

function atribuirDados(dados, i) {
   
    nome.textContent          = dados.promocoes[i].nome
    descricao.textContent = dados.promocoes[i].descricao
   
}



let nomesPromocoes      = document.getElementsByClassName('nome')
let nomeDescricao = document.getElementsByClassName('descricao')


function atribuirDados2(dados, i) {
    
nomesPromocoes[i].textContent         = dados.promocoes[i].nome
nomeDescricao [i].textContent = dados.promocoes[i].descricao
 
}


function desenharCarta(id) {
    
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

   

    // NOME 
    let nomesPromocoes = document.createElement("h2")
    nomesPromocoes.setAttribute('class', 'nome')
    carta.appendChild(nomesPromocoes)
    nomesPromocoes.textContent = "Nome"

    // ACOMPANHAMENTOS
    let nomeDescricao = document.createElement("h3")
    nomeDescricao.setAttribute('class', 'descricao')
    carta.appendChild(nomeDescricao)
    nomeDescricao.textContent = "descricao"

    

    pegarDados(id)
}

pegarDados(0)



desenharCarta(1)
desenharCarta(2)
desenharCarta(3)

