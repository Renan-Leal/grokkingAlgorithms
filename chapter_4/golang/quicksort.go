package main

import "fmt"

func quicksort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	} else {
		pivot := arr[0]

		var less = []int{}
		var greater = []int{}

		for _, num := range arr[1:] {
			if pivot > num {
				less = append(less, num)
			} else {
				greater = append(greater, num)
			}
		}

		less = append(quicksort(less), pivot)
		greater = quicksort(greater)
		
		return append(less, greater...)
	}
}

func main() {
	fmt.Print(quicksort([]int{3, 7, 8, 2, 9, 17, 14, 12, 21, 17}))
}
