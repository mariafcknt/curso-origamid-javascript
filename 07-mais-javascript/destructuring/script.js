// const carro = {
//     marca: 'Honda',
//     ano: 2018
// }

// const {marca, ano} = carro

// console.log(marca)
// console.log(ano)

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

// console.log(fisicas);
// console.log(livros);
// console.log(videos);
// console.log(digitais);

// const cliente = {
//     nome: 'Ana',
//     compras: 10,
//     email: 'ana@gmail.com'
// }

// // cria uma variavel chamada nomeCliente que vai receber o valor de nome
// const {nome: nomeCliente, email = 'email@gmail.com'} = cliente
// // email = xxx coloca um valor padrão para email caso não haja email no objeto cliente

// console.log(email) // ana@gmail.com

// const frutas = ['Banana', 'Uva', 'Morango']

// const [primeira, segunda, terceira] = frutas
// console.log(primeira) // banana

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']
// console.log(terceiro) // Item 3

// {key} acessa os atributos key e keyCode do objeto event
// function handleKeyboard({key, keyCode}) {
//     console.log(event.key)
// }

// document.addEventListener('keyup', handleKeyboard)

// EXERCÍCIOS

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
// getComputedStyle pega os estilos computados do elemento
const btnStyles = getComputedStyle(btn);
const {backgroundColor, color, margin} = btnStyles
console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor)