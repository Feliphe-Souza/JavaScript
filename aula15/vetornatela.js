let valores = [2, 1, 5, 8, 4, 3, 7, 6]
valores.sort()
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])


for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}//percurso para exibição de vetor
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}