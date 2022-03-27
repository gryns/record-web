# CSS 隐藏标签的方法

隐藏标签的方法有`display: none` , `visibility: hidden` , `opacity: 0` , `position: absolute; overflow: hidden;`

- display: none;不占据位置空间，真正的标签隐藏，从显示/隐藏切换时，会触发回流和重绘。添加到元素上的事件不会触发，但是可以通过 dom 查找到添加事件。
- visibility: hidden;元素隐藏且占据位置空间，添加事件不会触发。
- opacity: 0; 视觉上元素变透明且占据位置空间。点击事件也会触发。
- position: absolute; overflow: hidden;把元素定位到盒子，外达到隐藏效果，事件也不会触发，
