var numero = document.getElementById('iptnumero')
var lista = document.getElementById('valores')
var lista_numeros = []
var res = document.getElementById('resultado')

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
        numero.value = ''
        numero.focus()
    } else {
        lista_numeros.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        numero.value = ''
        numero.focus()
    }
    res.innerHTML = ''
}

function finalizar() {
    res.innerHTML = ''

    if (lista_numeros.length != 0) {
        var item = document.createElement('p')
        var tot = lista_numeros.length
        var maior = lista_numeros[0]
        var menor = lista_numeros[0]
        var soma = 0

        for (let pos in lista_numeros) {
            soma += lista_numeros[pos]
            if (lista_numeros[pos] > maior) {
                maior = lista_numeros[pos]
            }
            if (lista_numeros[pos] < menor) {
                menor = lista_numeros[pos]
            }
        }

        var media = soma / tot
        item.innerHTML = `<p>Você digitou um total de <strong>${tot}</strong> números.</p>`
        item.innerHTML += `<p>O menor número informado foi <strong>${menor}</strong>.</p>`
        item.innerHTML += `<p>O maior número informado foi <strong>${maior}</strong></p>`
        item.innerHTML += `<p>A soma total entre os valores é de <strong>${soma}</strong></p>`
        item.innerHTML += `<p>A média de valores é de <strong>${media}</strong></p>`
    } else {
        window.alert('Você não informou nenhum número.')
    }
    res.appendChild(item)
}
