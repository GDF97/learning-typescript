/*
    Crie uma classe Student que tenha propriedades 
    para o nome do aluno e um array de notas. 
    Em seguida, implemente um método para calcular a média das notas do aluno.
*/

namespace MediaComArray {
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

    public calcularMediaDeNotas(): number {
      const notas = this.notas;

      if (notas.length === 0) return 0;

      const soma = notas.reduce((acc, nota) => acc + nota, 0);
      const media = soma / notas.length;

      return media;
    }
  }

  const alunos: Array<Student> = [
    new Student("Pedro Silva", [10, 9, 8], 17),
    new Student("Vitor Eduardo", [8, 7, 9], 18),
    new Student("Neymar Junior", [9, 8, 7], 16),
  ];

  alunos.forEach((aluno) => {
    const media = aluno.calcularMediaDeNotas();
    console.log(`A media do aluno ${aluno.nome}, é de ${media}`);
  });
}
