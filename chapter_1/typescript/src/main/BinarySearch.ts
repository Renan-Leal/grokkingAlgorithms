export default class BinarySearch {
  binarySearch(list: number[], item: number): number {
    if (this.isListEmpty(list)) {
      return -1;
    }

    let lowerPos: number = 0;
    let higherPos: number = list.length - 1;
    list.sort();

    while (lowerPos <= higherPos) {
      let midPos: number = Math.floor((lowerPos + higherPos) / 2);
      let guessItem: number = list[midPos];

      if (this.guessEqualsItem(guessItem, item)) {
        return midPos;
      } else if (this.guessGreaterThanItem(guessItem, item)) {
        higherPos = midPos - 1;
      } else if (this.guessLessThanItem(guessItem, item)) {
        lowerPos = midPos + 1;
      }
    }

    return -1;
  }

  isListEmpty(array: number[]): boolean {
    const arraySize: number = array.length;
    if (arraySize === 0) {
      return true;
    }
    return false;
  }

  guessEqualsItem(guess: number, item: number): boolean {
    if (guess !== item) {
      return false;
    }
    return true;
  }

  guessGreaterThanItem(guess: number, item: number): boolean {
    if (guess < item) {
      return false;
    }
    return true;
  }

  guessLessThanItem(guess: number, item: number): boolean {
    if (guess > item) {
      return false;
    }
    return true;
  }
}
