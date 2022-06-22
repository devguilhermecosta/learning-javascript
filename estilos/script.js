var hora = new Date().getHours()
horario.innerHTML = `Agora são ${hora} horas`
var img = window.document.getElementById('foto')

if (hora >= 0 && hora < 6) {
    img.src = 'imagens/noite.jpeg'
    img.alt = 'foto da noite'
    document.body.style.background = '#373f48'
} else if (hora < 12) {
    img.src = 'imagens/manha.jpeg'
    img.alt = 'foto da manhã'
    document.body.style.background = '#EDC259'
} else if (hora < 18) {
    img.src = 'imagens/tarde.jpeg'
    img.alt = 'foto da tarde'
    document.body.style.background = '#4DAD80'
} else {
    img.src = 'imagens/noite.jpeg'
    img.alt = 'foto da noite'
    document.body.style.background = '#373f48'
}