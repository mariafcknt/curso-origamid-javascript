// const doc = fetch('./doc.txt')

// doc.then(resolucao => {
//     return resolucao.text() //retorna uma promessa, então é necessário outro then para tratar dessa promessa
// }).then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body
//     console.log(body)
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep
// .then(r => r.json()) //.json transforma o json em um objeto
// .then(body => {
//     console.log(body)
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body.bairro
// })

// const css = fetch('./style.css')

// css
// .then(r => r.text()) 
// .then(body => {
//     console.log(body)
//     const conteudo = document.querySelector('.conteudo')
//     const style = document.createElement('style')
//     style.innerHTML = body
//     conteudo.appendChild(style)
// })

// const sobre = fetch('./sobre.html')
// const div = document.createElement('div')

// sobre
// .then(r => r.text()) 
// .then(body => {
//     div.innerHTML = body
//     const titulo = div.querySelector('h1')
//     document.querySelector('h1').innerText = titulo.innerText
// })

// const imagem = fetch('./imagem.jpeg')

// imagem
// .then(r => r.blob()) // o blob é usado para arquivos que o js não sabe lidar (imagens, por exemplo)
// .then(body => {
//     const blobUrl = URL.createObjectURL(body) //cria uma url para o blob
//     const imagemDom = document.querySelector('img')
//     imagemDom.src = blobUrl
// })

// const txt = fetch('./docs.txt')

// txt.then(response => {
//     console.log(response.type) 
//     //type basic - a requisicão está sendo feita dentro do própro server
//     //type cors - a requisicão está sendo feita outro servidor, mas que é permitida
//     console.log(response.url)
//     if(response.status === 404) {
//         console.log('Arquivo não existe')
//     }
//     // response.headers.forEach(console.log) //printa os headers da requisição
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then(r => {
//     //o clone é usado quando se precisa modificar o body duas vezes
//     //exemplo: transformar o cep em text e em json
//     const r2 = r.clone() 
//     //os clones podem ter seu then próprio
//     r2.json().then(json => console.log(json)) 
//     r.text().then(text => console.log(text)) 
// })
// .then(body => {
//     console.log(body) 
//     console.log('teste') 
//     let i = 0
// })

//console.log('B' + 'a' + + 'a' + 'a') //BaNaNa

//EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const buscarCep = document.getElementById('buscarCep')
const btn = document.querySelector('.btn')


console.log(buscarCep.elements.cep.value)



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
