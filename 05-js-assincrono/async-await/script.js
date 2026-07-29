async function puxarDados() {
    try {
        // await - espera a promise ser resolvida antes de continuar 
        // await só funciona com promises
        const responseDados = await fetch('./dados.json') 
        // const responseClientes = fetch('./clientes.json')

        // vai resolver primeiro a promise que está entre parênteses
        const jsonDados = await (await responseDados).json()

        console.log(jsonDados)
    } catch (erro) {
        console.log(erro)
    }
}

puxarDados()

// a diferença do then pro async é a sintaxe mais limpa