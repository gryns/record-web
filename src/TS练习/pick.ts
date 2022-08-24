/**
 * Pick 类型中的所有的属性中某一个属性单独提取出来
 * keyof 返回一个联合类型 'code'|'message'|'context'
 * in 遍历
 * extends: 当做if 或者 在什么什么之中
 * **/
interface Result {
	code: string
	message: string
	context: any
}
type Res = {
	name: string
	age: number
}
type TodoView = Pick<Result, "code" | "message">
type gry = keyof Res
type MyPick<T, P extends keyof T> = {
	[K in P]: T[K]
}
// 方法二
type MyPick2<T, P> = {
	[K in keyof T & P]: T[K]
}

const todo: TodoView = {
	code: "000000",
	message: "gry",
}
