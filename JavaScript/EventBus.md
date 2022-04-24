# EventBus 什么是 EventBus

`EventBus` 是`事件总线`，通常作为多个模块之间通信机制，相当于一个事件管理中心，一个模块发送消息，其它模块接收消息

# 实现

实现一个事件名唯一

```javascript
class EventBus {
	constructor() {
		this.event = {}
	}
	// 注册事件
	on(key, handle) {
		if (this.event[key]) {
			console.info(`%c事件名：${key}已经注册！`, "color:red") // %c 自行查阅
			// console.log(`"%c这是一段神奇的文字", 'color:red;font-size:40px;text-shadow:1px 1px 1px #ccc'`);
			// throw new Error(`事件名：${key}已经注册！`)
			return
		}
		this.event[key] = [handle]
	}
	// 触发事件
	emit(key, ...rest) {
		// 传递参数
		if (this.event[key]) {
			this.event[key].forEach((element) => {
				element && element(...rest)
			})
		}
	}
	// 注销事件
	off(key) {
		if (key) {
			this.event[key] && delete this.event[key]
		}
	}
}

const eventBus = new EventBus()
eventBus.on("name", (key, value) => {
	console.log("name-1", key, value)
})

eventBus.on("name", (key, value) => {
	console.log("name-2", key, value)
})
eventBus.on("age", (key, value) => {
	console.log("age")
})
eventBus.emit("name", 1, 2)
eventBus.emit("age")
eventBus.off("name")
eventBus.emit("name")
```

# TS 版本

# 参考链接

[EventBus](https://juejin.cn/post/7074190405616533534)
