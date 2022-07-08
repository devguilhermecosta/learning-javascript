var numero = document.getElementById('iptnumero')
var lista = document.getElementById('valores')
var lista_numeros = []
var display = document.getElementById('main')

function isNumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(lista, numero) {
    if (lista.indexOf(Number(numero)) != -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (numero.value.length == 0 || !isNumber(numero.value)) {
        window.alert('Digite um valor entre 1 e 100')
    } else if (!inLista(lista_numeros, numero.value)) {
        window.alert('Este número já está na lista.')
    } else {
        lista_numeros.push(Number(numero.value))
        window.alert('Número adicionado com sucesso.')
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        numero.value = ''
    }
}

function finalizar() {
    var resultado = document.createElement('p')
    if (lista_numeros.length != 0) {
    resultado.innerHTML = `${lista_numeros}`
    display.appendChild(resultado)
    }
}
