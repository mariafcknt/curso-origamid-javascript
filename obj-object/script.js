const moto = {}

// definição do objeto moto
// Object.defineProperties(moto, { 
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudar valor
//     writible: false, // impede mudança de valor
//   }
// })

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas
    },
    set() {
      this._rodas = 4
    }
  }
})

