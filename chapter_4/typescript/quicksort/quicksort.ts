const qsort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];

    const lowNumbers = arr.slice(1).filter((value) => value <= pivot);
    const highNumbers = arr.slice(1).filter((value) => value > pivot);

    return qsort(lowNumbers).concat(pivot, qsort(highNumbers));
  }
};

console.log(qsort([2, 12, 3, 4, 6, 8, 7, 3, 10]));
