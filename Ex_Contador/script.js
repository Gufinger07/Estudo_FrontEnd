function Contar() {
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var Contando = document.getElementById("Contando")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO")
        
    } else {
        Contando.innerHTML = "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                Contando.innerHTML += `${c} \u{1F603}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                Contando.innerHTML += `${c} \u{1F603}`
            }
        } 
    Contando.innerHTML += `\u{1F3C1}`
    }
}

