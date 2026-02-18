var pessoa = {
    nome: 'Mark S.',
    idade: 32,
}

var quadrado = {
    lados: 4,
    //area = medida de uma superfície
    area: function(lado){
        return lado * lado
    },
    //perimetro = soma total do comprimento do contorno (borda) de uma superfície
    perimetro(lado) {
        return this.lados * lado
    },
    mostrarLados(){
        console.log(quadrado.lados) 
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
quadrado.mostrarLados()

//console.log(Math.random(), Math.PI)
console.table(quadrado)

var carro = {}
console.log(typeof carro)

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height/2
    }
}

menu.backgroundColor = '#000'
var bg = menu.backgroundColor
console.log(bg)

menu.esconder = function() {
    console.log('Escondi')
}

menu.esconder()
console.log(menu.metadeHeight())

//EXERCÍCIOS

// Crie um objeto com dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

pessoa = {
    nome: 'Leon',
    sobrenome: 'Kennedy',
    idade: 51,
    getNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

pessoa.getNomeCompleto()

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'Homem' || pessoa === 'homem'){
            console.log('"Au!"')
        } else {
            console.log('Não faz nada')
        }
    }
}

cachorro.latir('Homem')

// FIM DOS EXERCÍCIOS

var nome = 'André'

nome = nome.replace('ré', 'rei')
console.log(nome)

var btn = document.querySelector('.btn')

btn.classList.add('azul')
console.log(btn.innerText)
btn.addEventListener('click', function() {
    console.log('Clicou')
})

//EXERCÍCIOS

// nomeie 3 propriedades ou métodos de strings
var text = 'Lorem ipsum'
console.log(text.length)
console.log(text.toLocaleLowerCase())
console.log(text.replace('ipsum', 'dolor'))

// nomeie 5 propriedades ou métodos de elementos do DOM
console.log(document.head)
document.title = 'Objetos'
console.log(document.getElementsByClassName('btn'))
document.addEventListener('click', function(){
    console.log('Clique')
})
console.log(document.body)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//clipboard.js