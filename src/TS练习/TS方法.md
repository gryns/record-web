# TS 方法

- extends: 在 ts 中充当 if 和 在 xxx 之中
- keyof: 获取接口或者类型中的 key 值，返回一个联合类型
- Pick<T , k extends keyof T> = {[P in K]:T[P]}: 从 T 中挑选一组键并集 K 中属性
- Exclude<T , U> = T extends U ? never : U: 从 T 中排除掉可分配 U 类型
- Record<K extends keyof any , T> = { [P in K]: T }: 用类型 T 的一组属性 K 构造一个类型
- Readonly<T> = { readonly [P in T]: T[P] }: 将 T 中的所有属性设置为只读
- Required<T> = { [P in T]-?: T[P] }: 将 T 中所有属性设置为必选
- Partial<T> = { [P in T]?: T[P] }: 将 T 中所有属性设置为可选
- Omit<T , K extends keyof any> = Pick<T , Exclude<keyof T , K>>: 以一个类型为基础支持剔除某些属性，然后返回一个新类型。

# Exclude 和 Omit 区别

```typescript
//直接上例子吧
Exclude<T , U>: T 表示联合类型，在T中剔除掉U，返回一个联合类型
type A = Exclude<'a'|'b'|'c' , 'a'> // A = 'a'| 'b'
Omit<T , K extends keyof any>: 也是从T中剔除K属性，返回Type类型
interface B = {
    name: string,
    age: number,
}
type C = Omit<B , 'name'> // C = { age: number }
```

- typeof: 用于获取变量或者属性的类型
- as: 表示断言
- never: 表示从来不会出现的类型，常常和 Exclude 搭配使用

# 解析例子中的表达含义

```typescript
interface Person {
	name: string
	age: number
}
// 例子：
type TypeAny = keyof any // number | string | symbol
type TypeAny = keyof Proson // name | age
// 解析: keyof后加参数表示返回一个联合类型，number | string | symbol
T extends keyof any
// 解析： T 在 any(未知类型)或者 如果T是any类型，当做if判断或者在XXX之内

```
