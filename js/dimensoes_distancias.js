// const listaAnimais = document.querySelector('.animais-lista')
// const height = listaAnimais.scrollHeight
// const animaisTop = listaAnimais.offsetTop
// console.log(height)
// console.log(animaisTop)

// const primeiroh2 = document.querySelector('h2')
// console.log(primeiroh2.offsetLeft)

// const h2rect = primeiroh2.getBoundingClientRect()
// console.log(h2rect.top)

// if(h2rect.top < 0) {
//     console.log('Passou do elemento')
// }

// console.log(
//     window.innerWidth,
//     window.outerWidth,
//     window.innerHeight,
//     window.outerHeight,
//     window.pageYOffset
// )

// const small = window.matchMedia('(max-width: 600px')

// if(small) {
//     console.log('Usuário mobile')
// } else {
//     console.log('Usuário desktop')
// }

// console.log(small)

//EXERCÍCIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img')
console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens

const listImgs = document.querySelectorAll('img')

let somaWidth = 0
listImgs.forEach((img) => {
    somaWidth += img.width
    //console.log(img.width)
})

console.log(`A primeira soma é ${somaWidth}`)

//OU

function somaImages() {
    const imagens = document.querySelectorAll('img')
    let soma = 0
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth
        console.log(imagem.offsetWidth)
    })
    console.log(`A segunda soma é ${soma}`)
}

window.onload = function() {
    somaImages()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const listLinks = document.querySelectorAll('a')

//console.log(listLinks)

listLinks.forEach((link) => {
    if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {   
        console.log('Possui o tamanho mínimo recomendado')
    } else {
        //console.log(link.offsetHeight, link.offsetWidth)
        console.log('Não possui o tamanho mínimo')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserWidth = window.matchMedia('(max-width: 720px')

if (browserWidth) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
} 
