fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
    const jsonFinal = JSON.parse(jsonText) // mesma coisa que r.json()
    //console.log(jsonFinal)
})

const configuracoes = {
    player: 'Google',
    tempo: 25.5,
    aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes) // converte String em JSON
console.log(JSON.parse(localStorage.config))

fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon);
});
