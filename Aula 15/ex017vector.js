let valores = [ 5, 3, 1, 9, 2, 7]

valores.sort()
/*
for(let pos = 0; pos < valores.length; pos += 1) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}