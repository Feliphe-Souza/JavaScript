let num = [6, 3, 2, 1, 8]
//num[7]=6
num.push(7)
num.sort()
console.log(`Nosso valor é o ${num[1]}`)
console.log(`Nosso valor é o ${num}`)
console.log(`${num.length}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}