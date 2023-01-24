function verificaSeOChutePossuiUmValorValido(cute) {
    const numero = +chute

    if (chuteForIvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'

        return
    }

    if (NumeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acrtou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForIvalido(numero) {
    return Number.isNaN(numero)
}

function NumeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})