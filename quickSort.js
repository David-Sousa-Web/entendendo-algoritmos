function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    var pivo = array[0];
    var menores = array.slice(1).filter((i) => i <= pivo);
    var maiores = array.slice(1).filter((i) => i > pivo);
    return quicksort(menores).concat([pivo], quicksort(maiores));
  }
}

console.log(quicksort([10, 5, 2, 3]));
