function calcular(){
    num = document.getElementById('txt1')
    var tab = document.getElementById('res')//para preencher um select do HTML
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 0; c <=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}