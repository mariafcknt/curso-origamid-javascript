// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// const body = document.querySelector('body')
// body.classList.add('vermelho')

// function changeColor() {
//     if(body.classList.contains('azul')) {
//         body.classList.remove('azul')
//         body.classList.add('vermelho')
//     } else {
//         body.classList.remove('vermelho')
//         body.classList.add('azul')
//     }
// }
// setInterval(changeColor, 2000);

function mudarClasse() {
    document.body.classList.toggle('active')
}

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
