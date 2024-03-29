/**
 * @Descripttion: class 组件，子组件设置默认props和props类型
 * @param {*}
 * @return {*}
 */
import React, { Component } from "react"
interface TestPropsPort {
	name: String
	age?: Number
}
class TestProps extends Component<TestPropsPort, any> {
	static defaultProps = {
		name: "yy",
	}
	componentDidMount() {
		const arr: Array<any> = [1, 2, 3]
		arr.push("1")
		const age: number = 1
		if (typeof age === "number") {
			console.log("number")
		}
		function fn<T>() {}
	}
	render() {
		return <div></div>
	}
}
export default TestProps
