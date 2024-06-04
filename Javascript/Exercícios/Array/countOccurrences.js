// Contar as ocorrencias de ume elemento no array
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  return array.reduce(
    (accumulator, current) =>
      current === searchElement ? accumulator + 1 : accumulator,
    0
  );
}
