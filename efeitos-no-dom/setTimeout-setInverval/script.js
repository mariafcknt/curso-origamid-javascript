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

// function mudarClasse() { // solução do Origamid
//     document.body.classList.toggle('active')
// }
// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

//const cronometroInicio = setInterval(cronometro, 1000)
const cronometro = document.querySelector('.cronometro')
const statusHtml = document.querySelector('.status')

const btnIniciar = document.querySelector('.iniciar')
btnIniciar.addEventListener('click', iniciar)

const btnPausar = document.querySelector('.pausar')
btnPausar.addEventListener('click', pausar)

const btnResetar = document.querySelector('.resetar')
btnResetar.addEventListener('dblclick', resetar)

let intervalo = null
let i = 0;
let status = null

function iniciar() {
    if (status === 'play') { //pausa o cronômetro se ele já tiver iniciado
        alternador(status)
        return
    } else {
        const statusPlay = 'Cronômetro em andamento'
        statusHtml.innerHTML = statusPlay
        intervalo = setInterval(contador, 1000)
        function contador() {
            console.log(i++)
            cronometro.innerHTML = i
        }
    }

    status = 'play'
}

function alternador(status) {
    if (status === 'pause' || status == 'reset') {
        iniciar()
    } else {
        pausar()
    }
}

function pausar() {
    const statusPause = 'Cronômetro pausado'

    if (status === 'pause' ) { //inicia o cronômetro se ele já estiver pausado
        alternador(status)
        return
    } else if (status === 'reset') {
        return
    }

    clearInterval(intervalo)
    status = 'pause'
    statusHtml.innerHTML = statusPause
}

function resetar() {
    status = 'reset'
    statusHtml.innerHTML = 'Cronômetro resetado'
    i = 0
    cronometro.innerHTML = i
    clearInterval(intervalo)
}

