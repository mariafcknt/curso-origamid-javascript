
function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(2))
console.log(areaQuadrado()) //retorna NaN pois o parâmetro da função não recebe um valor

function imc(peso, altura){
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(48, 1.7))

//parâmetro = definido na função
//argumento = é passado para a função

//funções podem serem usadas como argumentos
addEventListener('click', function(){console.log('hi')})

//EXERCÍCIOS

// Crie uma função para verificar se um valor é true

function isValorTrue(valor){
    if (valor !== false) {
        return 'O valor é verdadeiro'
    } else {
        return 'O valor é falso'
    }
}

console.log(isValorTrue(3))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcularPerimetro(lado) {
    return lado * 4
}

console.log(calcularPerimetro(20))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Jon','Snow'))

// Crie uma função que verifica se um número é par

function isPar(num){
    if (typeof(num) != 'number') {
        return "Não é um número"
    } else if (num % 2 === 0) {
        return `${num} é par`
    } else {
        return `${num} é ímpar`
    }
}

console.log(isPar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verTipo(valor){
    return typeof(valor)
}

console.log(verTipo('Texto'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

let nomeCompleto2 = 'Sherlock Holmes'
addEventListener('scroll', function() {console.log(nomeCompleto2)})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

//EXERCÍCIOS DE ESCOPO DA FUNÇÃO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(var, marca, portas);
//a variável "cor" não foi passado como argumento 
//"marca" e "portas" apenas ficam visíveis dentro do bloco

// Como corrigir o erro abaixo?
const dois = 2

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

//a constante "dois" não pode ser acessada pela função "dividirDois" pois foi criada em "somarDois"
//para arrumar isso a variável deve ser criada fora das funções

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log('Total: ' + total);
