// function Carro(marca, preco) {
//     this.marca = marca
//     this.preco =  preco
//     console.log(this)
// }

// const honda = new Carro('Honda', 3000)
// const fiat = new Carro('Fiat', 4000)

// function Carro2(marca, precoInicial) {
//     const taxa = 1.2
//     const precoFinal = precoInicial * taxa
//     this.marca = marca
//     this.preco =  precoFinal
// }

// const mazda = new Carro2('Mazda', 5000)

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//        this.element().classList.add('ativar')
//     }
// }

// function Dom(seletor) {
//     //seleciona o elemento
//     this.element = function() {
//         return document.querySelector(seletor)
//     }
//     //adiciona a classe ao elemento
//     this.ativar = function(classe) {
//        this.element().classList.add(classe)
//     }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')

// const lastLi = new Dom('li:last-child')
// lastLi.ativar('ativo')

//EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(`${this.nome} andou`)
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const p1 = new Pessoa('João', 20)
const p2 = new Pessoa('Maria', 25)
const p3 = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    this.seletor = seletor
    this.elements =  document.querySelectorAll(this.seletor)
    this.addClass = function(classe) {
        this.elements.forEach((item) => {
            item.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        this.elements.forEach((item) => {
            item.classList.remove(classe)
        })
    }
}

const li = new Dom('li')
li.addClass('teste')
li.addClass('a')
li.removeClass('a')
