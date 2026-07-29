function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log('Andou pelo objeto')
    }
}

//adiciona o método andar() ao construtor
Pessoa.prototype.andar = function() {
    console.log(this.nome + ' andou')
}

const leon = new Pessoa('Leon', 34)
//leon.andar() //o js procura o método primeiro no objeto e depois no prototype

const pais = 'Brasil'
const cidade = new String('Rio')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')

//transforme em um array
const listaArray = Array.prototype.slice.call(lista) //from está linkado direto no protótipo de Array
//ou
Array.from(lista) //from está linkado direto a Array

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar () {
      return true  
    }
}

// EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const p1 = new Pessoa('Leon', 'Kennedy', 34)
console.log(p1.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement()
li.click; //Function()
li.innerText; //String()
li.value; //Number()
li.hidden; //Boolean()
li.offsetLeft; //Number()
li.click(); //undefined - o que importa é o retorno, que nesse caso não existe

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String


