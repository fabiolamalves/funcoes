// FUNÇÕES SOLTAS
// alert()
// prompt()
// parseInt()
// parseFloat() ver as explicações sobre as funções que o próprio VsCode mostra.

/*
let saudacao = "Boa tarde";
alert(saudacao.charAt())
*/

//Dentro de >>>>>>>variaveis<<<<<<<<, escreva o nome e o sobrenome e mostre as iniciais na tela

//let nomeEsobrenome = "Fabiola Santos" >>>>ERRADO<<<<<
//alert[(nomeEsobrenome.charAt(0)) + (nomeEsobrenome.charAt(8))]; >>>>>ERRADO<<<<<<

/* 
RESOLUÇÃO CORRERTA:

let nome ="Fabiola"
let sobrenome="Santos"

let iniciais = nome.charAt(0) + sobrenome.charAt(0)

alert(iniciais)
*/ 

//FUNÇÃO REPLACE: para trocar padrões, por exemplo, asteriscos ao invés dos números
// nome.replace("é","e")


/*
let nome = "Ronier"

nome.replace("i","e")

alert(nome.replace("i","e"))
*/

//let nome = "Davi"

//alert(nome.toUpperCase())
//alert(nome.toLowerCase())


//let nome = "ronier"
//Ronier

//alert(nome.charAt(0).toUpperCase() + nome.slice(1))
//poder de abstração para resolver o problema, usando descrição literal do problema
// 1- cortar SLICE
// 2- colocar em maiuscula TOUPPERCASE
// 3- concatenar com o restante +

//OUTRA FORMA DE RESOLVER

/*
let nome = "ronieR"

let ladoEsquerdo = nome.slice(0,1);
let ladoDireito = nome.slice(1)

alert (ladoEsquerdo.toUpperCase() + ladoDireito.toLowerCase())
*/

//ARRAYS

//criar arrays contendo lista de comidas com 3 + 3

//let comidas = ["panelada", "feijoada", "sarrabulho"]

//comidas.unshift("baião", "coxinha", "pastel")

//comidas.push("baião", "coxinha", "pastel")

