const fact = (x: number): number => {
  if (x === 0) return 1;
  return x * fact(x - 1);
};

console.log(fact(5));
