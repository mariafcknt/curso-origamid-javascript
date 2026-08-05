// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// usado para elementos interáveis
// for (const fruta of frutas) {
//   console.log(fruta)
// }

// const buttons = document.querySelectorAll('button')

// for(const button of buttons) {
//   button.style.color = 'blue'
// }

// console.log(...buttons)

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

// usado para elementos não interáveis
// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }

// for (const key in carro) {
//   console.log(key, carro[key])
// }

// const btnUnico = document.querySelector('button')
// const btnStyles = getComputedStyle(btnUnico)

// for(const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`)
// }

// let i = 0
// do {
//   console.log(i++)
// } while (i <= 5)

// EXERCÍCIOS

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li')

for(const li of lis) {
  li.classList.add('active')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const item in window){
  // console.log(`${item}: ${window[item]}`)
}