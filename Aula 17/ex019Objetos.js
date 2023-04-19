let amigo ={nome: 'José',
sexo: 'M',
peso: 77,
altura: 1.98,
engordar(p=0){
    console.log('Engordo!')
    this.peso += p
},
crescer(c=0){
    console.log('Cresceu!')
    this.altura += c
}
}

amigo.engordar(3)
amigo.crescer(0.12)
console.log(`${amigo.nome} pesa ${amigo.peso} e mede ${amigo.altura}!`)
