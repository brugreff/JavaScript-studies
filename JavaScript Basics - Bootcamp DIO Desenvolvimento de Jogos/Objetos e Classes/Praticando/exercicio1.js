/*
  Crie uma classe para representar carros. 
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
  Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

// Criando a instância

const Uno = new Carro("Fiat", "branco", 1 / 12);
console.log(Uno.calcularGastoDePercurso(70, 5)); // Imprimindo informação

const Clio = new Carro("Renault", "prata", 1 / 10);
console.log(Clio.calcularGastoDePercurso(70, 5));

// Criando o método calcularGastoDePercurso - linha 18
