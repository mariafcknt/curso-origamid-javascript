// const li = document.querySelectorAll('li')

// const arrayLi = Array.from(li) //Array.from() transforma array-like objects em um array

// console.log(li)
// console.log(arrayLi)

// console.log(Array.isArray(arrayLi)) //verifica se á array

// const instrumentos = ['Guitarra', 'Baixo', 'Violão']
// instrumentos.sort() //organiza por ordem alfabética
// console.log(instrumentos)

// const numeros = [1,4,32,2,56,6,78]
// numeros.sort() // organiza por ordem alfabética (por caracteres, mesmo sendo números)
// console.log(numeros)

// const carros = ['Ford', 'Fiat', 'VW']
// carros.unshift('Kia', 'Ferrari') // adiciona os itens no início do array
// carros.push('Porsche', 'Toyota') // adiciona os itens no final do array
// carros.pop() //tira o último item da lista (Toyota)
// carros.shift() //tira o primeiro item da lista (Kia)
// console.log(carros)
// //console.log(carros.reverse()) // inverte a ordem da lista

// console.log(['item1', 'item2'].fill('teste', 1)) // substitui os valores do array por 'teste' 

// const transporte1 = ['Barco', 'Avião']
// const transporte2 = ['Carro', 'Moto']
// console.log(transporte1.concat(transporte2), 'Van', 'Bicicleta') // concatena os arrays sem modificá-los
// console.log([].concat('item'))

const linguagens = ['html','css','js','php','python','java','js']

// console.log(linguagens.includes('css')) // verifica se o item existe no array e retorna um boolean
// console.log(linguagens.indexOf('python')) // retorna o index do item no array
// console.log(linguagens.lastIndexOf('js')) // retorna o último index do item

console.log(linguagens.join()) // junta os itens do array em uma string
console.log(linguagens.join('-')) // separador dos itens na string

let htmlString = '<h2>Título principal</h2>'
htmlString =  htmlString.split("h2") // ['<', '>Título principal</', '>']
htmlString = htmlString.join('h1') // <h1>Título principal</h1>
console.log(htmlString)

console.log(linguagens.slice(4)) // ['python', 'java', 'js']
console.log(linguagens.slice(1,4)) // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice() // a variável recebe o retorno de slice, assim clonando o array
console.log(cloneLinguagens)

// EXERCÍCIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const comidasFirst = comidas.shift()
console.log(comidasFirst)

// Remova o último valor de comidas e coloque em uma variável
const comidasLast = comidas.pop()
console.log(comidasLast)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')
console.log(comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())

// Inverta a ordem dos estudantes
console.log(estudantes.reverse())

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section')
html = html.join('ul')
html = html.split('div')
html = html.join('li')
console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosClone = carros.slice()
console.log(carrosClone)

carros.pop()
console.log(carros)