// 返回第一个元素
type arr = [1, 2, 3]
type MyFirst<T extends any[]> = T extends [infer P, ...any[]] ? P : never
type First = MyFirst<arr> // 1

// 返回最后一个
type MyLast<T extends any[]> = T extends [...any[], infer P] ? P : never
type Last = MyLast<arr> // 3

// 返回数组，除掉最后一个元素
type MyPop<T extends any[]> = T extends [...infer P, any] ? P : never
type Pop = MyPop<arr> // [1,2]

// 返回数组长度
type ArrLength<T extends any[]> = T extends [] ? never : T["length"]
type ArrLen = ArrLength<arr>

// 合并2个数组
type Concat<T extends any[], U extends any[]> = [...T, ...U]
type Result = Concat<[1], [2]> // expected to be [1, 2]

// push 数组
type Push<T extends number[], K> = [...T, K]

type ArrPush = Push<[1, 2], "3"> // [1, 2, '3']

type foo = {
	name: string
	age: string
}

type coo = {
	age: number
	sex: string
}

type Merge<T, K> = {
	[P in keyof T]: T[P]
} & {
	[P in keyof K]: K[P]
}

type Res = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
