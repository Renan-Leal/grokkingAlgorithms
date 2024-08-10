import { describe, expect, test } from "@jest/globals";
import SelectionSort from "../main/SelectionSort";

describe("Selection sort module", () => {
  const selectionSort = new SelectionSort();

  test("Array must be empty", () => {
    const arr: number[] = [15, 37];
    const emptyArr: number[] = [];

    expect(selectionSort.isArrayEmpty(emptyArr)).toBe(true);
    expect(selectionSort.isArrayEmpty(arr)).toBe(false);
  });

  test("Current item must be less than previous", () => {
    expect(selectionSort.currentLessThanPrevious(4, 9)).toBe(true);
    expect(selectionSort.currentLessThanPrevious(9, 4)).toBe(false);
  });

  test("Current item must be greater than previous", () => {
    expect(selectionSort.currentGreaterThanPrevious(16, 9)).toBe(true);
    expect(selectionSort.currentGreaterThanPrevious(2, 12)).toBe(false);
  });

  test("Must return the index of the smallest value in the array ", () => {
    const arr: number[] = [9, 4, 5, 2, 9];
    expect(selectionSort.findLow(arr)).toBe(3);
  });

  test("Must return the index of the largest value in the array ", () => {
    const arr: number[] = [17, 8, 2, 28, 122, 22];
    expect(selectionSort.findHigh(arr)).toBe(4);
  });

  test("Must sort the array in ascending order", () => {
    const arr: number[] = [22, 44, 12, 6, 39, 9, 2, 19];
    const sortedArray: number[] = [2, 6, 9, 12, 19, 22, 39, 44];
    const order: number = 1; // ascending

    expect(selectionSort.selectionSort(arr, order)).toEqual(sortedArray);
  });

  test("Must sort the array in descending order", () => {
    const arr: number[] = [22, 44, 12, 6, 39, 9, 2, 19];
    const sortedArray: number[] = [44, 39, 22, 19, 12, 9, 6, 2];
    const order: number = -1; // descending

    expect(selectionSort.selectionSort(arr, order)).toEqual(sortedArray);
  });
});
