function verificar() {
    var data_nascimento = document.querySelector('input#input_idade')
    var data_atual = new Date().getFullYear()
    var idade = data_atual - Number(data_nascimento.value)
    
    if (data_nascimento.value.length == 0 || data_nascimento.value > data_atual) {
        window.alert('Verifique os dados informados.')
    } else if (idade > 130) {
        window.alert(`A idade de ${idade} anos é improvável. Tente novamente.`)
    } else {
        var resultado = document.querySelector('div#resultado')
        var genero = ''
        var sexo = document.getElementsByName('radsex')
        var foto = document.createElement('img')
        foto.style.paddingTop = '20px'

        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade > 0 && idade < 12) {
                foto.setAttribute('src', 'imagens/foto-crianca-m.jpg')
            } else if (idade < 20) {
                foto.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade < 60) {
                foto.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
                foto.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if (idade > 0 && idade < 12) {
                foto.setAttribute('src', 'imagens/foto-crianca-f.jpg')
            } else if (idade < 20) {
                foto.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade < 60) {
                foto.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
                foto.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }
        resultado.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos.`
        resultado.appendChild(foto)
        resultado.style.textAlign = 'center'
    }
}