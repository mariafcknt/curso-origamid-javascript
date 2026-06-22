// // parseFloat() && parseInt() - retorna um número a partir de uma string
// console.log(parseFloat('32424.45')) // 32424.45
// console.log(parseFloat('32424,45')) // 32424
// console.log(parseFloat('100 reais')) // 100

// console.log(parseInt(23.9)) // 23
// console.log(parseInt('100.25 reais')) // 100

// // toFixed() - arredonda o número com base no total de casas decimais no argumento
// const preco = 2.99
// console.log(preco.toFixed()) // 3
// console.log(+preco.toFixed() + 2) // +preco - converte string de volta para número 

// const carro = 1000.455
// console.log(carro.toFixed(2)) // 1000.46

// const preco2 = 1499.49
// console.log(preco2.toFixed()) // 1499 - arredondou pra baixo

// console.log((99.99).toFixed()) //100

// // toLocaleString(lang, options) - formata um número de acordo com a língua e opções passadas
// let valor = 48.49
// valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// console.log(valor)

// //Math - objeto com funções matemáticas
// console.log(Math.PI) //retorna o valor de Pi
// console.log(Math.abs(-5.5)) //5.5 - retorna o valor absoluto
// console.log(Math.ceil(4.8334)) //5 - arredonda para um valor acima
// console.log(Math.floor(4.8334)) //4 - arredonda para um valor abaixo
// console.log(Math.round(4.8334)) //5 - arredonda para o inteiro mais próximo
// console.log(Math.round(4.3)) //4

// console.log(Math.max(4,5,34,54)) // 54 - retorna o valor maior
// console.log(Math.min(4,5,34,54)) // 4 - retorna o valor menor

// console.log(Math.random()) // gera um número aleatório entre 0 e 1
// console.log(Math.random() * 100) // gera um número aleatório entre 0 e 100
// console.log(Math.random() * (72 - 32 + 1) + 32) // gera um número aleatório entre 72 e 32 (max - min + 1) + min)

// EXERCÍCIOS

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.random() * (2000 - 1050 + 1) + 1050)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let arrayNumeros = numeros.split(',')
// console.log(Math.max(...arrayNumeros)) //"..." coloca cada item do array como argumento

let maiorNumero = 0;
arrayNumeros.forEach((numero) => {
  numero = Number.parseInt(numero)
  //console.log(numero)
  if (numero > maiorNumero) {
    maiorNumero = numero
  }
});

console.log(maiorNumero)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

// let somaPrecos = 0;                     
// listaPrecos.forEach((preco) => {
//   preco = preco.replace(/[ ]+/g, '')
//   preco = preco.split('$')
//   let valor = preco[1]
//   if (valor) {
//     valor = valor.replace(/[,]+/g, '.')
//     valor = Number.parseFloat(valor)
//     //ao multiplicar torna o valor um inteiro, e ao dividir o valor torna a ser decimal/adiciona uma casa decimal
//     valor = Math.round(valor * 100) / 100 
//     console.log(valor)
//     somaPrecos += valor
//   }
// })  

function somarPreco(lista) {
  let somaPrecos = 0
  lista.forEach((preco) => {
    preco = preco.replace(/[ ]+/g, '')
    preco = preco.split('$')

    let valor = preco[1]
    valor = +valor.replace(/[,]+/g, '.')
    valor = +valor.toFixed(2)
    somaPrecos += valor
  })
  return somaPrecos
}

const totalPrecos = somarPreco(listaPrecos)
//console.log(`A soma é ${somarPreco(listaPrecos)}`)
console.log('A soma é R$',totalPrecos)

//Solução Origamid

function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
limparPreco(listaPrecos[1])