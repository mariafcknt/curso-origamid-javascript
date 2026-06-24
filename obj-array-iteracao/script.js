// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach(function(item, index, array) {
//   console.log(item, index, array)
// })

// const li = document.querySelectorAll('li')

// const retorno = li.forEach((i) => i.classList.add('ativa'))
// console.log(retorno) // forEach sempre retorna undefined porque o objetivo dele não é o retorno, e sim o que vai ser feito com o item

// const carros = ['Ford', 'Fiat', 'Honda']

// // o map sempre vai retornar um array
// const novaArray = carros.map((item, index, array) => {
//   console.log(item, index, array) 
//   return index
// })

// console.log(novaArray)
// /* retorno = [undefined, undefined, undefined] 
// O retorno de novaArray vai ser o retorno de cada iteração (e como não tem return nas iterações, não retorna nada)

// Com o return index, o retorno vira [0, 1, 2]
// */

// const numeros = [2, 4, 5, 6, 78]
// const numerosX2 = numeros.map(n => n * 2) // se não tem chaves é o retorno direto (n * 2)
// console.log(numerosX2)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min) 
// console.log(tempoAulas)

// function nomeAulas(aula) {
//   return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)
// console.log(arrayNomeAulas)

// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   // console.log(acumulador, item, index)
//   return acumulador + item
// }, 0)

// console.log(reduceAulas)

// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

// const numeros = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numeros.reduce((acumulador, atual) => {
//   // return anterior > atual ? anterior : atual;
//   if(acumulador > atual)
//     return acumulador
//   else
//     return atual
// }, 0)

//console.log(maiorNumero)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome
//   console.log(acumulador)
//   return acumulador
// }, {})

// console.log()

const frutas = ['Banana', 'Pêra', 'Uva', '']

// const temUva = frutas.some((item) => {
//   return item === 'Uva'
// })

// console.log(temUva)

// const every = frutas.every((fruta) => {
//   return fruta
// })

// console.log(every)

const indexUva = frutas.findIndex(item => {
  return item === 'Uva' // retorna 2, a posição de 'Uva' no array
})

// console.log(indexUva)

// const numeros = [6, 43, 22, 88, 101, 29]

// // verifica se todos são maiores que 3
// const maiorQue3 = numeros.every(n => n > 3)
// console.log(maiorQue3)

// const frutas1 = ['Banana', undefined, null, '', 0, 'Pêra', 'Uva', '']

// const arrayFrutas = frutas1.filter((item) => {
//   return item // retorna todos os itens true
// })

// console.log(arrayFrutas)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const maiores15 = aulas.filter((aula) => {
//   return aula.min > 15
// })

// console.log(maiores15)

// EXERCÍCIOS

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')

const cursosArray = Array.from(cursos)

const cursosObj = cursosArray.reduce((acumulador, curso, index) => {
  const cursoTitulo = curso.children[0].innerHTML
  const cursoDescricao = curso.children[1].innerHTML
  const cursoAulas = curso.children[2].innerHTML
  const cursoHoras = curso.children[3].innerHTML

  acumulador[index] = {
    titulo: cursoTitulo,
    descricao: cursoDescricao,
    aulas: +cursoAulas,
    horas: +cursoHoras
  }

  return acumulador
}, [])

console.log(cursosObj)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
