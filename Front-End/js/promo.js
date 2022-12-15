/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS
let nome          = document.querySelector('#nome')
let descricao = document.querySelector('#descricao')


// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = require('../json/cards-promo.json')

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
       
    
        let qtdPromocoes = (dados.promocoes.length)
        
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
   
    nome.textContent          = dados.promocoes[i].nome
    descricao.textContent = dados.promocoes[i].descricao
   
}

// SELECIONAR TODOS OS CARDS por class

let nomesPromocoes      = document.getElementsByClassName('nome')
let nomeDescricao = document.getElementsByClassName('descricao')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    
nomesPromocoes[i].textContent         = dados.promocoes[i].nome
nomeDescricao [i].textContent = dados.promocoes[i].descricao
 
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
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

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)

desenharCarta(1)
desenharCarta(2)
desenharCarta(3)



