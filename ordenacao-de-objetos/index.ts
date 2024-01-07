/*
    Crie uma função que receba um array de objetos 
    com propriedades "nome" e "idade" e 
    retorne o array ordenado por idade, do mais jovem para o mais velho.
*/

interface Pessoa {
  nome: string;
  idade: number;
}

const pessoas: Pessoa[] = [
  { nome: "Pedro", idade: 17 },
  { nome: "Jose", idade: 15 },
  { nome: "Vitor", idade: 24 },
  { nome: "Lorem", idade: 20 },
];

function pessoaMaisVelha(arr: Array<Pessoa>): Pessoa {
  let o_mais_velho: Pessoa = { nome: "", idade: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (o_mais_velho.idade < arr[i].idade) {
      o_mais_velho = arr[i];
    }
  }
  return o_mais_velho;
}

console.log(pessoaMaisVelha(pessoas)); // {nome: Vitor, idade: 24}
