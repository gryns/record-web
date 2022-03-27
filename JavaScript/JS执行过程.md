# JS 执行过程（基于 V8 引擎）

JS 在执行时分为两个阶段：`编译阶段`和`执行阶段`

# 编译阶段

- 词法分析：由字符组成的字符串分解成有意义的代码块,把代码拆分成对应的‘token’,固定的 type/value（类型和值）
- 语法分析: 有`parser`（转换为抽象语法树`AST` 树）,如果此时语法不符合规则，会被终止，抛出`语法错误`。重要概念`JS代码是边编译，边执行`。下一步把`AST`转换成`字节码`
- 创建作用域：用来管理引擎如何查找变量。其实就是来隔绝变量，对象，函数的，分为全局，函数，块级作用域。</br>
  例如

```javascript
function fn() {
	console.log(myName) // global_finget
}
function fn1() {
	var myName = " FinGet "
	fn()
}
var myName = " global_finget "
fn1()
```

# 补充 栈（stack）、堆（heap）、队列（queue）

- `栈`的特点是先进后出（LIFO-> last in first out），只有一个入口，从栈顶存入，取出时也从栈顶取出
- `堆`的特点是无序的`key-value`键值对存储方式，堆的存取和顺序没有关系，不限制出入口
- `队列`的特点是先进先出（FIFO-> first in first out）, 一个出口，一个入口。

# 执行阶段

创建执行上下文,确定`this`指向问题。默认情况下`this`指向`window`,严格模式下指向`undefined`。在函数中执行时，取决于调用者，如果调用者是对象，则指向对象。</br>

> 遇到函数时，会创建一个执行上下文，是指当前代码解析和执行的环境</br>

# JS 有三种执行上下文

- 全局执行上下文（只有一个）
- 函数执行上下文
- eval
  </br>
  执行上下文分为：`创建阶段`和`执行阶段`

# 参考链接

[JS 执行过程](https://segmentfault.com/a/1190000039380905)</br  >
[JS 执行过程详解，从编译到垃圾回收](https://juejin.cn/post/6937835082535141389)
