interface Camiseta {
  nome: string;
  cor: string;
  tamanho: string;
}

enum Size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande",
}

const Camisetas: Array<Camiseta> = [
  { nome: "Camiseta Gola W", cor: "Preta", tamanho: Size.P },
  { nome: "Camiseta Polo", cor: "Vermelha", tamanho: Size.M },
  { nome: "Camiseta Gola V", cor: "Azul", tamanho: Size.G },
];

Camisetas.forEach((camiseta) => {
  console.log(camiseta);
});
