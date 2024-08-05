class BinarySearch {
  binarySearch(array: number[], value: number): number | null  {
    let lowerPos: number = 0;
    let higherPos: number = array.length - 1;

    while (lowerPos <= higherPos) {
      let midPos: number = Math.floor((lowerPos + higherPos) / 2);
      let guessValue: number = array[midPos];
      if (guessValue === value) {
        return midPos;
      }
      if (guessValue > value) {
        higherPos = midPos - 1;
      } else {
        lowerPos = midPos + 1;
      }
    }
    return null;
  }
}

const array: number[] = [1, 3, 5, 7, 9];
const binarySearch = new BinarySearch();

const itemIndexBinarySearch: number | null = binarySearch.binarySearch(
  array,
  9
);

if (itemIndexBinarySearch) {
  console.log(
    `Binary search: Position: ${itemIndexBinarySearch} - Value: ${array[itemIndexBinarySearch]}`
  );
}
