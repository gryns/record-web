# call()、apply()、bind()

每个`Function`构造函数对象都有其方法，其作用是改变 this 的指向。

- Function.prototype.call(window , args1 , args2,...)
- Function.prototype.apply(window , [args1 , args2,...])
- Function.prototype.bind(window , args1 , args2,...)
  > 接收的第一个参数可选，默认是`window`,第二个参数`可选`。call()的第`二`个参数使用`逗号`一个一个传递的。apply()的第二个参数是个数组。bind()的参数传递和`call()`一样，但是返回值是个函数

# 例子

```
var name = 'window'
var obj = {
    name: 'obj',
    getName:function(){
        console.log(this.name)
    }
}
const other = obj.getName;
obj.getName() // 'obj'
other() // 'window'
other.apply(obj) // 'obj'
other.bind(obj)() // 'obj'
```

# 手写 call()、apply()、bind()

## call()的写法

- 首先判断是否传入对象，否则取值`window`
- 添加一个属性，并赋值
- 获取剩余参数`...rest`
- 执行函数
- 删除添加的属性
- 返回函数结果

```
Function.prototype.myCall = function (fn , ...rest) {
    let context = fn || window;
    // 此处的this就是 getName(){}
    context.fn = this;
    // 取出参数，或者使用...rest
    const args = [...arguments].slice(1)
    // 执行函数fn，其实就是执行getName函数，再说明白一点就是执行obj.getName(),你说这时this指向是不是obj这个对象
    const res = context.fn(...args)
    // 使用完删除，释放内存
    delete context.fn
    return res;
}
other.myCall() // window
other.myCall(obj) // obj
```

## apply()的写法

```
Function.prototype.myApply = function (fn , ...rest) {
    let context = fn || window;
    context.fn = this;
    const args = [...arguments].slice(1) // 第二种方法使用：...rest
    if(!args){
        context.fn()
    }else{
        context.fn(...rest)
    }
    delete context.fn
}
other.myApply() // window
other.myApply(obj) // obj
```

## bind()的写法,返回值是个函数

```
Function.prototype.myBind = function (fn, ...rest) {
    let context = fn || window;
    // this就是getName函数，context就是obj对象，所以又转换成了other.apply(obj)
    const func = this;
    return function () {
        return func.apply(context, ...rest)
    }
}
```
觉得对你有帮助点击一个小星星吧! ^_^
