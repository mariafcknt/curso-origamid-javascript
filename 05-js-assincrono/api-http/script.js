// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

// const url = 'https://jsonplaceholder.typicode.com/posts/2'
// const options = {
//     method: 'PUT',
//     body: '{"title": "JavaScript"}',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json))

/* methods
GET - puxa informações (posts, users etc)
POST - utilizado para criar posts, users etc
PUT - utilizado para atualizar informações
DELETE - deleta uma informação
HEAD - puxa apenas os headers (é uma forma do servidor mandar informação pro browser, ou vice-versa)
*/

// const url = 'https://jsonplaceholder.typicode.com/posts/2'
// const options = {
//     method: 'HEAD',
// }

// fetch(url, options)
// .then(response => {
//     console.log(response.headers.forEach(console.log))
// })

// CORS - gerencia como deve ser o compartilhamento de recursos entre diferentes origens
// é definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites 

const url = 'https://www.google.com'

fetch(url)
.then(response => response.text())
.then(text => console.log(text))