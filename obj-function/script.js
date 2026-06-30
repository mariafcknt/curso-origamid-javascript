function somar(n1, n2) {
  return n1 + n2
}

// console.log(somar.length) //retorna a quantidade de parâmetros da função

const frutas = ['Uva', 'Maça', 'Banana']

// Array.prototype.mostrarThis = function() { // toda array vai receber a função mostrarThis()
//   console.log(this)
// }

Array.prototype.pop.call(frutas)
// console.log(frutas)

const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo')
})

// console.log(filtro)

// EXERCÍCIOS

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, atual) => {
  atual = atual.innerText
  return atual.length + acumulador
}, 0)
//console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createHtmlElement(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}

console.log(createHtmlElement('p','ativo','Lorem ipsun'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createH1 = createHtmlElement.bind(null, 'h1', 'titulo')

// function createH1(conteudo) {
//   const elemento = document.createElement('h1')
//   elemento.classList.add('titulo')
//   conteudo ? elemento.innerHTML = conteudo : null
//   return elemento
// }

console.log(createH1('Lorem ipsun 2'))