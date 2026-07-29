// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
// console.log(htmlText)

// const htmlArray = htmlText.split('div') //usa o 'div' para separar a string em um array
// console.log(htmlArray)

// const novoHtml = htmlArray.join('section') //junta a array de cima em uma string com os itens unidos por 'section)
// console.log(novoHtml)

// const valor = ' R$ 23,90 ' 
// console.log(valor.trim()) //'R$ 23,90' - remove os espaços do começo e do final
// console.log(valor.trimStart()) //'R$ 23,90 ' 
// console.log(valor.trimEnd()) //' R$ 23,90'

// EXERCÍCIOS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxa = 0
let totalRecebimento = 0
transacoes.forEach((item) => {
    const valorLimpo = item.valor.slice(3)
    const novoValor = Number(valorLimpo)
    if (item.descricao.includes('Taxa')) {
        totalTaxa += novoValor
    } else if (item.descricao.includes('Recebimento')){
        totalRecebimento += novoValor
    }
})

console.log(totalTaxa)
console.log(totalRecebimento)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
//
const novoHtml = html.split('span').join('a')
console.log(novoHtml)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1))

// Retorne o total de taxas
const arrayTransacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let somaQtdeTaxas = 0
arrayTransacoes.forEach((item) => {
    item = item.toLowerCase().trim() //trim() recebe o retorno de toLowerCase() como argumento (valor enviado para a função)
    if (item.includes('taxa')) {
        console.log(item)
        somaQtdeTaxas++
    }
})

console.log(somaQtdeTaxas)