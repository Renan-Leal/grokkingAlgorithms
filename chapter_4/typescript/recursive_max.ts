const max = (arr: number[], currentMax = 0): number =>
  arr.length === 0
    ? currentMax
    : max(arr.slice(1), arr[0] > currentMax ? arr[0] : currentMax);
  
console.log(max([30, 20, 12, 14, 33, 31, 22]))