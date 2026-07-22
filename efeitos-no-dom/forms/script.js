const contato = document.querySelector('#contato')
function handleKeyUp(event) {
    const target = event.target

    if(!target.checkValidity()) {
        target.classList.add('invalido')
        contato.nome.setCustomValidity('Este campo é importante')
        target.nextElementSibling.innerText = target.validationMessage
    }


    console.log(event.target.value)
    console.log(event.target.checkValidity())
}

contato.addEventListener('keyup', handleKeyUp)

