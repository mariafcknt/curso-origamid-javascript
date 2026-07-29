var videoGames = ['Switch', 'PS5', 'Xbox']
videoGames.forEach(function(item, index){
    console.log(item, index)
})
//console.log(videoGames[0])

videoGames.pop()
videoGames.push('Steam Deck')

for (var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'Xbox'){
        break
    }
}

var num = 0
var max = 5
for(;num < max;){
    console.log(num)
    num++
}


//for (var numero = 1; numero <= 10; numero++) {
//    console.log(numero)
//}

/*
var i = 0
while (i <= 20) {
    console.log(i)
    i = i + 2
}
*/

//EXERCÍCIOS

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

copasBrasilCampeao = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < copasBrasilCampeao.length; i++){
    let anoCopa = copasBrasilCampeao[i]
    console.log(`O brasil ganhou a copa de ${anoCopa}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if (frutas[i] === 'Pera') {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

ultimaFruta = frutas.length - 1
console.log(frutas[ultimaFruta])