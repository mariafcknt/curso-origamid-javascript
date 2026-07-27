//EXERCÍCIOS

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn = document.querySelector('.btn')
btn.addEventListener('click', handleClick)
const piada = document.querySelector('.piada')
const piadaContainer = document.querySelector('.piada-container')
const triangulo = document.querySelector('.triangle-clip')
const erro = document.querySelector('.erro')

function handleClick(event) {
    removeClass(piada, 'erro')
    removeClass(triangulo, 'erro')
    addClass(piadaContainer, 'active')
    btn.innerText = 'Próxima'
    fetchJoke()
}

function formatJoke(joke) {
    piada.innerText = joke
}

function addClass(element, classe) {
    element.classList.add(classe)
}

function removeClass(element, classe) {
    element.classList.remove(classe)
}

function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(body => formatJoke(body.value))
    .catch(() => {
        addClass(piada, 'erro')
        addClass(triangulo, 'erro')
        piada.innerText = 'Ocorreu um erro. Tente novamente 😔'
    })
}