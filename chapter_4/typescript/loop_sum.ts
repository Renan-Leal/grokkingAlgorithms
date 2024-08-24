const sum = (arr: number[]): number => {
  let sum: number = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
};

console.log(sum([3, 3, 4]));
