# 2022-07-22 -- 29 复习一下这周内容

先了解一下前置知识

- extends: 在 TS 中当做 if 或者在什么什么之中
- keyof: 获取 key 值，返回一个联合类型
- in: 遍历 常常和 keyof 搭配使用

## Pick<T , K extends keyof T> : 从 T 接口中，选择一组和 K 组成并集

```typescript
// 内置类型Pick
type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}
interface Result {
	code: string
	message: string
	context: any
}

// K extends keyof T 理解为 code 和 message 在 code message context 中

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P]
}

type MyPick1<T, K> = {
	[P in keyof T & K]: T[P]
}

type TodoView = MyPick1<Result, "code" | "message">
const todo: TodoView = {
	code: "000000",
	message: "gry",
}
```

## Readonly<T> 设置 T 中的所有属性为只读

```typescript
interface People {
	name: string
	age: number
}

type Peo = Readonly<People>
const res: Peo = {
	name: "yy",
	age: 12,
}
res.age = 10 // 报错 只读
// 实例 1
interface Todo {
	title: string
	description: string
}

type MyReadonly<T> = {
	readonly [P in keyof T]: T[P]
}

const todo: MyReadonly<Todo> = {
	title: "Hey",
	description: "foobar",
}

todo.title = "12" // 报错 只读
// 升级版实例
interface TodoA {
	title: string
	description: string
	completed: boolean
}

type MyExclude<T, U> = T extends U ? never : T

type MyReadonly2<T, K extends keyof T> = {
	readonly [P in K]: T[P]
} & {
	[P in MyExclude<keyof T, K>]: T[P]
}

const todoa: MyReadonly2<TodoA, "title" | "description"> = {
	title: "Hey",
	description: "foobar",
	completed: false,
}

todoa.title = "pp"
todoa.completed = true
```

## Exclude<T , U> = T extends U ? never : T 从 T 中排除掉可分配给 U 类型，也就是从 T 中去掉 U 类型

```typescript
type A = number | string | boolean
type B = number

type C = Exclude<A, B> // string | boolean

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<"a" | "b" | "c", "a"> // b|c
```

## Omit<T , K extends keyof any> = Pick<T , Exclude<keyof T , K>> 生成一个新类型，该类型拥有 T 中除了 K 属性以外的所有属性

```typescript
interface Todo {
	title: string
	description: string
	completed: boolean
}

type MyExclude<T, K> = T extends K ? never : T

type Omit2<T, K> = {
	[P in MyExclude<keyof T, K>]: T[P]
}

type TodoPreview = Omit2<Todo, "description" | "title">

const todo: TodoPreview = {
	completed: false,
}
```

Omit 和 Exclude 的区别

```typescript
type A = number | string | boolean
type B = number | boolean

type Foo = Exclude<A, B>
// 相当于
type Foo = string
---------------------------
type Foo = {
	name: string
	age: number
}

type Bar = Omit<Foo, 'age'>
// 相当于
type Bar = {
	name: string
}
```
