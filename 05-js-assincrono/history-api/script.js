// console.log(window.history) // histórico de páginas visitadas

// window.history.pushState(null, null, 'sobre.html') // muda o url da página atual sem atualizar, e o adiciona ao histórico

// window.addEventListener('popstate', () => {
//     console.log('Teste')
// })

const links = document.querySelectorAll('a')

function handleClick(event) {
    event.preventDefault()
    fetchPage(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    document.querySelector('.content').innerHTML = 'Carregando...'
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
}

function replaceContent(newText) {
    const newHtml = document.createElement('div') // cria uma div com o conteúdo de newText
    newHtml.innerHTML = newText
 
    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML // muda o conteúdo das páginas sem recarregar
    document.title = newHtml.querySelector('title').innerText
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})

links.forEach(link => {
    link.addEventListener('click', handleClick)
})