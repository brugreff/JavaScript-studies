// Criando Instâncias com Constructor
// constructor -> o que acontece quando uma pessoa é instanciada (pode receber parâmetros - linha 9)

class Pessoa {
  // definir como são pessoas, para que elas possam ser instanciadas
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const Maria = new Pessoa("Maria", 24);
const Joao = new Pessoa("João", 21);

Maria.descrever();

console.log(Joao);
