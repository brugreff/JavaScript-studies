// Criando Classes e Instâncias //

class Pessoa {
  // definir como são pessoas, para que elas possam ser instanciadas
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

// Instanciando (instância é uma ocorrência da classe)

const Maria = new Pessoa();
Maria.nome = "Maria da Silva";
Maria.idade = 24;

const Joao = new Pessoa();
Joao.nome = "João de Souza";
Joao.idade = 21;

Maria.descrever();
Joao.descrever();
