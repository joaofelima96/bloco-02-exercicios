// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35

// Crie duas expressões que retornem NaN
const a = "olá" / 1;
const b = "Hello world!";
const transformInNumber = +b;

console.log(a, transformInNumber);

// Somar a string '200' com o número 50 e retornar 250
const sum = console.log("300" - 50);

// Incremente o número 5 e retorne o seu valor incrementado
let num = 5;
console.log(num++);
console.log(num);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// resposta: colocando a variável numero como number, excluindo a variável peso e adicionando o "kg" com template string
var peso = 80;
var unidade = "kg";
var pesoPorDois = peso / 2 + "kg";
console.log(pesoPorDois);
