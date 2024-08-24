const sumReduce = (arr: number[]): number => {
    return arr.reduce((previous, current) => previous + current);
}

console.log(sumReduce([3, 3, 4]));