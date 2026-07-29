//window.alert('Teste')

const href = window.location.href
//console.log(href)

const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList
console.log(h1Classes)

function callbackh1(){
     console.log('Clicou em',h1Selecionado.innerHTML)
}

h1Selecionado.addEventListener('click', callbackh1)

//EXERCÍCIOS

// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const selecionarAtivo = document.querySelector(".ativo")
console.log(selecionarAtivo.innerHTML)

// Retorne a linguagem do navegador

console.log(window.navigator.language)

// Retorne a largura da janela 

console.log(window.innerWidth)
