/**
 * readonly 只读属性
 * never: 表示那些永不存在值得类型
 * **/

interface Todo {
	title: string
	description: string
}

const todo: Readonly<Todo> = {
	title: "Hey",
	description: "foobar",
}

type MyReadonly<T> = {
	readonly [P in keyof T]: T[P]
}

type People = {
	readonly name: string
	readonly age: number
}
const gry: People = {
	name: "gry",
	age: 10,
}

// gry.name = 'yy' // 只读属性

todo.title = "Hello"
todo.description = "barFoo"

/**
 * 例子：
 * never： 永不存在值得类型
 * **/

interface TodoA {
	title: string
	description: string
	completed: boolean
}

/**
 * MyExcudes<keyof T , A> --->
 * MyExcudes<title | desciption | completed ,  title | desciption> 其实就是 Exclude
 * **/
type MyExcudes<T, P> = T extends P ? never : T

type MyReadonly2<T, A extends keyof T> = {
	readonly [P in keyof T]: T[P]
} & {
	[P in MyExcudes<keyof T, A>]: T[P]
}

const todoa: MyReadonly2<TodoA, "title" | "description"> = {
	title: "Hey",
	description: "foobar",
	completed: false,
}

// todoa.title = 'YY'
// todoa.age = 20;
todoa.completed = true
