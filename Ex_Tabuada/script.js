function Gerar() {
    var txtnum = document.getElementById("txtnum")
    var tabuada = document.getElementById("seltab")
    
    if (txtnum.value.length == 0) {
        window.alert("Digite um número diferente de 0")
    } else {    
        var n = Number(txtnum.value)
        var c = 1
        tabuada.innerHTML = " "
        while (c <= 10) {
            var item = document.createElement("option") 
            item.text = `${n} X ${c} = ${n * c}`
            tabuada.appendChild(item)         
            c++
        }
            
        
    }

}