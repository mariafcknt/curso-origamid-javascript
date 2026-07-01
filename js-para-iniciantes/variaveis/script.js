//VARIÁVEIS
var nome = 'Maria'
var idade = 21
var possuiFaculdade = true

console.log(nome, idade, possuiFaculdade)

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco

console.log(totalPreco)

var sobrenome = 'Fernanda', cidade = 'Joinville'

console.log(sobrenome, cidade)

//TIPOS DE DADOS

var semDefinir;
console.log(semDefinir)

var comidaFavorita
comidaFavorita = 'Pastel'
console.log(comidaFavorita)

var time = null,
    pais = 'Brasil',
    endereco,
    empresa,
    rua

console.log(pais)

console.log(typeof(pais))
console.log(typeof time)

var sobrenome = 'Fuckner'
var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)

var gols = 1000
console.log(`Romário fez ${gols * 2} gols`)

var a = 'teste'
var b = '3'

var idade = 21
var nome = 'Maria',
    sobrenome = 'Fuckner'

var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)
console.log(`${nome} ${sobrenome}`)

var frase = '\It\'s time'
console.log(frase)

console.log(typeof nome)

//NÚMEROS E OPERADORES

var exp = 2e10
console.log(exp)
var negativeExp = 2e-2
console.log(negativeExp)
var potencia = 2 ** 4
console.log(potencia)

var x = 5
console.log(--x)
console.log(x)

var idade = '28'
var somaIdade = 5
console.log(+idade + somaIdade)

var total = 10 + 5 * 2 / 2 + 20
console.log(total)

console.log(isNaN('50s + 20s'))
console.log(isNaN('50s'+ 100))

console.log(+'200' + 50)

var valor = 5
valor++
console.log(valor)

//BOOLEAN E CONDICIONAIS

var x = 0

if (x == 0){
    console.log('x é igual a 0')
} else {
    console.log('falso')
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeParente = 45, minhaIdade = 22

if (idadeParente < minhaIdade) {
    console.log("É maior")
} else if (idadeParente === minhaIdade){
    console.log('É igual')
} else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(!!expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil < china) {
    console.log("Brasil é menor")
} else if (china < brasil) {
    console.log("China é menor")
} else {
    console.log("Os dois países são iguais")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

