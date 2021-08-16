let num = [5,8,2,9,3]
num.push(1) // adiona um numero ao final do array mas no exemplo ele ficara em primeiro pois o sorte colocou a numeracao em ordem 

let pos = num.indexOf(5)// procura onde esta o valor , vai retornar a chave 

console.log(`O valor 5 esta na posicao ${pos} `)
num.sort() // coloca o vetor em ordem

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[1]}`)
