package main

import "fmt"

func max(arr []int) int {

	if len(arr) == 2 {
		if arr[0] > arr[1] {
			return arr[0]
		}
		return arr[1]
	}

	subMax := max(arr[1:])
	if arr[0] > subMax {
		return arr[0]
	}
	return subMax
}

func main() {
	fmt.Print(max([]int{3, 2, 5, 2, 4, 7}))
}
