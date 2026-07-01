// const moto = {}

// definição do objeto moto
// Object.defineProperties(moto, { 
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudar valor
//     writible: false, // impede mudança de valor
//   }
// })

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true, // permite que a key seja usada em loops
//     get() {
//       return this._rodas
//     },
//     set() {
//       this._rodas = 4
//     }
//   }
// })

// EXERCÍCIOS

// Crie uma função que verifique
// corretamente o tipo de dado

function checkType (dado) {
  let type = Object.prototype.toString.call(dado)
  type = type.replace('[object ', '').replace(']', '')
  return type
}

console.log(checkType(''))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  }  
})

console.log(quadrado.lados)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))