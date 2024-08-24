package main

import "fmt"

func recursiveSum (arr []int) int {
	if len(arr) == 0 {
		return 0
	}
	return arr[0] + recursiveSum(arr[1:])
}

func main () {
	fmt.Print(recursiveSum([]int{2, 4, 6, 4}))
}