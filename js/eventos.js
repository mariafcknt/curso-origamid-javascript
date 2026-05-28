const img = document.querySelector('img')
function callback(event) {
    console.log(event)
    //console.log('Clicou')
}
//img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')
function callbackLista(event) {
    console.log(event.currentTarget) //clique no animaisLista
    console.log(event.target) //clique no local atual (nesse caso na imagem dos animais)
    console.log(event.type)
}
//animaisLista.addEventListener('click', callbackLista);
//console.log(animaisLista)

const linkExterno = document.querySelector('a[href^="http"]')
function handleLinkExterno(event) {
    event.preventDefault() //impede o comportamento padrão do elemento (ex.: o link ir para outra página)
    //console.log('Clicou')
    console.log(this) //faz referência ao elemento (linkExterno nesse caso)
    console.log(event.currentTarget) //mesma coisa do this
}
linkExterno.addEventListener('click', handleLinkExterno)

// const h1 = document.querySelector('h1')

function handleEvent(event) {
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// //h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)

// window.addEventListener('keydown', handleKeyboard)
// function handleKeyboard(event) {
//     if (event.key === 'a'){
//         document.body.classList.toggle('azul')
//     }
//     console.log(event.key)
// }

const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
    //console.log(img)
})

//EXERCÍCIOS

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

// function handleLink(event) {
//     event.preventDefault();
//     this.classList.toggle('ativo') 
// }

function handleLink(event) {
    event.preventDefault()
    linksInternos.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})

console.log(linksInternos)

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// function handleBody(event){
//     console.log(event.target)
//     event.target.remove()
// }

// document.body.addEventListener('click', handleBody)

//OU

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
    event.currentTarget.remove
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) {
    if(event.key === "t") {
        document.documentElement.classList.toggle('texto-maior')
    }
}

//console.log(textElements)

window.addEventListener('keydown', handleKeyboard)
