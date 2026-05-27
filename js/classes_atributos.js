const menu = document.querySelector('.menu')
menu.classList.add('ativo') 
menu.classList.remove('azul')
//menu.classList.toggle('azul') // adiciona/remove a classe

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}

console.log(menu.classList)

menu.className += ' vermelho'

console.log(menu.className)

const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')
img.setAttribute('alt', 'É uma raposa')
console.log(img.getAttribute('alt'))
console.log(img.hasAttribute('alt'))

//EXERCÍCIOS

// Adicione a classe ativo a todos os itens do menu

const menuItems = document.querySelectorAll('.menu a')
//console.log(menuItems)

menuItems.forEach((item) => {
    item.classList.add('ativo')
    //console.log(item)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// let index = 0;
// menuItems.forEach((item, index) => {
//     if (index != 0) {
//         item.classList.remove('ativo')
//     } 
//     console.log(item)
// })

let index = 0;
menuItems.forEach((item, index) => {
    item.classList.remove('ativo')
})

menuItems[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
    console.log(img.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', "https://www.google.com")
console.log(link.getAttribute('href'))

