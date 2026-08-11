// const regexp = /\w+/gi
// const regexp1 = new RegExp('\\w+', 'gi')
//console.log(frase.replace(regexp, 'X'))

// const regexp = /Java/g

// const frase = 'JavaScript e Java Linguagem 101'

// let i = 0
// while(regexp.test(frase)) {
//     console.log(i++)
// }

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java'

// const regexp = /Script/g

// // const resultados = frase.match(regexp)

// const resultados = frase.split(regexp)
// console.log(resultados)

// while((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult[0]);
// }

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regexp = /(?<=<\/?)\w+/g

// const resultado = tags.replace(regexp, 'div')
// console.log(resultado)

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `;

// const regexp = /(\w+@)[\w.]+/g

// const res = emails.replace(regexp, '$1gmail.com')
// console.log(res)

const regexp = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const resultado = emails.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return args[0];
  }
});

console.log(resultado)