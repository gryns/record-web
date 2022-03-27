# 浏览器里输入 URL 到页面显示，发生了什么

- 地址解析：判断是完整的 url，包括协议（http/https/ftp），域名（baidu.com）,文件路径,端口号
- 查找本地 hosts 文件：用来保存域名和域名对应的 IP 地址
- DNS 域名解析拿到服务器的 IP 地址：在没有任何缓存情况下，需要一步一步得到 IP 地址，否则从缓存里直接拿到 IP 地址
- TCP 建立连接
- 发送请求
- 服务器接收请求，处理后返回结果
- 浏览器接收到服务器响应
- 渲染页面：html 和 style，生成 http-> dom 树，css 规则树二者转换为渲染树，处理完重绘和回流后，页面显示。

# TCP/IP 连接

TCP/IP 分为 4 层，每一层都要对数据进行封装

- 应用层:发送 HTTP 报文请求
- 传输层：TCP 传输报文，建立连接前，进行三次握手（俗称 TCP 三次握手）
- 网络层：IP 地址查找 MAC 地址
- 链路层：以太网协议
  ## TCP 三次握手
  - client 向 server 发送请求
  - server 接收到后，向 client 发送接收数据准备
  - client 再次发送请求，server 收到后建立连接

# DNS 域名解析（缓存情况下）

- 浏览器缓存
- 本地缓存（操作系统缓存）
- 路由缓存
  ## 浏览器缓存
  - 强缓存：cache-control 和 expires
  - 协商缓存: Etag 和 Last-modified
  ### 存储位置
  - service worker
  - memory cache
  - disk cache

# HTTPS 协议（http：超文本传输协议）

https 是在 http 协议基础上添加一个层保护（SSL：安全套接层或者 TLS：传输层安全协议）。https 协议需要 7 次握手（3 次 TCP 和 4 次 TLS）

[参考链接：浏览器打开 URL 的过程](https://zhuanlan.zhihu.com/p/82956784)

[参考链接：浏览器打开 URL 的过程](https://www.zhihu.com/question/34873227/answer/69726883)
