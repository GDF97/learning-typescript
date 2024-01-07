function ePalindromo(palavra: string): boolean {
  let novaPalavra: string = "";

  if (!palavra) return false;

  for (let i = palavra.length - 1; i + 1 > 0; i--) {
    novaPalavra += palavra[i];
  }

  if (novaPalavra === palavra) {
    return true;
  }

  return false;
}

console.log(ePalindromo("ovo")); // true
console.log(ePalindromo("arroz")); // false
