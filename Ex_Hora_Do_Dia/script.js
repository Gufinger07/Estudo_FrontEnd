function carregar() {
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var boa = window.document.getElementById("boa")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        imagem.src = "55.png"
        document.body.style.background = "yellow"
        boa.innerHTML = `Bom Dia!`
    } else if (hora >= 12 && hora <18) {
        imagem.src = "77.png"
        document.body.style.background = "orange"
        boa.innerHTML = `Boa Tarde!`
    } else {
        imagem.src = "66.png"
        document.body.style.background = "purple"
        boa.innerHTML = `Boa Noite!`
    } 
}