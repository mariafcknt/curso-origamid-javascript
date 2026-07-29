// function Button(text, background) {
//     this.text = text
//     this.background = background
// }

// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = this.text
//     buttonElement.style.background = this.background
//     return buttonElement
// }

class Button {
    constructor(text, background, color) {
        this.text = text
        this.background = background
        this.color = color
        // é possível alterar o retorno da classe
        // return this.element()
    }
    element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = this.text
        buttonElement.style.background = this.background
        buttonElement.style.color = this.color
        return buttonElement
    }
    appendTo(target) {
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
        return targetElement
    }
    // método que retorna a própria classe com propriedades já pré definidas
    static blueButton(text) {
        return new Button(text, 'blue', 'white')
    }
}

const botaoAzul = Button.blueButton('Comprar')
console.log(botaoAzul)

// const blueButton = new Button('Comprar', 'blue', 'white')

// blueButton.appendTo('body')

// class Button {
//     constructor(options) { 
//         // qualquer valor pode ser passado dentro de uma propriedade
//         this.options = options
//     }
//     static createButton(text, background) {
//         const buttonElement = document.createElement('button')
//         buttonElement.innerText = text
//         buttonElement.style.background = background
//         return buttonElement
//     }
// }

// const optionsBlue = {
//     backgroundColor: 'blue',
//     text: 'Comprar',
//     color: 'white'
// }

// const blueButton = new Button

// const blueButtonStatic = Button.createButton('Clique', 'blue')
// console.log(blueButtonStatic)

// const blueButton = new Button({
//     backgroundColor: 'blue',
//     text: 'Comprar',
//     color: 'white'
// })

