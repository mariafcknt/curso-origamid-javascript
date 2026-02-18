var num = 20
num += 10

var idade = 19

//Operador ternário = geralmente utilizado quando precisamos 
//atribuir um valor para uma variável dependendo de uma condição

//condição ? true : false
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber)

//EXERCÍCIOS

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? true : false
var darCredito = (possuiCarro && possuiCasa) //pode ser feito assim nesse caso
console.log(darCredito)
