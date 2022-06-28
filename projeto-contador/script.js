var button = document.querySelector('input#result')
button.addEventListener('click', count)

function count() {
    var initial = document.getElementById('iptinitial')
    var end = document.getElementById('iptend')
    var pass = document.getElementById('iptpass')
    var res = document.getElementById('res')
    res.innerHTML = 'Contanto: <br>'

    if (initial.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERROR] Dados faltando.')
        res.innerHTML = 'ERROR'
    } else {
        var i = Number(initial.value)
        var e = Number(end.value)
        var p = Number(pass.value)

        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1.')
            p = 1
        }
        
        if (i < e) {
            for (let c = i; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += ` \u{1F3C1}`
    }
}