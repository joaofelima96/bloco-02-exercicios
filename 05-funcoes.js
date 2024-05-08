// Crie uma função para verificar se um valor é Truthy
function verifyIfIsTruthy(value) {
  if (value) {
    return "é truthy";
  }
  return "é falsy";
}

console.log(verifyIfIsTruthy(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squarePerimeter(side1, side2, side3, side4) {
  return `O perímetro é de: ${side1 + side2 + side3 + side4}`;
}

console.log(squarePerimeter(1, 2, 3, 4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function returnCompleteName(name, surname) {
  return `Nome completo: ${name} ${surname}`;
}

console.log(returnCompleteName("Joao", "Lima"));

// Crie uma função que verifica se um número é par
const numberChoosed = 9;
function numIsPair(num) {
  return num % 2 === 0 ? `${num} é par.` : `${num} é ímpar.`;
}

console.log(numIsPair(numberChoosed));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function whatIsTheType(value) {
  return `O tipo da variável ~${value}~ é: ${typeof value}`;
}

console.log(whatIsTheType("Hello world!"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("João Felipe de Lima");
});

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

// basta colocar a variável "totalPaises" fora do escopo da função "paisesVisitados"
const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
