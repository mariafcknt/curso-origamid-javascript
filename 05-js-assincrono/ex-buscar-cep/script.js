//EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

let cepInput = document.getElementById('cep')
const btn = document.querySelector('.btn')
btn.addEventListener('click', handleClick)
// cepInput.addEventListener('keyup', handleClick) // solução alternativa

const erro = document.querySelector('.erro')
const endereco = document.querySelector('ul')
const resultado = document.querySelector('.resultado')

function handleClick(event) {
    console.log(event)
    cepInput = formatCep(cepInput.value)
    removeActiveClass(resultado)

    if(cepInput.length === 8) {
        removeActiveClass(erro)
        fetchCep(cepInput)
    } else {
        addActiveClass(erro)
    }
}

function formatCep(cep) {
    cep = String(cep)
    if (cep.includes('-')) {
        cep = cep.replace('-', '')
    }
    return cep
}

function addActiveClass(element) {
    element.classList.add('active')
}

function removeActiveClass(element) {
    element.classList.remove('active')
}

function addInfoInHtml(chave, valor, container) {
    const li = document.createElement('li')
    li.innerHTML = `<b>${chave}:</b> ${valor}`
    container.appendChild(li)
}

function formatResponse(body){
    endereco.innerHTML = ''
    addActiveClass(resultado)
    body = Object.entries(body)
    body.forEach(item => {
        let chave = item[0]
        let valor = item[1]
        chave = formatInfo(chave)
        addInfoInHtml(chave, valor, endereco)
    })
}

function formatInfo(chave) {
    if (chave.length <= 5) {
        chave = chave.toUpperCase()
    } else {
        chave = chave.charAt(0).toUpperCase() + chave.slice(1)
    }

    if (chave === 'Regiao'){
        chave = 'Região'
    }

    return chave
}

function fetchCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => {
        if (body.erro) {
            erro.innerText = '⚠️ CEP não encontrado'
            addActiveClass(erro)
        } else {
            formatResponse(body)
        }
    })
    .catch(() => {
        erro.innerText = '⚠️ Erro ao pesquisar CEP'
        addActiveClass(erro)
    })
}

