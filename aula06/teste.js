var n1 = 1541.2
console.log(n1.toFixed(2).replace('.' , ','))// trocamos o . por ,

// converter qualquer valor para real 

console.log(n1.toLocaleString('pt-BR',{style: 'currency', currency:"BRL"}))// ESSE CODIGO E ALGO COMPLEXO POREM A LOGICA DELE SERVE PARA CONVERTER VALORES PARA VERSAO DO PAIS SELECIONADO