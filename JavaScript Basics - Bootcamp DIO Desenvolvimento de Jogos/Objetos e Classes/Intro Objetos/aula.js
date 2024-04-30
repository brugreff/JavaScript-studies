// Estrutura Básica de um Objeto // será uma coleção de dados chave-valor, (objeto literal)

const Bruna = {
  nome: "Bruna S G de Souza",
  idade: 24,

  descrever: function () {
    console.log("Meu nome é ${this.nome} e minha idade é ${this.idade}");
    // this -> diz respeito ao contexto onde a função está sendo utilizada
  },
};

// Incrementando dinâmicamente este objeto literal - editando infos//

Bruna.altura = 1.54;

delete Bruna.nome;

console.log(Bruna);

// Criando Métodos para o Objeto (funções aplicadas ao objeto) // linha 6, dentro da const Bruna(alterando Bruna por pessoa)

// pessoa.nome = "Bruna";
// pessoa.idade = 30;

// pessoa.descrever(); // invocando o método inserido

// Acessando dinamicamente Valores de um Objeto //

const atributo = "idade"; //string que bate com o que está na const Bruna

console.log(Bruna[atributo]);
