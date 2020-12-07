var num1 = document.getElementById("txtnum1")
var num2 = document.getElementById("txtnum2")
var res = document.getElementById("res")
function somar() {
    if (num1.value && num2.value != 0) {
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var soma = n1 + n2
        res.innerHTML = " "
        res.innerHTML += `a soma dos valores é ${soma}`
        
    } else { 
        window.alert("ERRO")
        
    }
    num1.value = " "
    num2.value = " "
    num1.focus()
}
function subtrair() {
    if (num1.value && num2.value != 0) {
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var sub = n1 - n2
        res.innerHTML = " "
        res.innerHTML += `a subtração dos valores é ${sub}`
        
    } else { 
        window.alert("ERRO")
    }
    num1.value = " "
    num2.value = " "
    num1.focus()
}
function multiplicar() {
    if (num1.value && num2.value != 0) {
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var mult = n1 * n2
        res.innerHTML = " "
        res.innerHTML += `a multiplicação dos valores é ${mult}`
        
    } else { 
        window.alert("ERRO")
    }
    num1.value = " "
    num2.value = " "
    num1.focus()
}
function dividir() {
    if (num1.value && num2.value != 0) {
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var div = n1 / n2
        res.innerHTML = " "
        res.innerHTML += `a divisão dos valores é ${div}`
        
    } else { 
        window.alert("ERRO")
    }
    num1.value = " "
    num2.value = " "
    num1.focus()
}