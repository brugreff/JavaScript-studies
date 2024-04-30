/*
  Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso / (altura *altura));
  Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

// Criando a classe pessoa

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    // Método para retornar o valor do IMC, com base nos valores
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    //Criando o método calcularImc
    return this.peso / (this.altura * this.altura);
  }
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
      return "Obeso";
    } else {
      return "Obesidade grave";
    }
  }
}

// Criando a instância

const jose = new Pessoa("José", 72, 1.56);
console.log(jose.classificarImc());

const joao = new Pessoa("João", 67, 1.72);
console.log(joao.classificarImc());

// Criando a classificação do IMC - método (linha 25)
