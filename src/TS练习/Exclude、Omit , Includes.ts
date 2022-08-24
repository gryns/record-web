/**
 * Exclude<T , P> = T extends P ? never : T
 * 如果T 是P的子类型，返回never 否则返回T 说的这么复杂
 * 直译：从联合类型T中去掉P类型，得到新的联合类型
 * **/

import { type } from "os"

type A = number | string | boolean
type B = number

type C = Exclude<A, B>

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<"a" | "b" | "c", "a"> // b|c

/**
 * Omit<T , K>: 从T类型中剔除K属性
 * **/

// 实例1：
type Foo = {
	name: string
	age: number
}
	
type MyExcludeOmit<T, K> = T extends K ? never : T // 排除类型

type MyOmit<T, K> = {
	[P in MyExcludeOmit<keyof T, K>]: T[P]
}

type Bar = Omit<Foo, "age">
// type Bar = MyOmit<Foo, "age">

// 实例2
interface Todo {
	title: string
	description: string
	completed: boolean
}

// 写法1
type MyExclude2<T, U> = T extends U ? never : T
type MyOmit2<T, k> = {
	[P in MyExclude2<keyof T, k>]: T[P]
}
// 写法2 使用as 断言来实现
type MyOmitAs<T, K extends keyof T> = {
	[P in keyof T as P extends K ? never : P]: T[P]
}

type TodoPreview = MyOmitAs<Todo, "description" | "title">

const todo: TodoPreview = {
	completed: false,
}

// Includes
const arr = ["Kars", "Esidisi", "Wamuu", "Santana"]
type arrType = typeof arr
type isPillarMen = Includes<typeof arr, "Kars"> // expected to be `false`

type Includes<T extends any[], U> = T extends U ? true : false
