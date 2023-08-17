function buscaMenor(arr) {
  let menor = arr[0];
  let menorIndice = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      menorIndice = i;
    }
  }

  return menorIndice;
}

function ordenacaoPorSelecao(arr) {
  const novoArr = [];

  while (arr.length > 0) {
    const menor = buscaMenor(arr);
    novoArr.push(arr.splice(menor, 1)[0]);
  }

  return novoArr;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]));
