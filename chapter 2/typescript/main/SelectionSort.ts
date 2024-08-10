export default class SelectionSort {
  findLow(arr: number[]): number {
    const indexOfMin: number = arr.reduce((minIndex, current, currentIndex) => {
      return this.currentLessThanPrevious(current, arr[minIndex])
        ? currentIndex
        : minIndex;
    }, 0);
    return indexOfMin;
  }

  findHigh(arr: number[]): number {
    const indexOfMax: number = arr.reduce((minIndex, current, currentIndex) => {
      return this.currentGreaterThanPrevious(current, arr[minIndex])
        ? currentIndex
        : minIndex;
    }, 0);
    return indexOfMax;
  }

  selectionSort(arr: number[], order: number): number[] | number {
    if (this.isArrayEmpty(arr)) {
      return -1;
    }

    const sortedArr: number[] = [];

    switch (order) {
      case 1:
        while (arr.length > 0) {
          sortedArr.push(...arr.splice(this.findLow(arr), 1));
        }
        break;
    
      case -1:
        while (arr.length > 0) {
          sortedArr.push(...arr.splice(this.findHigh(arr), 1));
        }
        break;
    }

    return sortedArr;
  }

  isArrayEmpty(arr: number[]): boolean {
    if (arr.length === 0) {
      return true;
    }
    return false;
  }

  currentLessThanPrevious(current: number, previous: number): boolean {
    if (current < previous) {
      return true;
    }
    return false;
  }

  currentGreaterThanPrevious(current: number, previous: number): boolean {
    if (current > previous) {
      return true;
    }
    return false;
  }
}
