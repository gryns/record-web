# cookie 和 session

http cookie 通常叫做 cookie,是存储在客户端的会话信息，session 存储在服务器端。在请求头里设置 `cookie`，响应头里添加 `set-cookie`。服务器端收到 cookie 后来验证用户信息。</br>
例子：

```javascript
Request Headers 请求头
cookie: name=gry; age=10

Response Headers 响应头
set-cookie:name=gry
```

每一段信息作为 set-cookie 头的一部分，使用分号加空格分割每一段
格式： `set-cookie: key=value; domain , expires=Mon, 日期; secure=true;`

- secure:设置为 true 时，https 传输时带上

# 限制

- cookie 必须是同源策略`domain`
- cookie 在浏览器端存储大小 5kb 作用
- cookie 是不区分大小写的，例如 myName 和 MyName 是同一个 cookie 值，其 key 和 value 必须经过 URL 转码

# 区别

- cookie 存储在客户端，session 存储在服务器端
- cookie 存储类型是`string`类型，session 存储类型是`object`类型
- cookie 在客户端可以进行修改伪造`CSRF跨站请求伪造`，session 在服务端没法直接修改
- cookie 受同源策略的影响，session 可进行多域共享
- cookie 存储大小 4kb 左右，session 在服务端大小可灵活设置
