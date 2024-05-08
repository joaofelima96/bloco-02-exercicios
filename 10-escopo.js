// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);
// porque dentro do console.log está escrito "var" que é o tipo de variável e não o seu nome, que no caso é "cor". Assim:
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

// a const "dois" foi iniciada dentro do escopo de "somarDois", ou seja, a função "dividirDois" não possui o acesso a essa const. O certo é retirar ela da função e deixar em um escopo global:
// OBS: o sinal de "dividirDois" também está errado:
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// trocar o "var" por "let" dentro do loop, pois "var" não respeita os escopos de bloco. Assim:

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
