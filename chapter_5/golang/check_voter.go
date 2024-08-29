package main

import "fmt"

var voted map[string]bool

func check_voter(name string) {
	if voted[name] {
		fmt.Println("Kick them out!")
	} else {
		voted[name] = true
		fmt.Println("Let them vote!")
	}
}

func main() {
	voted = make(map[string]bool)
	check_voter("tom")
	check_voter("mike")
	check_voter("mike")
}
