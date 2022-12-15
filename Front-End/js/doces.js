let nome          = document.querySelector('#nome')
let acompanhamentos = document.querySelector('#acompanhamentos')

let sectionConteudos = document.querySelector('.conteudos')

const url = '../json/doces.json'

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

function desenharCarta() {
    

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

    

}

pegarDados()







