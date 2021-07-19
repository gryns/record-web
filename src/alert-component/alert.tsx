/*
 * @Descripttion: 轻提示
 * @version:
 * @Author: gry
 * @Date: 2021-06-29 17:06:08
 * @LastEditors: gry
 * @LastEditTime: 2021-07-08 10:41:08
 */

import React from "react";
import "./index.less";
export interface AlertProps {
	text: string;
	close?: () => void;
	wait?: number;
}

// const AlertD = (props: AlertProps) => {
//   const { text } = props;
//   return <div>{text}</div>;
// };
// export default AlertD;

class AlertC extends React.Component<AlertProps, any> {
	static defaultProps = {
		text: "text",
		close: () => {},
		wait: 2000,
	};

	componentDidMount() {
		const { wait, close } = this.props;
		const timer = setTimeout(() => {
			close();
			clearTimeout(timer);
		}, wait);
	}

	render() {
		const { text } = this.props;
		return <div className="alert-text confirm-content-animate">{text}</div>;
	}
}

export default AlertC;
