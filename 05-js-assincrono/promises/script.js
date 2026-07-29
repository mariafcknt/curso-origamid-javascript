// const promessa = new Promise(function(resolve, reject) {
//     let condicao = false
//     if (condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Ana', idade: 28})
//         }, 1000)
//     } else { 
//         reject(Error('Um erro ocorreu na promise'))
//     }
// })

// const retorno = promessa.then(function(resolucao) {
//     console.log(resolucao)
//     resolucao.profissao = 'Designer'
//     return resolucao
// })
// .then(resolucao => { //o reject pode ser tratado no then também, além do catch
//     console.log(resolucao)
// }, rejeitada => {
//     console.log(rejeitada)
// })
// .finally(() => { //o finally sempre ocorre independente do resultado da promise
//     console.log('Acabou')
// })

// // .catch(rejeitada => {
// //     console.log(rejeitada)
// // })

// console.log(retorno)

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})

// retorna uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma seja rejeitada
// const carregouTudo = Promise.all([login, dados]) 

// retorna uma nova promise assim que a primeira promise for resolvida ou rejeitada. A nova promise terá a resposta da primeira resolvida
const carregouTudo = Promise.race([login, dados])

carregouTudo.then(resolucao => {
    console.log(resolucao)
})