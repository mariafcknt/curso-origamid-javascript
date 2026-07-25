//EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const buscarCep = document.getElementById('buscarCep')
const btn = document.querySelector('.btn')
btn.addEventListener('click', handleClick)

function handleClick(event) {
    const cepInput = buscarCep.elements.cep.value
    const cepChar = String(cepInput).length
    const erro = document.querySelector('.erro')

    if(cepInput && cepChar === 8) {
        erro.classList.remove('ativo')
        console.log(cepInput)
    } else {
        erro.classList.add('ativo')
    }
}

const endereco = document.createElement('div')
endereco.classList.add('endereco')
document.body.appendChild(endereco)

console.log(endereco)

const cep = '01001000'

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(body => {
    console.log(body)
    console.log(body.bairro)

    //endereco.innerText = body.bairro
})

//TODO: adicionar todos os itens do json (bairro, cidade, etc na div com forEach)


