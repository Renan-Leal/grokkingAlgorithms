const count = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  return 1 + count(arr.slice(1));
};

console.log(count([2, 3, 4, 5, 5]));
