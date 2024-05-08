// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const myAge = 27;
const ageOfMyDad = 54;

const diff = myAge > ageOfMyDad;
console.log(myAge + " é menor que " + ageOfMyDad);

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
const compare = brasil === china; // false

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //Falso: Gato é diferente de gato
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Cão, Gato não é igual a gato, mas 5 é maior que 2
} else {
  console.log("Falso");
}
