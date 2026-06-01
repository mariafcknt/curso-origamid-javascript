// const lista = document.querySelector('.animais-lista')

// // console.log(lista.children[--lista.children.length])
// // console.log(lista.querySelector('li:last-child'))

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// const mapa = document.querySelector('.mapa')

// //animais.appendChild(tituloContato) //adiciona tituloContato como último filho de animais

// //contato.removeChild(titulo) //remove titulo
// contato.replaceChild(lista, titulo) //lista substitui o titulo

// //contato.insertBefore(animais, mapa) // insere animais antes de mapa (filho de contato)

// //cria e adiciona novoh1 após o mapa
// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo título'
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// console.log(novoh1)

// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')

// const cloneH1 = h1.cloneNode(true); //clona h1 e os filhos (true)

// cloneH1.classList.add('azul')
// faq.appendChild(cloneH1)

//EXERCÍCIOS

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)

const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const firstDt = document.querySelector('.faq dt')
console.log(firstDt)

//OU

//const faq = document.querySelector('.faq')
//const firstDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const firstDd = document.querySelector('.faq dd')
console.log(firstDd)

//OU

const proximoDD = firstDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML

//console.log(faq, animais)
