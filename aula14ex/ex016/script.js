function contar(){
var inicio = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('ERRO] Faltam dados!')
    res.innerHTML = 'Immpossível contar'
} else {
    res.innerHTML = 'Contando: <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
    if (i < f){
        //Contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += c + String.fromCodePoint(0x1F600)//forma de inserir emoji em js
            document.body.style.background = 'black'
    }
    } else{
        //Contagem regressiva
        for(let c = i; c>= f; c -=p){
            res.innerHTML += `${c} 🍔`
        }
    }
    res.innerHTML += `\u{1f3c1}`//forma de usar emoji porém só funciona dentro de string
}
}