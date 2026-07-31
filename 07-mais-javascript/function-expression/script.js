// const somar = function (a,b) {
//     return a + b
// }

// functions expression não são adicionadas ao objeto Window, impedindo assim de alguma função do Window com mesmo nome (close(), por exemplo) ser sobrescrita
// também força com que a função seja declarada antes do uso para funcionar
// const somar = (a, b) => a + b
// const quadrado = a => a * a

// console.log(somar(3, 7))
// console.log(quadrado(4))

// const instrumento = 'Violão';

// // isola o escopo da função
// (function() { // ou (() => {
//     const instrumento = 'Guiterra'
//     console.log(instrumento)
// })()

// console.log(instrumento)

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const jogo = 'Resident Evil';

(() => {
    const jogo = 'Forza Horizon'
    console.log(jogo)
})()

console.log(jogo)

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

const exemplo = n => 'exemplo'

console.log(active(exemplo))
