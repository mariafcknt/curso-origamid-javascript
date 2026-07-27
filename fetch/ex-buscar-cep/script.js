//EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const buscarCep = document.getElementById('buscarCep')
const btn = document.querySelector('.btn')
btn.addEventListener('click', handleClick)

function handleClick(event) {
    let cepInput = buscarCep.elements.cep.value
    cepInput = formatCep(cepInput)

    const erro = document.querySelector('.erro')

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

function showEndereco(body) {
    //body = body.replace('"','')
    
    const endereco = document.createElement('div')
    endereco.classList.add('endereco')
    document.body.appendChild(endereco)
    //endereco.innerText = body
}

function formatResponse(body){
    //console.log(body)
  //  body = body(ne)
    body.forEach(item => {
        console.log(item)
    })
}


function fetchCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(body => {
            showEndereco(body)
            formatResponse(body)
            return
        })
}


//TODO: adicionar todos os itens do json (bairro, cidade, etc na div com forEach)


