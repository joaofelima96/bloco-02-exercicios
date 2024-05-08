// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const personalData = {
  name: "João Felipe",
  surname: "Lima",
  age: 27,
  height: 1.88,
  weight: 82,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
const personalDataCustom = {
  name: "João Felipe",
  surname: "Lima",
  age: 27,
  height: 1.88,
  weight: 82,
  completeName() {
    `${this.name} ${this.surname}`;
  },
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 300;

// Adicione a propriedade "ano" no objeto anterior
carro.ano = "2004";

// Verificar se no objeto carro existe a propiedade "numDePortas"
carro.hasOwnProperty("numDePortas");

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  raca: "Labrador",
  color: "Preto",
  age: 10,
  bark(seeMan) {
    if (seeMan) "bark";
    return;
  },
};
