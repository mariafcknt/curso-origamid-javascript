const contato = document.querySelector('#contato')
const dados = {}
function handleChange(event) {
    dados[event.target.name] = event.target.value

    // document.body.style.backgroundColor = event.target.value

    // if (event.target.checked) {
    //     console.log(event.target.value)
    // }

    // const target = event.target
    // if (!target.checkValidity()) {
    //     target.classList.add('invalido')
    //     contato.nome.setCustomValidity('Este campo é importante')
    //     target.nextElementSibling.innerText = target.validationMessage
    // }
}

contato.addEventListener('change', handleChange)

