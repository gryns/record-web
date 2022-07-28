/**
 * readonly 只读属性
 * **/

interface Todo {
	title: string
	description: string
}

const todo: MyReadonly<Todo> = {
	title: "Hey",
	description: "foobar",
}

type MyReadonly<T> = {
   readonly [P in keyof T]: T[P]
}

type People = {
	readonly name: string,
	readonly age: number
}
const gry: People = {
	name: 'gry',
	age: 10
}

// gry.name = 'yy' // 只读属性

// todo.title = "Hello"
// todo.description = "barFoo" 