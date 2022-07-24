# new 关键字的过程

只讲述`new`的过程步骤，不涉及其他知识点，直接干货上来

- 第一步：创建一个空对象（提问创建对象的方法有哪些）
- 第二步：把`构造函数`的`原型`赋值给空对象的`__proto__`
- 第三步：改变`构造函数`内部`this`的指向创建的空对象
- 第四步：判断`构造函数`返回的是否是对象，否则返回创建的对象

# 创建对象方法

```javascript
// 直接赋值一个大括号
const a = {}
// 使用new关键字
const a = new Object()
// 使用Object下的create方法创建，接收一个参数必须是 null , undefined , object ， 当时null , undefined时，此时的对象没有原型
const c = Object.create(null)
```

例子

```javascript
function myNew(func, ...rest) {
	const obj = {}
	obj.__proto = func.prototype
	// const obj = Object.create(func.prototype) 可以代替上面2步
	const cons = func.apply(obj, rest)
	return typeof cons === "object" ? cons : obj
}

function GirlFriend() {
	this.name = "mm"
	this.getName = function () {
		console.log(this.name)
	}
}

const girl = myNew(GirlFriend)
```
