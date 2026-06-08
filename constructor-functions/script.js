function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

//adiciona o método andar() ao construtor
Pessoa.prototype.andar = function() {
    console.log(this.nome + ' andou')
}

const leon = new Pessoa('Leon', 34)