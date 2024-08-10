import BinarySearch from "./main/BinarySearch";

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