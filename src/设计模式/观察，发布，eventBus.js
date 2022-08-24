/**
 * 发布、订阅：由Publisher(发布)、topic(消息池)、Subscriber(订阅)三者组成
 * **/
class Publisher {
	constructor() {
		this.events = {}
	}
	// 订阅
	on(key, hander) {
		if (!this.events[key]) {
			this.events[key] = []
		}
		this.events[key].push(hander)
	}
	// 取消订阅
	off(key, handle) {
		if (this.events[key]) {
			const index = this.events[key].find(index => index === handle)
			this.events[key].splice(index, 1)
		}
	}
	// 发布
	emit(key, rest) {
		if (key) {
			this.events[key].forEach(element => {
				element.call(this, rest)
				if (keys.search("del")) {
					delete this.events[key]
				}
			});
		}
	}
	// 执行一次
	once(key, hander) {
		let keys = keys + "del";
		this.events[key].push(hander)
	}
}
const publish = new Publisher()
const jf = function (name) {
	console.log("jf--在打仗", name)
}
const wkl = function (name) {
	console.log("wkl--在打仗", name)
}
publish.on("wkl", wkl)

publish.on("wkl", jf)
publish.emit("wkl", '乌克兰和俄罗斯')
publish.off("wkl", wkl)
publish.emit("wkl")
publish.once("once", function () {
	console.log('执行一次');
})
publish.emit('once')

/**
 * 观察者模式： 由Observer(观察者)和 Subject(被观察者)组成
 * **/
