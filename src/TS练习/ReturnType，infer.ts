// infer 推导出位置类型变量
// infer P中 "P"就是待推导出的类型 ，
type ParamsTyper<T> = T extends (res: infer P) => any ? P : T
// 例子
interface User {
	name: string
	age: number
}

type Func = (user: User) => void

type P = ParamsTyper<Func>
type B = ParamsTyper<Number>

// 元组转换数组
type Tup = [string, number]
type MyTup<T> = T extends Array<infer P> ? P : T
type TupArr = MyTup<Tup>
type TupArr1 = Tup[number]

/**
 * ReturnType<T>: 获取函数的返回类型
 * **/
const fn = (v: boolean) => {
	if (v) return 1
	else return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

type MyReturnType<T> = T extends (...args: any) => infer P ? P : T
const ab = fn(true)
