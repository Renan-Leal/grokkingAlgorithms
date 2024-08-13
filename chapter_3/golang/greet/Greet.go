package main

import "fmt"

func greet2(name string) {
	fmt.Printf("How are you, %s\n", name)
}

func bye() {
	fmt.Print("ok bye!")
}

func greet(name string) {
	fmt.Printf("Hello, %s!\n", name)
	greet2(name)
	fmt.Println("getting ready to say bye...")
	bye()
}

func main() {
	greet("Renan")
}
