//EXERCÍCIOS

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoinValue = document.querySelector('.bitcoin-value')
const timer = document.querySelector('.timer')
let timeInterval
let segundos 

function addBuyValue(value) {
    value = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    bitcoinValue.innerText = value
}

fetchData()
setInterval(fetchData, 30000)
countTime(true)

function fetchData() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(body => {
        addBuyValue(body.BRL.buy)
    })
    .catch(() => {
        countTime(false)
        clearInterval(timeInterval)
        return false
    })
}

function countTime(condition) {
    segundos = 30
    refreshTime(segundos)

    if (condition) {
        timeInterval = setInterval(() => {
            segundos--
            refreshTime(segundos)
            if (segundos === 0) {
                segundos = 30
            }
        }, 1000)
    } else {
        timer.innerHTML = '<i>⚠️ Erro ao consultar valor. Recarregue a página e tente novamente</i>'
    }
}

function refreshTime(time){
    timer.innerHTML = `<i>O valor será atualizado em ${time} segundos</i>`
}