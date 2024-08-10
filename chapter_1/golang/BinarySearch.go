package main

import "fmt"

func checkBin(array []int, i int) int {
	lowerPos := 0
	higherPos := len(array) - 1
	for lowerPos <= higherPos {
		midPos := (lowerPos + higherPos) / 2
		if array[midPos] == i {
			return midPos
		}
		if array[midPos] < i {
			lowerPos = midPos + 1
		} else {
			higherPos = midPos - 1
		}
	}
	return -1
}

func main() {
	fmt.Println(checkBin([]int{2, 5, 3, 6, 5}, 3))  // 2
	fmt.Println(checkBin([]int{1, 2, 3, 4, 5}, -1)) // -1
}