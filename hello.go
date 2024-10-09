package main

import "fmt"

func sum(a int, b int) int {
	return a + b
}

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	name := "Light"
	fmt.Printf("Hello, I am %s. I'm", name)

	type Person struct {
		Name string
		Age  int
	}

	p := Person{Name: "Ben", Age: 22}
	fmt.Println(p.Name)

	if p.Age >= 18 {
		fmt.Println("You are an adult.")
	} else {
		fmt.Println("You are a minor.")
	}

    type Animal interface {
        Speak() string
    }

    type Dog struct{}

    func (d Dog) Speak() string {
        return "Woof"
    }

	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	result := sum(3, 7)
	fmt.Println(result)

	go func() {
		fmt.Println("Hello from goroutine!")
	}()

}
