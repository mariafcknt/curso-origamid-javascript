// function createButton(text) {
//     // como a constante nunca é retornada, ela fica privada dentro da função
//     const numeroSecreto = 'os320r9323'

//     function element() {
//         const buttonElement = document.createElement('button')
//         buttonElement.innerText = text
//         return buttonElement
//     }

//     return Object.freeze({
//         text,
//         element
//     })
// }

// const btnComprar = createButton('Comprar')

// // por causa do Object.freeze, não vai sobrescrever os valores dos atributos do objeto, então o text vai continuar sendo "Comprar"
// btnComprar.text = 'Vender'

// console.log(btnComprar)

// function Pessoa(nome) {
//     // verifica se o this não é uma instância de Pessoa
//     if(!(this instanceof Pessoa)) // ou !new.target - verifica se o new possui o target de Pessoa
//         return new Pessoa() // se o if possui 1 linha pode ser escrito sem chaves
//     console.log(this)
//     this.nome = nome;
// }

// Pessoa.prototype.andar = function () {
//     return `${this.nome} andou`;
// }


// const designer = Pessoa('André'); // dessa forma o this de Pessoa é Window
// // const designer = new Pessoa('André'); // dessa forma o this de Pessoa é Pessoa

