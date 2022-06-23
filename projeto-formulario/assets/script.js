function verificar() {
    var data = new Date().getFullYear()
    var data_nascimento = document.getElementById('input_idade')
    var resultado = document.querySelector('div#resultado')
    var idade = data - Number(data_nascimento.value)

    if (data_nascimento.value.length == 0 || Number(data_nascimento.value) > data) {
        window.alert('Verifique os dados digitados.')
    } else if (idade > 130) {
        window.alert('Idade improvável. Tente novamente.')
    } else {
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var foto = document.createElement('img')
        foto.setAttribute('id', 'foto')
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
