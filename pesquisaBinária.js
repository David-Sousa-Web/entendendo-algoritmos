function PesquisaBinaria(lista, item) {
  var baixo = 0;
  var alto = lista.length - 1;

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) {
      return meio;
    }
    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }

  return null;
}

const MinhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(PesquisaBinaria(MinhaLista, 8));
