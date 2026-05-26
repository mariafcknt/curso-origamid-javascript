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


