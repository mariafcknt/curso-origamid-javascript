const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

// console.log(gridSectionHTML[0])
// console.log(gridSectionNode.length)

gridSectionNode.forEach(function(item, index) {
    console.log(index)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item) {
    console.log(item)
})

//EXERCÍCIOS

// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img')
console.log(allImages)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const startsWithImage = document.querySelectorAll('img[src^="img/imagem"]')
console.log(startsWithImage)

// Selecione todos os links internos (onde o href começa com #)
const startsWithHash = document.querySelectorAll('a[href^="#"]')

//Exibe conteúdo do link
startsWithHash.forEach(function(item, index, array) {
    console.log(item.innerHTML)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2')
//ou
const animaisFirstH2 = animais.querySelector('h2')
console.log(firstH2, animaisFirstH2)

// Selecione o último p do site
const arrayP = document.querySelectorAll('p')
console.log(arrayP[arrayP.length - 1]) //ou arraP[--arrayP.length]

