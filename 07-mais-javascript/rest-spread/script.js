// function perimetroForma(lado, totalLados = 4) {
//     // const argArray = Array.from(arguments)
//     // console.log(argArray)
//     return lado * totalLados;
// }

// function perimetroForma(lado, total, ...listaArgumentos) {
//     console.log(listaArgumentos)
//     listaArgumentos.forEach(i => console.log(i))
//     // return lado * totalLados;
// }

// perimetroForma(10, 4, 30, 'Oi', 'Teste'); // 40
// // perimetroForma(10); // NaN

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas, 'Pizza', ...legumes];
// console.log(comidas) // 'Banana', 'Uva', 'Morango', 'Pizza', 'Cenoura', 'Batata'

// const numeros = [3, 4, 5, 6, 325, 3, 8, 90]
// const numeroMaximo = Math.max(...numeros)

// console.log(numeroMaximo) // 325

// const btns = document.querySelectorAll('button')
// console.log(btns)

// // cria um array a partir da nodelist
// const btnArray = [...btns]

// EXERCÍCIOS

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue';
  if(color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

function newCreateButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
}

console.log(newCreateButton())

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)

console.log(comidas)