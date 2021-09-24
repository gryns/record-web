/**
 * @Descripttion: class 组件，子组件设置默认props和props类型
 * @param {*}
 * @return {*}
 */
import React, { Component } from "react"
class TestProps extends Component<any, any> {
	props: {
		name: String
		age?: Number
	}
	static defaultProps = {
		name: "yy",
	}
	render() {
		return <div></div>
	}
}
export default TestProps
