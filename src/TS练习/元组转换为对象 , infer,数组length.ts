// as 和 const 断言 ， 且其属性必须用readonly修饰

const tuple = ["tesla", "model 9", "modelX", "modelY"] as const

type TupleToObject<T extends readonly any[]> = {
	[P in T[number]]: P
}
interface A {
	name: string
	age: number
}
type B = {
	name: string
	age: number
}

type C = keyof A
type D = keyof B

type Gry = keyof any

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

/**
 * 例子 返回元组第一个元素
 * infer first: 表示等待推断出的参数
 * **/
type arr1 = [1, 2, 3]
type arr2 = ["a", "b", "c"]
// type First<T extends any[]> = T extends [infer first, ...any[]] ? first : never
type First<T extends any[]> = T extends [] ? never : T[0]
type head1 = First<arr1> // expected to be 1
type head2 = First<arr2> // expected to be 'a'
// 返回数组长度
type Length<T extends readonly any[]> = T["length"]
type len = Length<arr2>
// 例子
type Tup = [string, number]
type MyTup<T> = T extends Array<infer E> ? E : never
// type TupUnion = MyTup<Tup>
type TupUnion = Tup[number]
