// const imgs = document.querySelectorAll('img')
//  console.log(imgs)

// imgs.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

// const titulos = document.getElementsByClassName('titulo')
// const titulosArray = Array.from(titulos)

// titulosArray.forEach(function(item){
//     console.log(item)
// })

// const imgs = document.querySelectorAll('img')
//  console.log(imgs)

// imgs.forEach((item, index) => {
//     console.log(item, index)
// })

// imgs.forEach(item => {
//     console.log(item)
// })

// pode ser usado quando não tem nenhum argumento
// let i = 0
// imgs.forEach(() => {
//     console.log(i++)
// })

// let i = 0
// imgs.forEach((item) => console.log(i++)); //ou imgs.forEach(() => console.log(i++));

//EXERCÍCIOS

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

const paragraphs = document.querySelectorAll('p')
//paragraphs.forEach((item) => console.log(item.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i)
