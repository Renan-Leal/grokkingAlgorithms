package main

import "fmt"

func count (arr []int) int {
	if len(arr) == 0 {
		return 0
	} 
	return 1 + count(arr[1:])
}

func main () {
	fmt.Print(count([]int{1, 1, 1, 3, 4, 6, 7, 3, 12, 34}))
}