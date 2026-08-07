const regexp = /\w+/gi
const regexp1 = new RegExp('\\w+', 'gi')

const frase = 'JavaScript Linguagem 101'
console.log(frase.replace(regexp, 'X'))