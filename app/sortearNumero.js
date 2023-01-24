const menorValor = 1
const maiorValor = 500
const numeroSecreto = gerarNumeroAleatorio ()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto:', numeroSecreto)
// manipulando menor valor
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
// manipulando maior valor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor