function somaPares(number: number): number {
  let sum: number = 0;

  if (!number) return 0;

  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(somaPares(10)); // 10;
console.log(somaPares(5)); // 6;
console.log(somaPares(8)); // 12;
