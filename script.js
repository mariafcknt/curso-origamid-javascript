const lista = document.querySelector('.animais-lista')

console.log(lista.children[--lista.children.length])
console.log(lista.querySelector('li:last-child'))

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const tituloContato = contato.querySelector('.titulo')

animais.appendChild(tituloContato) //adiciona tituloContato como último filho de animais