import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('25 December 2026 23:59:59 GMT-0300')

setInterval(() => {
    console.log(tempoParaONatal.total)
}, 1000)

// console.log(tempoParaONatal.total)