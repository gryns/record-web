# Event Loop--事件循环

这是一个头疼的问题，也是一个让面试者闻风丧胆的问题，起码对于我来说是这样的。即使你内心知道，那么该如何回答，才能博得面试官的微笑，才能让面试官满意呢？所以然

> JS 代码在执行中的`线程`分为`主线程（JS引擎）`和`幕后线程（工作线程）`。JS 同步代码在`主线程`中执行，形成一个`执行栈`，如果遇到异步，那么会把代码放到另一个线程中执行，其回调函数添加到任务队列里，这样就不会阻塞主线程执行，当执行栈里代码执行完后，会询问任务队列里是否有任务要执行，有的话取出来放到执行栈里去运行。`那么这个一直循环询问的过程就是事件循环（Event Loop）`。

总结</br>

- JS 引擎线程只执行`执行栈`中的事件
- 执行栈执行完毕，会询问任务队列中事件
- 任务队列中的等待执行的函数，是异步中的回调函数
- 询问是否有回调函数执行，然后加入执行栈中去运行，
- 如此循环

# 任务队列

在任务队列里添加的回调函数，也就是异步代码分为`宏任务`和`微任务`

- 宏任务：setTimeout , setInterval , setImmediate , script 标签 ， ajax ,
- 微任务: promise.then ， async/await . process.nextTick

说了这么对来看一下简单面试题吧

```javascript
console.log("1")
setTimeout(() => {
	console.log("setTimeout")
}, 0)
new Promise((resolve) => {
	console.log("promise")
	resolve()
}).then(() => {
	console.log("then promise")
})
function fn1() {
	console.log("fn1")
}
const fn = async function () {
	console.log("async 1")
	await fn1()
}
fn()
console.log("end")

// await fn1可以转换为
// new Promise((resolve) => {
// 	console.log("fn1")
// }).then(() => {
// 	console.log("async 2")
// })
// promise.then() 才是异步
/**
 * 1
 * promise
 * async 1
 * fn1
 * end
 * then promise
 * async 2
 * setTimeout
 * **/
```

参考链接</br>
[循环机制](https://juejin.cn/post/6844904079353708557)
