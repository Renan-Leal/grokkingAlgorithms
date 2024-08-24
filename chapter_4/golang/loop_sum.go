package main

import "fmt"

func sum (arr []int) int {
	sum := 0
	for _, v := range arr {
		sum += v
	}
	return sum
}

func main () {
	fmt.Print(sum([]int {1, 2, 3, 4, 4}))
}
