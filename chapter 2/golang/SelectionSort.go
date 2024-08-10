package main

import "fmt"

func findLow(arr []int) int {
	low := arr[0]
	lowIndex := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] < low {
			low = arr[i]
			lowIndex = i
		}
	}
	return lowIndex
}

func selectionSort(arr []int) []int {
	size := len(arr)
	sortedArr := make([]int, size)
	for i := 0; i < size; i++ {
		smallest := findLow(arr)
		sortedArr[i] = arr[smallest]
		arr = append(arr[:smallest], arr[smallest+1:]...)
	}
	return sortedArr
}

func main() {
	fmt.Print(selectionSort([]int{7, 8, 5, 32, 4, 9}))
}
