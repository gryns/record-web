/**
 * Record<K , T>: 将k中的属性转换为T类型
 * Record<K extends keyof any , T> = { [P in k]: T }
 * **/
interface ResultA {
	code: string
	message: string
	context: any
}
type Resu = {
	name: string
	age: number
}
interface Res {
	[key: string]: any
}
// Record<string , any>
type MyRecord<T extends keyof any, P> = {
	[K in T]: P
}

type yy = keyof any

const obj: MyRecord<string, any> = {
	name: "yy",
}
obj.age = 20

type Result = "code" | "message" | "content"

const res: Record<Result, string> = {
	code: "0000",
	message: "success",
	content: "12",
}
