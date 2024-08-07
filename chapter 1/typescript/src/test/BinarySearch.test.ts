import { describe, expect, test } from "@jest/globals";
import BinarySearch from "../main/BinarySearch";

describe("Binary search module", () => {
  const binarySearch: BinarySearch = new BinarySearch();

  test("Guess must be empty", () => {
    const list: number[] = [15, 37];
    const emptyList: number[] = [];

    expect(binarySearch.isListEmpty(emptyList)).toBe(true);
    expect(binarySearch.isListEmpty(list)).toBe(false);
  });

  test("Guess must be equal than item", () => {
    expect(binarySearch.guessEqualsItem(5, 5)).toBe(true);
    expect(binarySearch.guessEqualsItem(5, 8)).toBe(false);
  });

  test("Guess must be greater than item", () => {
    expect(binarySearch.guessGreaterThanItem(9, 5)).toBe(true);
    expect(binarySearch.guessGreaterThanItem(5, 9)).toBe(false);
  });

  test("Guess must be less than item", () => {
    expect(binarySearch.guessGreaterThanItem(23, 7)).toBe(true);
    expect(binarySearch.guessGreaterThanItem(5, 9)).toBe(false);
  });

  test("Given list and item return index of item", () => {
    const testList: number[] = [1, 3, 5, 7, 9];

    expect(binarySearch.binarySearch(testList, 9)).toBe(4);
    expect(binarySearch.binarySearch(testList, 21)).toBe(-1);

  });
});
