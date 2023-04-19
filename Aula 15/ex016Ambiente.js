let num = [ 7, 3, 4, 1, 5, 6]
num.push(2)
num.sort() // colocar na ordem certa para não ter diferença

console.log(`O Vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`) // console.log(num[0])  "igual ao lado"
let pos = num.indexOf(32)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 32 está na aposição ${pos}!`)
}
