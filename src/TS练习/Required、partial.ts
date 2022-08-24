/**
 * Required: 保留所有必传字段
 * Partial: 将类型设置为可选
 * **/

interface Res {
	name: string
	age: number
}

type MyRequire<T> = {
	[P in keyof T]-?: T[P]
}

type MyPartial<T> = {
	[P in keyof T]?: T[P]
}

type Params = Required<Res>
type PartialP = Partial<Res>

function fn(name?: string, age?: number) {
	console.log(name, age)
}

const yy = function (params: MyPartial<Res>) {}

yy({ name: "yy" })
