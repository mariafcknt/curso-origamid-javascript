//EXERCÍCIOS

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn = document.querySelector('.btn')
btn.addEventListener('click', handleClick)
const piada = document.querySelector('.piada')
const piadaContainer = document.querySelector('.piada-container')

function handleClick(event) {
    addActiveClass(piadaContainer)
    btn.innerText = 'Próxima'
    fetchJoke()
}

function formatJoke(joke) {
    piada.innerText = joke
}

function addActiveClass(element) {
    element.classList.add('active')
}

function removeActiveClass(element) {
    element.classList.remove('active')
}

function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(body => formatJoke(body.value))
}