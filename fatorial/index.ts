function fatorial(number: number): number {
  let fatorial: number = 1;

  for (let i = 1; i <= number; i++) {
    fatorial *= i;
  }

  return fatorial;
}

console.log(fatorial(4)); // 24
console.log(fatorial(5)); // 120
console.log(fatorial(6)); // 720
