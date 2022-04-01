# JS 中 this 的指向

之前我们有说过，`this`是 JS 代码在`执行阶段`时创建的。默认的`this`指向`window`,严格模式是`undefined`。当一个函数被调用时，会创建一个`执行上下文`，其`this`指向调用它的对象，也就是说谁调用就是指向那个对象。

# 默认绑定

```javascript
var foo = 123 // window.foo = 123
function get() {
	this.foo = 234 // this指向window， 相当于 window.foo = 234
	console.log(this) // window
	console.log(foo) // 234
}
get() // window.get() this指向window
```

# 对象内执行

```javascript
var a = 1
function get() {
	console.log(this.a)
}
const obj = {
	a: 10,
	bar() {
		console.log(this.a) // this 执行obj
		get() // 调用者默认是 window ， window.get()
	},
	ab: () => {
		console.log(this.a) // 箭头函数this指向调用者的上一层对象
	},
}
obj.bar()
obj.ab() // obj 是调用者 ， 上层对象时window ，也就是this指向window
const obj1 = obj.bar
obj1() // a = 1
// 执行结果是 10 ，1 ， 1 ，1 ， 1
```

# 函数内执行

```javascript
// * 默认执行的是window
var a = 1
function outfn() {
	var a = 2 // 如果不使用var 关键字呢？
	function inner() {
		console.log(this.a) // this 也是指向window
	}
	inner() // this 指向window
}
outfn()
```

# 改变 this 指向

`call`,`bind`,`apply`, `new` 可以改变 this 执行问题, apply()接收两个参数，第二个参数是个数组，bind 和 call()是参数是用逗号分隔

```javascript
// 示例
// bind(window , a,b,c) ,call(window , a,b,c)
// appli(window , [a,b,c])
// bind() 返回值是个函数，需要再次调用 bind()()
var a = 1
var obj = {
	a: 2,
	name: function () {
		console.log(this.a)
	},
}
var obj1 = {
	a: "obj",
}
obj.name.call() // window , 第一个参数默认是window
obj.name.call(obj1) // this执行的是obj1
```
