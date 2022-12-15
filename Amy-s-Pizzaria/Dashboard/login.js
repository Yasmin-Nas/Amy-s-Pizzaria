'use strict'

const login = {

    nome: 'abc',
    senha: '123'

}

const getLogin = (dados) => {

    const form = document.querySelector('form')
    const nome = document.getElementById('user').value
    const senha =  document.getElementById('password').value

    if (form.reportValidity()){

        if (dados.nome == nome && dados.senha == senha) {
            
            

        }

    }
}

document.getElementById("buttom-sent").addEventListener('click', () => {

    getLogin(login)
    console.log(getLogin())

})