// import { Component } from "react";
// import { Confirm } from "../util";
// export default class My extends Component {
// 	componentDidMount() {
// 		window.addEventListener("popstate", this.watchHistoryBack, false);
// 		window.history.pushState(null, null, document.URL);
// 	}
// 	componentWillUnmount() {
// 		window.removeEventListener("popstate", this.watchHistoryBack, false);
// 	}
// 	watchHistoryBack = () => {
// 		Confirm({
// 			text: "back",
// 			runCancel: false,
// 			cancel: () => {
// 				window.history.go(-1);
// 				return false;
// 			},
// 			ok: () => window.history.pushState(null, null, "#"),
// 		});
// 	};
// 	render() {
// 		return <div>my</div>;
// 	}
// }

import { connect } from "react-redux"

const My = (props) => {
	console.log(props)
	const {
		value: { list = [], color },
	} = props
	return (
		<>
			<div
				style={{
					backgroundColor: color,
				}}
			>
				my
			</div>
			<ul>
				{list.map((item) => {
					return <li>{item.name}</li>
				})}
			</ul>
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		value: { ...state },
	}
}
export default connect(mapStateToProps)(My)
