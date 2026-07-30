class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
    freiar() {
        console.log('Freiou')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        // extende o constructor da classe pai
        super(rodas)
        this.capacete = capacete
    }
    // acelarar() também existe na classe pai
    // O primeiro método encontrado vai ser executado
    acelerar() {
        console.log('Acelerou muito')
    }
    freiar() {
        super.freiar() // acessa o método da classe pai
        console.log('Muito')
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2, true)
const civic = new Veiculo(4)