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

const sobre = fetch('./sobre.html')
const div = document.createElement('div')

sobre
.then(r => r.text()) 
.then(body => {
    div.innerHTML = body
    const titulo = div.querySelector('h1')
    document.querySelector('h1').innerText = titulo.innerText
})

const imagem = fetch('./imagem.jpeg')

imagem
.then(r => r.blob()) // o blob é usado para arquivos que o js não sabe lidar (imagens, por exemplo)
.then(body => {
    const blobUrl = URL.createObjectURL(body) //cria uma url para o blob
    const imagemDom = document.querySelector('img')
})

