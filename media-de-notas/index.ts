/*
    Crie uma classe Student que tenha propriedades 
    para o nome do aluno e um array de notas. 
    Em seguida, implemente um método para calcular a média das notas do aluno.
*/

class Student {
  nome: string;

  notas: Array<number>;

  idade: number;

  constructor(nome: string, notas: Array<number>, idade: number) {
    this.nome = nome;
    this.notas = notas;
    this.idade = idade;
  }

  /**
   * seApresentar
   */
  public seApresentar(): void {
    console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos`);
  }
}

const aluno1 = new Student("Pedro Silva", [10, 9, 8], 17);

function calcularMediaDeNotas(aluno: Student): number {
  const notas = aluno.notas;

  if (notas.length === 0) return 0;

  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;

  return media;
}

console.log(calcularMediaDeNotas(aluno1));
