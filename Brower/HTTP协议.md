# http 协议

`http(超文本传输协议)`,基于`TCP/IP`通信协议传输数据

# 请求方法

`http1.0`定义了 3 中方法, `GET`,`POST`,`HEAD`</br>
`http1.1`定义了 8 中方法，

- GET: 通常用来获取请求资源，一般有长度限制，各个浏览器不同，大小`4k`左右
- POST: 通常用来提交数据（表单提交、上传文件），数据包含在请求体里
- PUT: 用来更新数据请求
- DELETE: 用来删除指定数据
- OPTIONS: 获取服务器资源所支持的通信选项。预先发送一个`预检请求`然后获取服务器跨域请求支持的`请求方法`
- HEAD: 类似于 GET 请求，服务器不会返回数据
- PATCH:是对 `PUT` 方法的补充，用来对已知资源进行局部更新 。
- CONNECT:建立连接隧道，用于代理服务器
- TRACE: 追踪请求-响应的传输路径

# 常见请求头(Request Headers)

cookie: 发送 http 请求连接,会把同源下的 cookie 信息带上
Cache-Control/expires/Pragma: 设置浏览器缓存
Connection: 是否持久连接
Content-Type: 设置请求数据的`MIME`类型，设置请求数据类型
Content-Length: 请求体长度
Host：请求服务器域名和端口号

# 常见请求头(Response Headers)

Cache-Control: 告诉浏览器是哪种缓存类型

# 常见状态码

五中类型

- 1xx: 服务器接收到请求，需要请求者继续执行操作
- 2xx: 操作成功：客户端成功接收并处理
- 3xx: 重定向：需要进一步操作完成请求
- 4xx: 客户端错误：请求体或者 url 存在错误
- 5xx: 服务端错误：服务器处理请求时，发送了错误</br>
  常见状态码信息
- 200：请求成功
- 204：请求成功，但没有数据返回
- 300：多种选择，请求的资源有多个位置，需要客户端自行选择
- 301：永久重定向
- 302：临时重定向
- 400：请求参数有误
- 401：认证失败，需要用户认证身份
- 403：请求被拒
- 404：接口有误，url 不正确
- 405： 请求方法（method）不正确
- 500：服务器内部错误

# 跨域错误信息

`协议`、`域名`、`端口号`只要有一个不至于就是跨域

> Access to XMLHttpRequest at ‘xx’ from origin ‘xx’ has been blocked by CORS policy: No ‘`Access-Control-Allow-Origin`’ header is present on the requested resource.
