package main

func personIsSeller(name string) bool {
	return name[len(name)-1] == 'm'
}

var graph = make(map[string][]string)

func personNotInSearched(person string, searched []string) bool {
	for _, n := range searched {
		if n == person {
			return false
		}
	}
	return true
}

func search(name string) bool {
	var searchQueue []string
	searchQueue = append(searchQueue, graph[name]...)
	var searched []string
	var person string

	for len(searchQueue) != 0 {
		person = searchQueue[0]
		searchQueue = searchQueue[1:]

		if personNotInSearched(person, searched) {
			if personIsSeller(person) {
				println(person + " is a mango seller!")
				return true
			}
			searchQueue = append(searchQueue, graph[person]...)
			searched = append(searched, person)
		}
	}
	return false
}

func main() {
	graph["you"] = []string{"alice", "bob", "claire"}
	graph["bob"] = []string{"anuj", "peggy"}
	graph["alice"] = []string{"peggy"}
	graph["claire"] = []string{"thom", "jonny"}
	graph["anuj"] = []string{}
	graph["peggy"] = []string{}
	graph["thom"] = []string{}
	graph["jonny"] = []string{}

	search("you")
}
