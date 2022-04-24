# Https 加密传输过程

`http`是`超文本传输协议(Hypertext Transfer Protocol)`，它不安全，数据在传输过程中以明文传递，数据得不到安全保障，容易被劫持，修改，伪造。</br>
`https`全称是`超文本传输安全协议(Hypertext Transfer Protocol Secure)`是数据传输的加密版本，在传输数据时，通过加密和身份验证来包装数据安全性。在`http`基础上加入了`SSL/TLS`(安全套阶层)

# HTTP、HTTPS 协议

http 协议默认端口运行在`8080`端口</br>
https 协议默认运行在`443`端口,主要做了三件事</br>

- 数据加密
- 数据一致性：防止被篡改
- 身份验证

# SSL/TLS

`SSL`安全套接层`Secure Sockets Layer`, `TLS`传输层安全性协议`Transport Layer Security`。此外 https 传输过程中需要额外的`4次握手`

# 对称加密、非对称加密（TLS）

- 对称加密：加密和解密的秘钥相同，常用的有`AES-128`,`DES`
- 非对称加密(公钥加密)：有一个公钥和一个私钥。公钥加密，私钥解密。公钥可供任何人使用，私钥只有自己知道，常用的有`RSA`
